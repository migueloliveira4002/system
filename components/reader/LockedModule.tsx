'use client'

type Props = {
  title?: string
  daysRemaining: number
}

export const LockedModule = ({ title, daysRemaining }: Props) => {
  const safeDays = daysRemaining > 0 ? daysRemaining : 1
  return (
    <div className="bg-[#050505] border border-brand-red/60 rounded-lg p-8 shadow-[0_0_30px_rgba(248,113,113,0.2)]">
      <div className="flex items-center gap-4 mb-4">
        <div className="inline-flex items-center justify-center rounded-full border border-brand-red/70 bg-brand-red/10 p-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-brand-red"
          >
            <path
              fill="currentColor"
              d="M17 10h-1V8a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-7-2a2 2 0 0 1 4 0v2h-4Zm7 11H7v-7h10Z"
            />
          </svg>
        </div>
        <div>
          <p className="font-oswald text-sm tracking-[0.25em] text-brand-red uppercase">
            Conteúdo protegido
          </p>
          {title ? (
            <h2 className="font-oswald text-2xl text-white mt-1 uppercase">
              {title}
            </h2>
          ) : null}
        </div>
      </div>
      <p className="font-jetbrains text-sm text-slate-300 leading-relaxed">
        Módulo bloqueado para garantia de absorção. Libera em{' '}
        <span className="text-brand-red font-bold">{safeDays}</span> dias.
      </p>
      <p className="font-jetbrains text-xs text-slate-500 mt-3">
        Use este intervalo para aplicar os protocolos já liberados antes de
        avançar para o próximo nível.
      </p>
    </div>
  )
}

