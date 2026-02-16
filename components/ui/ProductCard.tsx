'use client'
import Image from 'next/image'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './Button'

type ProductCardProps = {
  title: string
  description?: string
  imageUrl?: string
  locked?: boolean
  onPrimary?: () => void
  onSecondary?: () => void
  primaryHref?: string
  primaryLabel?: string
  lockedLabel?: string
}

export function ProductCard({
  title,
  description,
  imageUrl,
  locked = false,
  onPrimary,
  onSecondary,
  primaryHref,
  primaryLabel,
  lockedLabel,
}: ProductCardProps) {
  const router = useRouter()
  const [hovering, setHovering] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative overflow-hidden rounded-xl brand-border bg-panel card-hover"
    >
      <div className="relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={640}
            height={360}
            className="h-40 w-full object-cover"
            priority={false}
          />
        ) : (
          <div className="h-40 w-full grid place-items-center bg-background-tertiary text-text-secondary text-xs">
            Sem imagem
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        {locked ? (
          <div className="absolute top-3 right-3 rounded-md bg-black/40 backdrop-blur px-2 py-1 text-xs">
            🔒 Bloqueado
          </div>
        ) : null}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-display text-base">{title}</h3>
        {description ? (
          <p className="text-sm text-text-secondary line-clamp-2">{description}</p>
        ) : null}
        <div className="pt-2">
          {locked ? (
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                className="w-full"
                onClick={onSecondary}
              >
                {lockedLabel ?? 'Desbloquear'}
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => {
                  if (primaryHref) router.push(primaryHref)
                  else onPrimary?.()
                }}
              >
                {primaryLabel ?? 'Acessar Conteúdo'}
              </Button>
              <Button variant="secondary" className="flex-1" onClick={onSecondary}>
                Saiba Mais
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-egress"
        style={{
          background:
            'radial-gradient(200px circle at 50% 100%, rgba(255,59,59,0.18), transparent 60%)',
        }}
      />
    </div>
  )
}
