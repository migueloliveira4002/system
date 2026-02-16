import { ProductCard } from '@/components/ui/ProductCard'
import { SignOutButton } from '@/components/auth/SignOutButton'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { ProductRow, UserAccessRow } from '@/types/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const normalizeImageUrl = (u: string) => {
    try {
      if (!u) return ''
      if (u.startsWith('http://') || u.startsWith('https://')) return u
      return new URL(u, baseUrl).toString()
    } catch {
      return u
    }
  }
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

  let user: { id: string } | null = null
  try {
    const { data: userData, error: errorUser } = await supabase.auth.getUser()
    console.log('SSR getUser error:', errorUser?.message)
    user = userData.user ?? null
  } catch (e) {
    console.log('SSR getUser exception:', (e as any)?.message)
  }

  let products: ProductRow[] = []
  try {
    const { data: productsData, error: productsError } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
    console.log('Products data count:', productsData?.length ?? 0)
    console.log('Erro Products:', productsError?.message)
    products = (productsData ?? []) as ProductRow[]
  } catch (e) {
    console.log('Products fetch exception:', (e as any)?.message)
    products = []
  }

  let access: UserAccessRow[] = []
  try {
    if (user?.id) {
      const { data: accessData, error: errorAccess } = await supabase
        .from('user_access')
        .select('product_id, user_id')
        .eq('user_id', user.id)
      console.log('Access data count:', accessData?.length ?? 0)
      console.log('Erro Access:', errorAccess?.message)
      access = (accessData ?? []) as UserAccessRow[]
    } else {
      console.log('No user; treating access as empty')
      access = []
    }
  } catch (e) {
    console.log('Access fetch exception:', (e as any)?.message)
    access = []
  }

  const accessIds = new Set(access.map((a) => a.product_id))
  const unlockedProducts = accessIds.size > 0 ? products.filter((p) => accessIds.has(p.id)) : []
  const lockedProducts = accessIds.size > 0 ? products.filter((p) => !accessIds.has(p.id)) : products

  return (
    <main className="container space-y-10 pb-20">
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-panel brand-border">SK</span>
            <span className="font-display">SouKore</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <a href="/" className="hover:text-white">Início</a>
            <a href="/dashboard" className="text-white">Meus Protocolos</a>
            <a href="#" className="hover:text-white">Configurações</a>
          </nav>
          <SignOutButton />
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="font-display text-xl">Seus Protocolos</h2>
        {unlockedProducts.length === 0 ? (
          <p className="text-sm text-text-secondary">Nenhum protocolo liberado ainda.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {unlockedProducts.map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                description={p.description}
                imageUrl={normalizeImageUrl(p.image_url)}
                primaryHref={`/p/${p.slug}`}
                primaryLabel="Acessar Conteúdo"
              />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-xl">Suba de Nível</h2>
        <p className="text-sm text-text-secondary">
          Conteúdos bloqueados. Passe o mouse para destacar e destravar.
        </p>
        {lockedProducts.length === 0 ? (
          <p className="text-sm text-text-secondary">Nenhum protocolo disponível para desbloqueio.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedProducts.map((p) => (
              <ProductCard
                key={p.id}
                title={p.title}
                description={p.description}
                imageUrl={normalizeImageUrl(p.image_url)}
                locked
                lockedLabel="Desbloquear"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
