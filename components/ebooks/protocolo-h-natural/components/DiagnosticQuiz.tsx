'use client';

import React, { useState } from 'react';
import { clsx } from 'clsx';
import { BiohackBox } from './ContentBlocks';

interface Question {
  id: string;
  text: string;
}

interface DiagnosticQuizProps {
  questions: {
    physical: Question[];
    mental: Question[];
    hormonal: Question[];
  };
}

export const DiagnosticQuiz = ({ questions }: DiagnosticQuizProps) => {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleScoreChange = (id: string, value: number) => {
    setScores(prev => {
      // Se clicar no mesmo valor já selecionado, desmarca (remove do state)
      if (prev[id] === value) {
        const newScores = { ...prev };
        delete newScores[id];
        return newScores;
      }
      // Caso contrário, atualiza com o novo valor
      return {
        ...prev,
        [id]: value
      };
    });
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getResult = () => {
    if (totalScore <= 12) return {
      title: "ZONA DE MANUTENÇÃO (VERDE)",
      desc: "Você é uma raridade. Sua biologia está resiliente. O protocolo servirá como um ajuste fino para te levar ao nível de elite absoluto.",
      color: "text-green-500",
      border: "border-green-500"
    };
    if (totalScore <= 28) return {
      title: "ZONA DE DECLÍNIO (AMARELO)",
      desc: "Seu sistema está sob ataque. Os xenoestrógenos e o estresse já começaram a vencer a batalha. Você precisa do Módulo II (Nutrição) e do Módulo IV (Suplementação) imediatamente para reverter o quadro.",
      color: "text-yellow-500",
      border: "border-yellow-500"
    };
    return {
      title: "ZONA DE EMERGÊNCIA (VERMELHO)",
      desc: "Estado de Castração Química Ambiental. Seus níveis hormonais estão provavelmente no patamar de um homem 30 anos mais velho que você. Para você, a execução deste protocolo é um dever de sobrevivência biológica.",
      color: "text-brand-red",
      border: "border-brand-red"
    };
  };

  const result = getResult();

  const renderSection = (title: string, items: Question[]) => (
    <div className="mb-8">
      <h4 className="font-oswald text-brand-red text-lg mb-4 uppercase tracking-wider border-b border-slate-800 pb-2">
        {title}
      </h4>
      <div className="space-y-6">
        {items.map((q) => (
          <div key={q.id} className="flex flex-col gap-2">
            <p className="font-inter text-slate-300 text-sm">{q.text}</p>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((val) => (
                <button
                  key={val}
                  onClick={() => handleScoreChange(q.id, val)}
                  className={clsx(
                    "w-10 h-10 rounded border text-sm font-bold transition-all flex items-center justify-center",
                    scores[q.id] === val
                      ? "bg-brand-red border-brand-red text-white shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                      : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
                  )}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="my-8 break-inside-avoid">
      <div className="bg-black/30 p-6 border border-slate-800 rounded-lg mb-8">
        <p className="font-jetbrains text-xs text-slate-400 mb-6 uppercase tracking-wider text-center">
          ATRIBUA UMA NOTA DE 0 A 4 (0 = NUNCA, 4 = CONSTANTEMENTE)
        </p>
        
        {renderSection("Sinalizadores de Vitalidade Física", questions.physical)}
        {renderSection("Sinalizadores de Performance Mental", questions.mental)}
        {renderSection("Sinalizadores Hormonais Diretos", questions.hormonal)}
      </div>

      <div className="bg-brand-dark p-6 border-l-4 border-brand-red shadow-lg break-inside-avoid">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-oswald font-bold text-xl text-white uppercase tracking-wider">
            ÍNDICE DE URGÊNCIA
          </h4>
          <span className="font-oswald text-4xl text-brand-red">{totalScore}</span>
        </div>
        
        <div className="font-inter text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
          <p className={clsx("font-bold mb-2 uppercase", result.color)}>
            {result.title}
          </p>
          <p>{result.desc}</p>
        </div>
      </div>
    </div>
  );
};
