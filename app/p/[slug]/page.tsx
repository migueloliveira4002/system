import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import ContentReader from '@/components/reader/ContentReader'
import { ChapterRow, ModuleRow, ProductRow, UserAccessRow } from '@/types/db'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeRaw from 'rehype-raw'
import { calculateDaysActive } from '@/lib/drip'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ProductReaderPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set() {},
        remove() {},
      },
    }
  )

  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  const slug = resolvedParams.slug
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  if (productError || !product) {
    return (
      <div className="p-10 text-white">
        <h1>Erro de Depuração: Produto não encontrado</h1>
        <p>Slug procurado: {slug}</p>
        <p>Erro do Supabase: {JSON.stringify(productError)}</p>
      </div>
    )
  }

  let daysActive = -1
  if (user?.id) {
    let purchaseDate: string | null = null
    try {
      const { data: withCreated, error: errCreated } = await supabase
        .from('user_access')
        .select('product_id, user_id, created_at')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .maybeSingle()

      if (errCreated && (errCreated.message ?? '').includes('created_at')) {
        const { data: withoutCreated } = await supabase
          .from('user_access')
          .select('product_id, user_id')
          .eq('user_id', user.id)
          .eq('product_id', product.id)
          .maybeSingle()
        purchaseDate = null
      } else {
        const access = withCreated as (UserAccessRow | null)
        purchaseDate = access?.created_at ?? null
      }
    } catch {
      purchaseDate = null
    }
    daysActive = purchaseDate ? calculateDaysActive(purchaseDate) : 0
  }

  const { data: modulesData, error: modulesError } = await supabase
    .from('modules')
    .select('id, product_id, title, order_index, release_days, slug')
    .eq('product_id', product.id)
    .order('order_index', { ascending: true })
  if (modulesError) {
    return (
      <div className="p-10 text-white">
        <h1>Erro de Depuração: Falha ao buscar módulos</h1>
        <p>Produto: {product.id}</p>
        <p>Erro do Supabase: {JSON.stringify(modulesError)}</p>
      </div>
    )
  }
  const modules = (modulesData ?? []) as ModuleRow[]
  const moduleIds = modules.map((m) => m.id)

  let chapters: ChapterRow[] = []
  if (moduleIds.length > 0) {
    const { data: chaptersData, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, module_id, title, content, order_index')
      .in('module_id', moduleIds)
      .order('order_index', { ascending: true })
    if (chaptersError) {
      return (
        <div className="p-10 text-white">
          <h1>Erro de Depuração: Falha ao buscar capítulos</h1>
          <p>Módulos: {JSON.stringify(moduleIds)}</p>
          <p>Erro do Supabase: {JSON.stringify(chaptersError)}</p>
        </div>
      )
    }
    chapters = (chaptersData ?? []) as ChapterRow[]
  }

  const serialized = await Promise.all(
    chapters.map(async (c) => ({
      id: c.id,
      module_id: c.module_id,
      title: c.title,
      mdx: await serialize(c.content ?? '', {
        mdxOptions: {
          rehypePlugins: [
            [
              rehypeRaw,
              {
                passThrough: [
                  'mdxJsxFlowElement',
                  'mdxJsxTextElement',
                  'mdxFlowExpression',
                  'mdxTextExpression',
                  'mdxjsEsm',
                ],
              },
            ],
          ],
        },
      }),
    }))
  )

  const mapReleaseDays = (m: ModuleRow, index: number) => {
    if (typeof m.release_days === 'number') {
      return m.release_days
    }

    if (product.slug === 'protocolo-h-natural') {
      if (index <= 2) return 0
      if (index === 3) return 4
      if (index === 4) return 8
    }

    return 0
  }

  return (
    <ContentReader
      modules={modules.map((m, index) => ({
        id: m.id,
        title: m.title,
        slug: m.slug,
        release_days: mapReleaseDays(m, index),
      }))}
      chapters={serialized}
      daysActive={daysActive}
    />
  )
}
