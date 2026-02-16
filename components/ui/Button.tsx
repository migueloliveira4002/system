'use client'
import * as React from 'react'
function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  loadingLabel?: string
}

export function Button({
  className,
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingLabel = 'Carregando…',
  ...props
}: ButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [hovering, setHovering] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }
    el.addEventListener('mousemove', handleMove)
    return () => el.removeEventListener('mousemove', handleMove)
  }, [])

  const base =
    'relative inline-flex items-center justify-center brand-border brand-focus transition-colors duration-200 ease-egress rounded-lg select-none min-h-[44px]'

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }[size]

  const variants = {
    primary:
      'bg-brand-red text-white hover:brightness-110 cta-glow',
    secondary:
      'bg-panel text-text-primary hover:bg-background-tertiary',
    ghost:
      'bg-transparent hover:bg-panel text-text-primary',
  }[variant]

  return (
    <button
      ref={ref}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cx(base, sizes, variants, hovering && 'animate-borderPulse', className)}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          background:
            'radial-gradient(120px circle at var(--x, 50%) var(--y, 50%), rgba(255,59,59,0.15), transparent 60%)',
          opacity: hovering ? 1 : 0,
          transition: 'opacity 200ms ease',
        }}
      />
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <span className="size-4 rounded-full border-2 border-white/40 border-t-transparent animate-spin" />
          <span>{loadingLabel}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}
