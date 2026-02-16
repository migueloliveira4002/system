import React from 'react';
import { Section, ChapterTitle, PageFooter } from './ContentBlocks';

export const TableOfContents = () => {
  const modules = [
    {
      title: "INTRODUÇÃO",
      chapters: [
        { id: "01", title: "O Manifesto" },
      ]
    },
    {
      title: "MÓDULO I: O RESET BIOLÓGICO",
      chapters: [
        { id: "01", title: "A Crise da Virilidade" },
        { id: "02", title: "A Mentalidade do Protocolo" },
        { id: "03", title: "O Diagnóstico (Onde você está?)" },
        { id: "04", title: "O Inimigo Invisível (Xenoestrógenos)" },
        { id: "05", title: "Blindagem Ambiental" },
        { id: "06", title: "O Segundo Cérebro (Saúde Intestinal)" },
        { id: "07", title: "A Grande Faxina" },
      ]
    },
    {
      title: "MÓDULO II: COMBUSTÍVEL DE ELITE",
      chapters: [
        { id: "08", title: "O Mito da Gordura e do Colesterol" },
        { id: "09", title: "A Tríade Mineral (Zn, Mg, B)" },
        { id: "10", title: "O Poder Vermelho (Vasodilatação)" },
        { id: "11", title: "Alimentos Proibidos vs. Obrigatórios" },
      ]
    },
    {
      title: "MÓDULO III: A MÁQUINA",
      chapters: [
        { id: "12", title: "Treino Neuro-Hormonal" },
        { id: "13", title: "O Efeito Sistêmico das Pernas" },
        { id: "14", title: "Cardio Estratégico" },
        { id: "15", title: "Engenharia do Sono" },
        { id: "16", title: "Dopamina e Sol" },
      ]
    },
    {
      title: "MÓDULO IV: O ACELERADOR",
      chapters: [
        { id: "17", title: "O Que Realmente Funciona" },
        { id: "18", title: "Fitoterápicos e Adaptógenos" },
        { id: "19", title: "Onde Investir Seu Dinheiro" },
      ]
    },
    {
      title: "MÓDULO V: O PLANO DE AÇÃO",
      chapters: [
        { id: "20", title: "O Algoritmo de 21 Dias" },
        { id: "21", title: "Manutenção e Constância" },
      ]
    },
    {
      title: "CONCLUSÃO",
      chapters: [
        { id: "22", title: "O Despertar do Novo Homem" },
      ]
    }
  ];

  return (
    <Section id="toc">
      <ChapterTitle>SUMÁRIO</ChapterTitle>
      
      <div className="grid grid-cols-1 gap-8 mt-4">
        {modules.map((mod, idx) => (
          <div key={idx} className="break-inside-avoid">
            <h3 className="font-oswald text-brand-red text-xl mb-4 uppercase tracking-wider border-b border-slate-800 pb-2">
              {mod.title}
            </h3>
            <ul className="space-y-3">
              {mod.chapters.map((chap, cIdx) => (
                <li key={cIdx} className="flex justify-between items-baseline group">
                  <div className="flex items-baseline gap-4 w-full">
                    <span className="font-jetbrains text-slate-500 text-sm w-8">{chap.id}.</span>
                    <span className="font-inter text-slate-300 text-sm uppercase tracking-wide group-hover:text-white transition-colors">
                      {chap.title}
                    </span>
                    <div className="flex-grow border-b border-dotted border-slate-800 mx-4 opacity-50 relative top-[-4px]" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <PageFooter pageNumber="02" />
    </Section>
  );
};
