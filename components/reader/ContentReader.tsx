'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { mdxComponents } from '@/components/mdx/MDXComponents'
import { LockedModule } from './LockedModule'
import { moduleComponents, moduleChapters } from '../modules/moduleMap'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

type ModuleData = {
  id: string
  title: string
  slug?: string
  release_days?: number | null
}

type ChapterData = {
  id: string
  module_id: string
  title: string
  mdx: any
}

type Props = {
  modules: ModuleData[]
  chapters: ChapterData[]
  daysActive?: number
}

export default function ContentReader({ modules, chapters, daysActive }: Props) {
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const chaptersByModule = useMemo(() => {
    const map: Record<string, ChapterData[]> = {}
    for (const c of chapters) {
      if (!map[c.module_id]) map[c.module_id] = []
      map[c.module_id].push(c)
    }
    for (const m of modules) {
      const slug = m.slug as string | undefined
      const synthetic = slug ? moduleChapters[slug] ?? [] : []
      if (synthetic.length > 0) {
        map[m.id] = synthetic.map(
          (sc) =>
            ({
              id: sc.id,
              module_id: m.id,
              title: sc.title,
              mdx: null,
            } as ChapterData)
        )
      }
    }
    return map
  }, [chapters, modules])

  const normalizedDaysActive =
    typeof daysActive === 'number' ? daysActive : -1

  const moduleLockMap = useMemo(() => {
    const map: Record<string, boolean> = {}
    for (const m of modules) {
      const release = typeof m.release_days === 'number' && m.release_days > 0 ? m.release_days : 0
      map[m.id] = normalizedDaysActive < 0 ? release > 0 : normalizedDaysActive < release
    }
    return map
  }, [modules, normalizedDaysActive])

  const firstChapterId = useMemo(() => {
    for (const m of modules) {
      if (moduleLockMap[m.id]) continue
      const list = chaptersByModule[m.id]
      if (list && list.length > 0) {
        return list[0].id
      }
    }
    return null
  }, [modules, moduleLockMap, chaptersByModule])

  useEffect(() => {
    if (!activeChapterId && firstChapterId) {
      setActiveChapterId(firstChapterId)
    }
  }, [activeChapterId, firstChapterId])

  const activeChapter = useMemo(() => {
    const direct = chapters.find((c) => c.id === activeChapterId)
    if (direct) return direct
    if (activeChapterId) {
      for (const m of modules) {
        const list = chaptersByModule[m.id] ?? []
        const found = list.find((c) => c.id === activeChapterId)
        if (found) return found
      }
    }
    return null
  }, [chapters, activeChapterId, modules, chaptersByModule])

  const activeModule = useMemo(
    () =>
      activeChapter
        ? modules.find((m) => m.id === activeChapter.module_id) ?? null
        : null,
    [modules, activeChapter]
  )

  const firstUnlockedModule = useMemo(() => {
    for (const m of modules) {
      if (!moduleLockMap[m.id]) return m
    }
    return modules[0] ?? null
  }, [modules, moduleLockMap])

  const resolvedModule = activeModule ?? firstUnlockedModule

  const ActiveModuleComponent =
    resolvedModule &&
    moduleComponents[(resolvedModule.slug as string) || resolvedModule.id]

  const activeChapterTitle = useMemo(() => {
    if (activeChapter) return activeChapter.title
    if (resolvedModule) {
      const list = chaptersByModule[resolvedModule.id] ?? []
      const current = list.find((c) => c.id === activeChapterId) ?? list[0]
      return current ? current.title : null
    }
    return null
  }, [activeChapter, resolvedModule, chaptersByModule, activeChapterId])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !activeModule) return
    const list = chaptersByModule[activeModule.id] ?? []
    if (list.length === 0) return
    const match = (activeModule.slug ?? '').match(/modulo-(\d+)/)
    const prefix = match ? `mod-${match[1]}-` : 'mod-'
    const sections = Array.from(el.querySelectorAll(`[id^="${prefix}"]`)) as HTMLElement[]
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        let targetEl: HTMLElement | null = null
        let best = 0
        for (const e of entries) {
          if (!e.isIntersecting) continue
          if (e.intersectionRatio > best) {
            best = e.intersectionRatio
            targetEl = e.target as HTMLElement
          }
        }
        if (!targetEl) return
        const idx = sections.findIndex((s) => s === targetEl)
        if (idx < 0) return
        const clamped = Math.min(Math.max(idx, 0), list.length - 1)
        const next = list[clamped]
        if (next && next.id !== activeChapterId) {
          setActiveChapterId(next.id)
        }
      },
      { root: el, threshold: [0.25, 0.5, 0.75] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [resolvedModule, chaptersByModule, activeChapterId])

  const renderModulesList = () => (
    <div className="space-y-4">
      {modules.map((m) => {
        const list = chaptersByModule[m.id] ?? []
        const isLockedModule = moduleLockMap[m.id]
        const release = typeof m.release_days === 'number' && m.release_days > 0 ? m.release_days : 0
        const daysRemaining = Math.max(0, release - normalizedDaysActive)
        const scrollToChapterId = (chapterId: string) => {
          const container = scrollRef.current
          if (!container) return
          let attempts = 0
          const run = () => {
            let target = container.querySelector(`[id="${chapterId}"]`) as HTMLElement | null
            if (!target) {
              const match = (m.slug ?? '').match(/modulo-(\d+)/)
              const prefix = match ? `mod-${match[1]}-cap-` : ''
              if (prefix) {
                const sections = Array.from(container.querySelectorAll(`[id^="${prefix}"]`)) as HTMLElement[]
                if (sections.length > 0) {
                  const idx = list.findIndex((c) => c.id === chapterId)
                  const clamped = Math.min(Math.max(idx, 0), sections.length - 1)
                  target = sections[clamped] ?? null
                }
              }
            }
            if (target) {
              const top = target.offsetTop
              container.scrollTo({ top: Math.max(top - 80, 0), behavior: 'smooth' })
            } else if (attempts < 10) {
              attempts += 1
              setTimeout(run, 50)
            }
          }
          setTimeout(run, 0)
        }
        return (
          <div key={m.id} className="rounded-md border border-border">
            <div className="px-3 py-2 font-medium flex items-center justify-between">
              <span>{m.title}</span>
              {isLockedModule ? (
                <span className="text-xs text-brand-red uppercase">
                  Bloqueado
                </span>
              ) : null}
            </div>
            {isLockedModule ? (
              <div className="px-3 py-2 text-xs text-text-secondary">
                Módulo bloqueado para garantia de absorção. Libera em{' '}
                {daysRemaining > 0 ? daysRemaining : 1} dias.
              </div>
            ) : (
              <div className="px-2 py-2 space-y-1">
                {list.map((c) => {
                  const isActive = c.id === activeChapterId
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setActiveChapterId(c.id)
                        setMobileOpen(false)
                        scrollToChapterId(c.id)
                      }}
                      className={
                        'relative w-full text-left px-3 py-2 rounded-md flex items-center gap-2 transition-colors duration-300 ease-out ' +
                        (isActive
                          ? 'text-white bg-background-tertiary'
                          : 'text-text-secondary hover:text-white hover:bg-background-tertiary')
                      }
                    >
                      <span
                        aria-hidden
                        className={
                          'absolute left-0 top-0 h-full w-[2px] bg-brand-red transition-transform duration-300 ease-out ' +
                          (isActive ? 'scale-y-100' : 'scale-y-0 origin-top')
                        }
                      />
                      <span>{c.title}</span>
                    </button>
                  )
                })}
                {list.length === 0 ? (
                  <div className="px-3 py-2 text-xs text-text-secondary">Sem capítulos</div>
                ) : null}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )

  return (
    <div className="h-screen w-full overflow-hidden flex">
      <aside className="h-full w-80 overflow-y-auto bg-[#0A0A0A] border-r border-border hidden md:block">
        <div className="p-4">{renderModulesList()}</div>
      </aside>
      <main ref={scrollRef} className="h-full flex-1 overflow-y-auto bg-[#111111]">
        <div className="sticky top-0 z-10 hidden md:flex items-center justify-end gap-3 px-6 py-3 border-b border-border bg-[#111111]/90 backdrop-blur">
          <Button variant="secondary" size="sm" onClick={() => router.push('/dashboard')}>Sair</Button>
        </div>
        <div className="sticky top-0 z-10 bg-[#111111]/90 backdrop-blur px-6 py-3 md:hidden border-b border-border">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileOpen(true)}
              className="px-3 py-2 rounded-md bg-background-tertiary text-white hover:bg-background-secondary"
            >
              Módulos
            </button>
            <div className="flex items-center gap-3">
              <div className="text-text-secondary text-sm">
                {activeChapterTitle ?? 'Leitor'}
              </div>
              <Button variant="secondary" size="sm" onClick={() => router.push('/dashboard')}>Sair</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 px-6">
          {ActiveModuleComponent ? (
            resolvedModule && moduleLockMap[resolvedModule.id] ? (
              <LockedModule
                title={activeChapterTitle ?? resolvedModule.title}
                daysRemaining={
                  Math.max(
                    0,
                    (resolvedModule.release_days ?? 0) - normalizedDaysActive
                  ) || 1
                }
              />
            ) : (
              <ActiveModuleComponent />
            )
          ) : activeChapter ? (
            <article>
              <h1 className="text-3xl font-bold text-white mb-4">
                {activeChapter.title}
              </h1>
              <MDXRemote {...activeChapter.mdx} components={mdxComponents} />
            </article>
          ) : (
            <div className="text-text-secondary">
              Selecione um capítulo para iniciar a leitura.
            </div>
          )}
        </div>
      </main>
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar"
          />
          <div className="absolute left-0 top-0 h-full w-4/5 max-w-[20rem] bg-[#0A0A0A] border-r border-border">
            <div className="p-4 flex items-center justify-between border-b border-border">
              <div className="font-semibold">Conteúdo</div>
              <button
                onClick={() => setMobileOpen(false)}
                className="px-2 py-1 rounded-md text-text-secondary hover:text-white"
              >
                Fechar
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">{renderModulesList()}</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
