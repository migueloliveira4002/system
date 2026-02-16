import {
  Section,
  ChapterTitle,
  PageFooter,
  Paragraph,
  SubTitle,
  List,
  BiohackBox,
} from '../components/ContentBlocks'
import { Checklist } from '../components/Checklist'

export function Module5() {
  return (
    <div className="space-y-16">
      <Section id="mod-5-cap-20">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO V: O PLANO DE AÇÃO
        </h3>
        <ChapterTitle>20. O ALGORITMO DE 21 DIAS</ChapterTitle>

        <SubTitle>A Programação da sua Nova Realidade Biológica</SubTitle>
        <Paragraph>
          Chegamos à fase de execução. Você já possui o conhecimento sobre a{' '}
          <span className="font-jetbrains text-brand-red">Esteroidogênese</span>{' '}
          (o processo de fabricação de hormônios no corpo), já limpou sua
          despensa de{' '}
          <span className="font-jetbrains text-brand-red">Xenoestrógenos</span>{' '}
          (compostos químicos que mimetizam o estrogênio) e já entende a
          mecânica do treino pesado. Agora, vamos consolidar tudo isso em um{' '}
          <span className="font-jetbrains text-brand-red">Algoritmo</span> (uma
          sequência lógica e finita de instruções para resolver um problema ou
          executar uma tarefa).
        </Paragraph>
        <Paragraph>
          Por que 21 dias? Porque este é o tempo necessário para que o seu
          sistema nervoso realize a{' '}
          <span className="font-jetbrains text-brand-red">
            Neuroplasticidade
          </span>{' '}
          (a capacidade do cérebro de criar novas conexões neurais e adaptar-se
          a novos hábitos) e para que o seu{' '}
          <span className="font-jetbrains text-brand-red">
            Ritmo Circadiano
          </span>{' '}
          (o relógio biológico de 24 horas) se alinhe com a sua nova produção
          hormonal. Este não é um teste; é um protocolo de comando para o seu
          DNA.
        </Paragraph>

        <div className="my-8 border-2 border-brand-red/20 p-2 bg-black/50 break-inside-avoid">
          <img
            src="/images/ciclo-circadiano.png"
            alt="Gráfico do Ciclo Circadiano: Cortisol vs Melatonina"
            className="w-full h-auto object-contain"
          />
          <p className="text-center text-xs text-gray-500 mt-2 font-jetbrains">
            Figura: O Ciclo Sleep/Wake ideal
          </p>
        </div>

        <SubTitle>O CICLO DIÁRIO: PASSO A PASSO TÁTICO</SubTitle>
        <Paragraph>
          Para que o Protocolo H-Natural funcione, a consistência deve ser
          absoluta. Abaixo, detalho a sua rotina ideal, desenhada para maximizar
          os picos naturais de testosterona e garantir que a sua{' '}
          <span className="font-jetbrains text-brand-red">Homeostase</span> (o
          equilíbrio interno do corpo) seja inabalável.
        </Paragraph>

        <div className="space-y-8 mt-6">
          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              FASE 01: O DESPERTAR DO TITÃ (06:00 – 08:00)
            </h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Hidratação Hiperosmótica:</strong>{' '}
              Logo ao acordar, beba 500ml de água mineral com uma pitada de sal
              integral para repor eletrólitos e sinalizar ao metabolismo que o
              dia começou.
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Exposição Fotobiológica:</strong>{' '}
              Vá para o sol. 10 a 15 minutos de luz natural nos olhos (sem
              óculos escuros) para disparar a Resposta de Despertar do Cortisol,
              que regula o foco e prepara a produção de testosterona matinal.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">
                Suplementação de Base:
              </strong>{' '}
              Tome sua Vitamina D3 + K2 (5.000 UI). Como ela é lipossolúvel
              (precisa de gordura para ser absorvida), acompanhe com o café da
              manhã anabólico (ovos inteiros e, se possível, uma porção de
              Tutano de Boi).
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              FASE 02: PERFORMANCE E FLUXO (08:00 – 13:00)
            </h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Foco Inabalável:</strong> Este é o
              momento de maior{' '}
              <span className="font-jetbrains text-brand-red">Dopamina</span> (o
              neurotransmissor do drive e da conquista). Utilize esta janela
              para as tarefas mais difíceis da sua carreira.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">
                Nutrição de Elite (Almoço):
              </strong>{' '}
              Proteína animal densa (carne vermelha ou fígado) acompanhada de
              vegetais crucíferos. Evite carboidratos pesados que causem{' '}
              <span className="font-jetbrains text-brand-red">
                Letargia Postprandial
              </span>{' '}
              (o cansaço excessivo após comer devido ao desvio de sangue para a
              digestão).
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              FASE 03: A IGNIÇÃO MECÂNICA (16:00 – 19:00)
            </h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Janela Pré-Treino:</strong> 30
              minutos antes da sessão, tome 6g-8g de Citrulina Malato para
              maximizar o Poder Vermelho (vasodilatação).
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">O Treino:</strong> Foque no
              levantamento de peso pesado, priorizando o agachamento e o
              levantamento terra para gerar o efeito sistêmico de GH e
              Testosterona.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">Pós-Treino Imediato:</strong> 5g de
              Creatina Monohidratada para repor os estoques de{' '}
              <span className="font-jetbrains text-brand-red">ATP</span> (energia
              celular) e sinalizar a síntese proteica.
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              FASE 04: A ENGENHARIA DA RECUPERAÇÃO (20:00 – 22:30)
            </h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Bloqueio de Luz Azul:</strong>{' '}
              Coloque óculos bloqueadores ou evite telas de LED. Isso protege a
              sua produção natural de{' '}
              <span className="font-jetbrains text-brand-red">Melatonina</span>{' '}
              (o hormônio que inicia o reparo celular noturno).
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">A Tríade Mineral:</strong> Tome
              30mg de Zinco Picolinato e o seu suplemento de Magnésio. Isso
              atuará como inibidor da{' '}
              <span className="font-jetbrains text-brand-red">Aromatase</span>{' '}
              (evitando que sua testosterona vire estrogênio) e preparará o seu
              cérebro para o sono profundo.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">O Apagão:</strong> Deite-se em um
              quarto totalmente escuro e frio para garantir a entrada na Fase
              REM e no sono profundo, onde 80% do seu GH é liberado.
            </p>
          </div>
        </div>

        <SubTitle>A JORNADA DOS 21 DIAS: O QUE ESPERAR</SubTitle>
        <List
          items={[
            <>
              <strong>Dias 01 a 07 (O Choque):</strong> Seu corpo sentirá a falta
              dos açúcares e do conforto. Você pode sentir fadiga leve enquanto
              o seu fígado realiza a{' '}
              <span className="font-jetbrains text-brand-red">
                Biotransformação
              </span>{' '}
              (limpeza de toxinas). Mantenha a disciplina.
            </>,
            <>
              <strong>Dias 08 a 14 (A Estabilização):</strong> A névoa mental
              desaparece. A libido e a energia matinal começam a retornar. O
              sono torna-se muito mais reparador devido à Tríade Mineral.
            </>,
            <>
              <strong>Dias 15 a 21 (A Supremacia):</strong> O corpo está
              otimizado. A densidade muscular aumenta e o &quot;drive&quot;
              competitivo torna-se o seu novo normal. Seus receptores
              androgênicos estão agora operando com sensibilidade máxima.
            </>,
          ]}
        />

        <BiohackBox title="MISSÃO FINAL" type="warning">
          <p className="text-center font-bold mb-2">
            NÃO DEIXE ESTE CONHECIMENTO DIGITALMENTE ARQUIVADO.
          </p>
          <p className="text-center">
            Imprima esta página (ou copie o algoritmo manualmente) e cole na
            porta da sua geladeira ou no espelho do banheiro. Transforme este
            ebook em uma ferramenta física de mudança.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="23" />
      </Section>

      <Section id="mod-5-cap-21">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO V: O PLANO DE AÇÃO
        </h3>
        <ChapterTitle>21. MANUTENÇÃO E CONSTÂNCIA</ChapterTitle>

        <SubTitle>A Transição do Protocolo para o Estilo de Vida Permanente</SubTitle>
        <Paragraph>
          Os 21 dias do algoritmo foram o seu período de{' '}
          <span className="font-jetbrains text-brand-red">
            Indução Hormonal
          </span>{' '}
          (o processo inicial de forçar o corpo a mudar o seu estado químico
          através de estímulos externos). Contudo, a verdadeira Supremacia
          Biológica não é conquistada num tiro de curto prazo, mas sim através
          da{' '}
          <span className="font-jetbrains text-brand-red">
            Homeostase Evolutiva
          </span>{' '}
          (a capacidade do organismo de manter um novo e elevado nível de
          equilíbrio interno de forma duradoura).
        </Paragraph>
        <Paragraph>
          O erro da maioria dos homens é tratar a saúde como um projeto com data
          de validade. Quando o esforço termina, o corpo tende a retornar ao seu
          antigo estado de{' '}
          <span className="font-jetbrains text-brand-red">Alostase</span> (o
          processo de alcançar a estabilidade através da mudança fisiológica,
          muitas vezes adaptando-se a um estado de baixa energia e alta
          inflamação para sobreviver ao ambiente moderno). Para evitar o efeito
          sanfona hormonal, precisamos de uma estratégia de manutenção que seja
          resiliente e, acima de tudo, sustentável.
        </Paragraph>

        <SubTitle>A Regra da Resiliência Metabólica (80/20)</SubTitle>
        <Paragraph>
          Para que o Protocolo H-Natural se torne a sua nova identidade, você
          deve desenvolver{' '}
          <span className="font-jetbrains text-brand-red">
            Resiliência Metabólica
          </span>{' '}
          (a flexibilidade do seu metabolismo em lidar com diferentes fontes de
          combustível e estressores sem entrar em colapso). No mundo real, você
          terá jantares de negócios, viagens e momentos de lazer onde a dieta
          perfeita não será possível.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 break-inside-avoid">
          <div className="border border-brand-red/30 p-4 bg-brand-red/5">
            <h4 className="font-oswald text-brand-red text-lg uppercase mb-2">
              80% de Precisão
            </h4>
            <p className="font-inter text-gray-300 text-sm">
              Durante a maior parte do tempo, você mantém os pilares
              inegociáveis: a Tríade Mineral antes de dormir, o consumo de
              Gorduras Estruturais (como o tutano e a gema de ovo) e a exposição
              solar matinal.
            </p>
          </div>
          <div className="border border-brand-red/30 p-4 bg-brand-red/5">
            <h4 className="font-oswald text-brand-red text-lg uppercase mb-2">
              20% de Flexibilidade
            </h4>
            <p className="font-inter text-gray-300 text-sm">
              Permita-se desvios controlados sem culpa. O estresse psicológico
              causado pela busca da perfeição absoluta eleva o{' '}
              <span className="font-jetbrains text-brand-red">Cortisol</span> de
              tal forma que o prejuízo hormonal pode ser maior do que o causado
              por uma refeição fora do plano.
            </p>
          </div>
        </div>

        <SubTitle>Lidando com os "Dias de Erro": O Protocolo de Mitigação</SubTitle>
        <Paragraph>
          Se você teve um dia de excessos — seja por consumo de açúcares, álcool
          ou privação de sono — o seu foco no dia seguinte não deve ser a
          punição, mas a{' '}
          <span className="font-jetbrains text-brand-red">
            Biotransformação
          </span>{' '}
          (o conjunto de reações químicas que o corpo realiza para neutralizar e
          eliminar substâncias estranhas).
        </Paragraph>

        <div className="border-l-4 border-brand-red pl-6 py-2 my-6 bg-gradient-to-r from-brand-red/10 to-transparent break-inside-avoid">
          <h4 className="font-oswald text-white text-lg uppercase mb-4 flex items-center gap-2">
            <span className="text-brand-red text-2xl">⚠</span> PROTOCOLO DE
            RESGATE
          </h4>
          <ul className="space-y-4 font-inter text-gray-300">
            <li>
              <strong className="text-white block mb-1">
                Jejum de Reparação:
              </strong>
              Após um dia de erro, realize um jejum de 16 a 18 horas. Isso
              estimula a{' '}
              <span className="font-jetbrains text-brand-red">Autofagia</span>{' '}
              (o processo de &quot;limpeza celular&quot; onde o corpo recicla
              componentes danificados para gerar energia) e ajuda a restaurar a
              sensibilidade à insulina.
            </li>
            <li>
              <strong className="text-white block mb-1">
                Super-Hidratação:
              </strong>
              Dobre o consumo de água com sal integral para auxiliar os seus{' '}
              <span className="font-jetbrains text-brand-red">Hepatócitos</span>{' '}
              (células do fígado responsáveis pelo detox) e os seus rins na
              filtragem dos resíduos metabólicos.
            </li>
            <li>
              <strong className="text-white block mb-1">
                Estímulo Mecânico Leve:
              </strong>
              Não falte ao treino, mas reduza a carga. O objetivo é apenas
              bombear sangue e utilizar o{' '}
              <span className="font-jetbrains text-brand-red">Glicogénio</span>{' '}
              (a forma como o corpo armazena açúcar nos músculos e fígado)
              acumulado em excesso no dia anterior.
            </li>
          </ul>
        </div>

        <SubTitle>A Psicologia da Constância e a Dopamina</SubTitle>
        <Paragraph>
          A manutenção do protocolo exige uma reconfiguração da sua{' '}
          <span className="font-jetbrains text-brand-red">
            Linha de Base Dopaminérgica
          </span>{' '}
          (o nível padrão de dopamina que o seu cérebro mantém). Quando você se
          acostuma com estímulos naturais de alta qualidade — como a sensação de
          poder após um treino pesado de pernas ou a clareza mental após um sono
          profundo — o seu cérebro passa a preferir estas recompensas reais às
          recompensas baratas e artificiais.
        </Paragraph>
        <Paragraph>
          A disciplina não é sobre &quot;força de vontade&quot;, mas sobre a
          criação de um sistema onde o caminho certo é o mais recompensador. Ao
          manter o Protocolo H-Natural como a sua base, você garante que o seu{' '}
          <span className="font-jetbrains text-brand-red">
            Eixo Hipotálamo-Hipófise-Testicular
          </span>{' '}
          (o sistema de comando que regula a sua masculinidade) permaneça em
          estado de prontidão, independentemente da sua idade ou das
          circunstâncias externas.
        </Paragraph>

        <PageFooter pageNumber="24" />
      </Section>

      <Section id="conclusion">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          CONCLUSÃO
        </h3>
        <h1 className="font-oswald text-4xl text-brand-red uppercase mb-8 border-l-4 border-brand-red pl-4">
          O DESPERTAR DO NOVO HOMEM
        </h1>

        <SubTitle>A Transição da Informação para a Maestria Biológica</SubTitle>
        <Paragraph>
          Você chegou ao fim deste mapa, mas este é apenas o marco zero da sua
          nova existência. A maioria dos homens que iniciou a leitura destas
          páginas desistiu no meio do caminho, perdidos na zona de conforto da
          mediocridade hormonal. Se você está lendo estas palavras, você já se
          diferenciou. Você possui agora a{' '}
          <span className="font-jetbrains text-brand-red">
            Soberania Biológica
          </span>{' '}
          (o estado de controle total sobre os processos químicos e hormonais do
          seu próprio corpo), algo que 99% da população masculina moderna sequer
          sabe que existe.
        </Paragraph>
        <Paragraph>
          Ao longo desta jornada no Protocolo H-Natural, desconstruímos mentiras
          seculares e instalamos uma nova infraestrutura de poder. Você aprendeu
          que a sua virilidade não é um acidente genético, mas o resultado
          direto de como você gerencia o seu{' '}
          <span className="font-jetbrains text-brand-red">
            Eixo Hipotálamo-Hipófise-Testicular
          </span>{' '}
          (o sistema de comando central que regula a produção de testosterona).
          Você parou de ser uma vítima do ambiente e passou a ser o arquiteto da
          sua própria{' '}
          <span className="font-jetbrains text-brand-red">Epigenética</span> (a
          capacidade de alterar a expressão dos seus genes através do estilo de
          vida, sem mudar a sua sequência de DNA).
        </Paragraph>

        <SubTitle>O Fim da Castração Química Invisível</SubTitle>
        <Paragraph>
          O mundo moderno foi desenhado para torná-lo fraco, letárgico e
          dependente. Desde os Disruptores Endócrinos (químicos que interferem
          nas suas glândulas) no seu shampoo até a luz azul que frita a sua{' '}
          <span className="font-jetbrains text-brand-red">Dopamina</span> (o
          neurotransmissor da motivação e busca), tudo foi projetado para reduzir
          o seu &quot;drive&quot; competitivo.
        </Paragraph>
        <Paragraph>
          Ao aplicar o Algoritmo de 21 Dias, você rompeu essa programação. Você
          limpou o seu{' '}
          <span className="font-jetbrains text-brand-red">Endotélio</span> (a
          camada interna dos vasos sanguíneos), otimizou a sua{' '}
          <span className="font-jetbrains text-brand-red">Esteroidogênese</span>{' '}
          (a fábrica de hormônios a partir do colesterol) e reconectou o seu
          corpo com os ritmos ancestrais de sol, esforço e descanso profundo. O
          homem que você vê no espelho hoje possui uma química interna
          radicalmente diferente daquele que começou este livro.
        </Paragraph>

        <SubTitle>O Próximo Nível: A Jornada Continua</SubTitle>
        <Paragraph>
          Este ebook é o alicerce, mas a construção da sua supremacia é uma obra
          perpétua. O conhecimento sem execução é apenas entretenimento. A
          partir de agora, o seu compromisso não é comigo, mas com o seu
          potencial biológico. Mantenha a Tríade Mineral em dia, nunca
          negligencie o Efeito Sistêmico das Pernas e proteja o seu sono como se
          a sua vida dependesse disso — porque, no fundo, a qualidade da sua
          vida depende.
        </Paragraph>
        <Paragraph>
          Você não é mais um escravo dos seus impulsos ou da desinformação da
          indústria. Você é um Titã H-Natural. O despertar aconteceu. Agora, vá
          lá fora e domine.
        </Paragraph>

        <div className="mt-16 mb-8 break-inside-avoid">
          <p className="font-oswald text-slate-400 text-sm uppercase mb-4 text-center">
            COMPROMISSO DE HONRA
          </p>
          <div className="border-b-2 border-slate-600 w-3/4 mx-auto mb-2" />
          <p className="text-center font-handwriting text-slate-500 italic text-lg">
            Assinatura do Titã
          </p>
        </div>

        <div className="flex justify-center mt-12 mb-8 break-inside-avoid">
          <div className="border border-brand-red p-4 rounded-sm inline-block">
            <p className="text-brand-red font-oswald text-xs tracking-[0.2em] text-center">
              PROTOCOL VERIFIED
            </p>
            <p className="text-white font-bold text-lg text-center font-jetbrains">
              2026
            </p>
          </div>
        </div>

        <PageFooter pageNumber="25" />
      </Section>
    </div>
  )
}

