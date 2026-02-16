import type { ComponentType } from 'react'
import { Module1 } from '@/components/ebooks/protocolo-h-natural/modules/Module1'
import { Module2 } from '@/components/ebooks/protocolo-h-natural/modules/Module2'
import { Module3 } from '@/components/ebooks/protocolo-h-natural/modules/Module3'
import { Module4 } from '@/components/ebooks/protocolo-h-natural/modules/Module4'
import { Module5 } from '@/components/ebooks/protocolo-h-natural/modules/Module5'

export const moduleComponents: Record<string, ComponentType> = {
  'modulo-1': Module1,
  'modulo-2': Module2,
  'modulo-3': Module3,
  'modulo-4': Module4,
  'modulo-5': Module5,
}

export const moduleChapters: Record<
  string,
  { id: string; title: string }[]
> = {
  'modulo-1': [
    { id: 'mod-1-cap-1', title: '01. A Crise da Virilidade' },
    { id: 'mod-1-cap-2', title: '02. A Mentalidade do Protocolo' },
    { id: 'mod-1-cap-3', title: '03. O Diagnóstico (Onde Você Está?)' },
    { id: 'mod-1-cap-04', title: '04. O Inimigo Invisível (Xenoestrógenos)' },
    { id: 'mod-1-cap-05', title: '05. Blindagem Ambiental' },
    { id: 'mod-1-cap-06', title: '06. O Segundo Cérebro (Saúde Intestinal)' },
    { id: 'mod-1-cap-7', title: '07. A Grande Faxina' },
  ],
  'modulo-2': [
    { id: 'mod-2-cap-8', title: '08. O Mito da Gordura e do Colesterol' },
    { id: 'mod-2-cap-9', title: '09. A Tríade Mineral (Zn, Mg, B)' },
    { id: 'mod-2-cap-10', title: '10. O Poder Vermelho (Vasodilatação Natural)' },
    { id: 'mod-2-cap-11', title: '11. Alimentos Proibidos vs. Obrigatórios' },
  ],
  'modulo-3': [
    { id: 'mod-3-cap-12', title: '12. Treino Neuro-Hormonal' },
    { id: 'mod-3-cap-13', title: '13. O Efeito Sistêmico das Pernas' },
    { id: 'mod-3-cap-14', title: '14. Cardio Estratégico' },
    { id: 'mod-3-cap-15', title: '15. Engenharia do Sono' },
    { id: 'mod-3-cap-16', title: '16. Dopamina e Sol' },
  ],
  'modulo-4': [
    { id: 'mod-4-cap-17', title: '17. O Que Realmente Funciona' },
    { id: 'mod-4-cap-18', title: '18. Fitoterápicos e Adaptógenos' },
    { id: 'mod-4-cap-19', title: '19. Inteligência de Consumo' },
  ],
  'modulo-5': [
    { id: 'mod-5-cap-20', title: '20. O Algoritmo de 21 Dias' },
    { id: 'mod-5-cap-21', title: '21. Manutenção e Constância' },
    { id: 'mod-5-cap-22', title: '22. Conclusão' },
    { id: 'conclusion', title: 'Conclusão' },
  ],
}
