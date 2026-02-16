import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'

const mockProducts = [
  {
    id: 'h-natural',
    title: 'Protocolo H-Natural',
    description:
      'O protocolo definitivo de otimização natural masculina. Rotinas, nutrição e performance.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-d1f5d907f84e?q=80&w=1600&auto=format&fit=crop',
    locked: false,
  },
  {
    id: 'alpha-focus',
    title: 'Alpha Focus',
    description:
      'Sistema de foco extremo com técnicas de gerenciamento cognitivo para alta performance.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    locked: true,
  },
]

export default function HomePage() {
  return (
    <main className="container space-y-16 pb-20">
      <section className="relative pt-16 md:pt-24">
        <div className="absolute -top-20 inset-x-0 h-64 bg-radial-faint pointer-events-none" />
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="font-display text-3xl md:text-5xl leading-tight">
            Sua evolução não é negociável
          </h1>
          <p className="text-text-secondary md:text-lg">
            SouKore é o seu laboratório de alta performance. Protocolos avançados, saúde,
            biohacking e desenvolvimento masculino para a elite.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/login">
              <Button size="lg" variant="primary">Entrar</Button>
            </Link>
            <Button size="lg" variant="secondary">Conhecer os Protocolos</Button>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl">Protocolos em Destaque</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              locked={p.locked}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-border pt-6 text-center text-sm text-text-secondary">
        © {new Date().getFullYear()} SouKore. Minimalista. Foco. Performance.
      </footer>
    </main>
  )
}
