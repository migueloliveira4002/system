import React from 'react';

export const Cover = () => {
  return (
    <div className="cover-container relative flex flex-col items-center justify-between py-12 md:py-16">
      {/* Background Image Placeholder / Effect */}
      <div className="absolute inset-0 z-0">
        {/* Camada base preta */}
        <div className="absolute inset-0 bg-brand-black" />
        
        {/* Simulação de iluminação/rosto com gradiente radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,_rgba(40,40,40,1)_0%,_rgba(0,0,0,1)_70%)] opacity-80" />
        
        {/* Textura de Ruído (Noise) */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }}
        />
        
        {/* Vinheta para escurecer bordas */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_90%)]" />
      </div>

      {/* Conteúdo - Z-Index alto para ficar sobre o fundo */}
      <div className="z-10 w-full flex flex-col items-center h-full justify-between">
        
        {/* Autor */}
        <div className="w-full text-center mt-4 md:mt-8">
          <h2 className="font-jetbrains text-slate-300 text-xs md:text-sm tracking-[0.3em] uppercase opacity-80">
            Miguel Oliveira
          </h2>
        </div>

        {/* Título Principal - Centralizado e Massivo */}
        <div className="flex flex-col items-center justify-center w-full px-4 relative">
          <h1 className="font-oswald font-bold text-6xl sm:text-8xl md:text-[110px] leading-[0.9] md:leading-[0.85] text-brand-red text-center tracking-tighter uppercase mix-blend-hard-light drop-shadow-2xl">
            Protocolo
            <br />
            H-Natural
          </h1>
          
          {/* Efeito de brilho sutil atrás do texto */}
          <div className="absolute inset-0 bg-brand-red blur-[80px] md:blur-[120px] opacity-10 pointer-events-none rounded-full" />
        </div>

        {/* Subtítulo / Rodapé */}
        <div className="w-full text-center mb-8 md:mb-12 px-6 md:px-8">
          <p className="font-jetbrains text-slate-400 text-[10px] md:text-xs tracking-[0.2em] leading-relaxed uppercase border-t border-slate-800 pt-4 md:pt-6">
            O Guia de Otimização Hormonal
            <br />
            <span className="text-slate-200">e Performance Masculina</span>
          </p>
        </div>
      </div>
      
      {/* Elementos Decorativos / "Sujeira" da lente */}
      <div className="absolute top-1/4 left-10 w-1 h-12 bg-slate-800/30 rotate-12 blur-[1px]" />
      <div className="absolute bottom-1/3 right-12 w-32 h-[1px] bg-slate-700/20 rotate-[-5deg]" />
    </div>
  );
};
