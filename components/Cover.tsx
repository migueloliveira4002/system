import Image from 'next/image'

type Props = {
  alt?: string
}

export const Cover = ({ alt = 'Capa do Protocolo H-Natural' }: Props) => {
  return (
    <div className="relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/images/capa-protocolo-h-natural.png"
          alt={alt}
          width={1600}
          height={900}
          priority
          sizes="(max-width: 768px) 100vw, 70vw"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}
