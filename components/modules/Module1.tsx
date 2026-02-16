import { Cover } from '@/components/Cover'
import { BiohackBox } from '@/components/ContentBlocks'
import { DiagnosticQuiz } from '@/components/DiagnosticQuiz'

export function Module1() {
  return (
    <div className="space-y-10">
      <Cover />

      <BiohackBox
        title="Fundamentos do Protocolo H-Natural"
        level="Avançado"
      >
        <p>
          Este módulo estabelece os princípios centrais do protocolo, preparando
          seu sistema para a recuperação hormonal e de performance.
        </p>
      </BiohackBox>

      <DiagnosticQuiz />
    </div>
  )
}

