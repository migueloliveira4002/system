import {
  Section,
  ChapterTitle,
  PageFooter,
  Paragraph,
  SubTitle,
  MonoSubTitle,
  List,
  BiohackBox,
  ComparisonBox,
  ImplementationLevels,
} from '../components/ContentBlocks'
import { Checklist } from '../components/Checklist'
import { DiagnosticQuiz } from '../components/DiagnosticQuiz'

export function Module1() {
  return (
    <div className="space-y-16">
      <Section id="intro">
        <span className="font-jetbrains text-brand-red text-sm mb-4 uppercase tracking-widest">
          INTRODUÇÃO
        </span>
        <ChapterTitle>O MANIFESTO: O DESPERTAR DO TITÃ</ChapterTitle>
        <Paragraph>
          Este não é um guia de bem-estar genérico. Se você busca dicas
          superficiais e conforto, feche este arquivo agora. O Protocolo
          H-Natural é um manifesto de revolta contra a decadência biológica
          imposta ao homem moderno.
        </Paragraph>
        <Paragraph>
          Vivemos em uma era onde a fraqueza é celebrada e a vitalidade é tratada
          como um erro sistêmico. Você foi condicionado a aceitar níveis de
          energia medíocres, um físico apático e uma mente nublada como se fossem
          normais. Eu estou aqui para dizer que o normal é o seu maior inimigo.
        </Paragraph>
        <Paragraph>
          Recuperar sua supremacia hormonal não é um luxo; é um resgate da sua
          essência. É o retorno ao estado de prontidão, força e clareza que seus
          ancestrais possuíam apenas para sobreviver. Aqui, nós não aceitamos o
          declínio. Nós o combatemos com precisão técnica e disciplina
          inabalável.
        </Paragraph>

        <SubTitle>[CHECKLIST] O AUDIT H-NATURAL: ONDE VOCÊ ESTÁ</SubTitle>
        <Paragraph>
          Antes de virar a página, seja brutalmente honesto consigo mesmo. Marque
          cada caixa que descreve sua realidade nos últimos 3 meses:
        </Paragraph>

        <Checklist
          items={[
            'Acordo e ainda me sinto exausto, mesmo após 7-8 horas de sono.',
            'Sinto uma névoa mental (brain fog) que dificulta o foco no trabalho.',
            'Minha libido não é mais a mesma de 5 anos atrás.',
            'Acúmulo de gordura abdominal (a famosa barriga de estrogênio) mesmo treinando.',
            'Falta de drive ou ambição para conquistar novos projetos.',
            'Irritabilidade constante ou falta de paciência com coisas pequenas.',
            'Ausência ou raridade de ereções matinais espontâneas.',
            'Recuperação muscular lenta; sinto dores por dias após um treino simples.',
            'Dependência de café ou estimulantes para conseguir funcionar à tarde.',
            'Perda de densidade muscular e força, apesar de manter a rotina.',
          ]}
        />

        <BiohackBox title="O VEREDITO" type="warning">
          <p className="font-jetbrains text-xs text-slate-400 mb-4 uppercase tracking-wider">
            Some suas marcações e descubra em qual estágio de decadência
            biológica você se encontra:
          </p>

          <div className="space-y-4">
            <div>
              <span className="font-oswald text-white font-bold text-lg">
                0 a 3 Caixas: O ADORMECIDO.
              </span>
              <p className="mt-1 text-slate-300">
                Você ainda tem uma base sólida, mas está operando em 60% do seu
                potencial. O Protocolo será o seu ajuste fino para a elite.
              </p>
            </div>

            <div>
              <span className="font-oswald text-brand-red font-bold text-lg">
                4 a 7 Caixas: O ATROFIADO.
              </span>
              <p className="mt-1 text-slate-300">
                Você está na zona de perigo. Seu ambiente e hábitos já começaram
                a sabotar sua produção hormonal de forma severa. O Protocolo é
                sua única saída antes do colapso.
              </p>
            </div>

            <div>
              <span className="font-oswald text-red-600 font-bold text-lg">
                8 a 10 Caixas: O CASTRADO.
              </span>
              <p className="mt-1 text-slate-300">
                Alerta máximo. Sua biologia está pedindo socorro. Você está
                vivendo como um passageiro no próprio corpo. Para você, este
                livro não é uma leitura; é um kit de sobrevivência imediato.
              </p>
            </div>
          </div>
        </BiohackBox>

        <PageFooter pageNumber="03" />
      </Section>

      <Section id="mod-1-cap-1">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO
        </h3>
        <ChapterTitle>01. A CRISE DA VIRILIDADE</ChapterTitle>

        <SubTitle>O Colapso Invisível</SubTitle>
        <Paragraph>
          Olhe ao seu redor. O homem moderno é uma sombra pálida, biológica e
          hormonal, de seus antepassados. O que antes era a norma — força física
          abundante, clareza mental afiada e uma libido inabalável — tornou-se
          uma raridade estatística. Vivemos em uma era de declínio sistêmico da
          testosterona. Dados científicos mostram que os níveis de testosterona
          em homens têm caído drasticamente, década após década, criando uma
          geração de homens que vivem em um estado de mediocridade biológica.
        </Paragraph>
        <Paragraph>
          Este não é um processo natural de envelhecimento; é um ataque
          coordenado pelo estilo de vida contemporâneo.
        </Paragraph>

        <SubTitle>A Castração Química Moderna</SubTitle>
        <Paragraph>
          Não estamos apenas &quot;envelhecendo mais rápido&quot;. Estamos
          sendo quimicamente castrados pelo ambiente em que vivemos. O inimigo é
          invisível e onipresente:
        </Paragraph>

        <List
          items={[
            <>
              <strong>O Ambiente:</strong> Microplásticos e disruptores
              endócrinos (xenoestrógenos) que mimetizam o estrogênio no seu
              sangue.
            </>,
            <>
              <strong>A Dieta:</strong> Alimentos processados e inflamatórios
              que destroem a sinalização hormonal no testículo e na hipófise.
            </>,
            <>
              <strong>O Estilo de Vida:</strong> Sedentarismo, privação de sono
              e exposição constante à luz azul, que sinalizam ao seu cérebro que
              você não precisa mais ser um &quot;macho alfa&quot; da espécie.
            </>,
          ]}
        />

        <BiohackBox title="AVISO DO ESPECIALISTA">
          Se você sente cansaço crônico, falta de motivação para treinar ou
          aquela névoa mental que te impede de performar no trabalho, você não
          está &quot;cansado&quot;. Você está operando com o tanque hormonal
          vazio. O Protocolo H-Natural foi desenhado justamente para quem recusa
          esse destino.
        </BiohackBox>

        <SubTitle>A Armadilha da Normalidade</SubTitle>
        <Paragraph>
          O grande perigo da crise da virilidade é que ela foi
          &quot;normalizada&quot;. Os exames de laboratório modernos possuem
          intervalos de referência que incluem homens com níveis hormonais de
          idosos. Se você está no limite inferior do &quot;normal&quot;, você
          ainda está em crise.
        </Paragraph>
        <Paragraph>
          Recuperar sua vitalidade não é apenas uma questão de estética ou
          músculos; é um dever para com a sua própria biologia. Para evoluir,
          primeiro precisamos limpar o terreno. Não existe construção sobre
          escombros.
        </Paragraph>
        <Paragraph>
          Este capítulo é o seu despertar. O ambiente quer você fraco, dócil e
          dependente. O Protocolo H-Natural quer você no topo da pirâmide.
        </Paragraph>

        <PageFooter pageNumber="04" />
      </Section>

      <Section id="mod-1-cap-2">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO
        </h3>
        <ChapterTitle>02. A MENTALIDADE DO PROTOCOLO</ChapterTitle>

        <SubTitle>Disciplina é a Única Suplementação Obrigatória</SubTitle>
        <Paragraph>
          Muitos homens compram este guia buscando a &quot;pílula
          mágica&quot; que resolverá anos de negligência em uma semana. Eles
          estão errados. O Protocolo H-Natural não é um evento; é um processo de
          guerra contra a sua própria inércia.
        </Paragraph>
        <Paragraph>
          Para que os resultados descritos aqui se manifestem, você deve adotar
          os três pilares da mentalidade de elite:
        </Paragraph>

        <MonoSubTitle>1. Responsabilidade Radical</MonoSubTitle>
        <Paragraph>
          Esqueça a genética, o governo ou o estresse do trabalho como desculpas
          para a sua baixa performance. A responsabilidade pela execução e pelos
          resultados é inteiramente sua. O protocolo fornece o mapa e os
          compostos, mas é você quem decide se vai acordar para treinar ou se
          vai se render ao conforto do sedentarismo.
        </Paragraph>

        <MonoSubTitle>2. Intolerância à Mediocridade</MonoSubTitle>
        <Paragraph>
          O homem moderno foi ensinado a aceitar a fadiga e a falta de libido
          como parte do &quot;envelhecimento normal&quot;. Aqui, nós tratamos o
          &quot;normal&quot; como um estado de falência biológica. Você deve
          desenvolver uma intolerância visceral a qualquer sintoma que diminua
          sua virilidade. Se você não está no topo da sua capacidade física e
          mental, você está perdendo a guerra.
        </Paragraph>

        <MonoSubTitle>3. Precisão Cirúrgica</MonoSubTitle>
        <Paragraph>
          Otimização hormonal não é sobre &quot;tentar&quot; fazer dieta ou
          &quot;tentar&quot; suplementar. É sobre precisão.
        </Paragraph>
        <List
          items={[
            <>
              <strong>Timing:</strong> Tomar a Creatina ou o Zinco no momento
              errado pode reduzir a eficácia em 30%.
            </>,
            <>
              <strong>Dosagem:</strong> Não existem &quot;multivitamínicos&quot;
              genéricos aqui; usamos doses clínicas para efeitos específicos.
            </>,
            <>
              <strong>Consistência:</strong> Um biohack isolado não muda sua
              vida; a sinergia entre sono, dieta e suplementação, repetida
              diariamente, sim.
            </>,
          ]}
        />

        <BiohackBox title="DIRETRIZ DO EDITOR" type="synergy">
          Você não está &quot;testando&quot; um produto. Você está
          implementando um algoritmo de 21 dias que exige obediência cega aos
          horários e doses. A dúvida é o primeiro passo para o fracasso hormonal.
        </BiohackBox>

        <PageFooter pageNumber="05" />
      </Section>

      <Section id="mod-1-cap-3">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO
        </h3>
        <ChapterTitle>03. O DIAGNÓSTICO (ONDE VOCÊ ESTÁ?)</ChapterTitle>
        <Paragraph>
          Este capítulo é o momento da verdade. No Manifesto, você teve um
          vislumbre; agora, vamos realizar uma biópsia da sua realidade atual.
          Para o Protocolo H-Natural funcionar, você precisa parar de se
          comparar com a média medíocre e começar a se comparar com o seu
          potencial biológico máximo.
        </Paragraph>

        <SubTitle>A Mentira dos Intervalos de Referência</SubTitle>
        <Paragraph>
          Antes de iniciarmos o questionário, entenda uma coisa: os laboratórios
          modernos definem o que é &quot;normal&quot; baseando-se na média da
          população atual. Se a população está doente, inflamada e com a
          testosterona em declínio, o &quot;normal&quot; do laboratório será,
          por definição, um estado de declínio.
        </Paragraph>
        <Paragraph>
          Se o seu exame diz que você está dentro do limite, mas você se sente
          sem energia, saiba que você está operando em um vácuo hormonal. Aqui,
          não buscamos o normal. Buscamos a Otimização.
        </Paragraph>

        <DiagnosticQuiz
          questions={{
            physical: [
              {
                id: 'p1',
                text: 'Sinto fadiga excessiva ou falta de energia ao final do dia',
              },
              {
                id: 'p2',
                text: 'Minha força na academia estagnou ou diminuiu nos últimos meses',
              },
              {
                id: 'p3',
                text: 'Sinto dores articulares ou musculares que demoram a passar',
              },
              {
                id: 'p4',
                text: 'Tenho dificuldade em perder gordura abdominal, mesmo com dieta',
              },
            ],
            mental: [
              {
                id: 'm1',
                text: 'Sinto névoa mental ou dificuldade de concentração no trabalho',
              },
              {
                id: 'm2',
                text: 'Minha motivação e drive para novos projetos estão baixos',
              },
              {
                id: 'm3',
                text: 'Sinto irritabilidade, ansiedade ou alterações bruscas de humor',
              },
              {
                id: 'm4',
                text: 'Tenho episódios de desânimo ou falta de confiança competitiva',
              },
            ],
            hormonal: [
              {
                id: 'h1',
                text: 'Minha libido (desejo sexual) está abaixo do que já foi um dia',
              },
              {
                id: 'h2',
                text: 'Percebo uma diminuição na frequência de ereções matinais',
              },
              {
                id: 'h3',
                text: 'Sinto que meu sono não é reparador, mesmo dormindo 7h+',
              },
              {
                id: 'h4',
                text: 'Percebo uma perda de densidade muscular (músculos moles)',
              },
            ],
          }}
        />

        <Paragraph>
          O diagnóstico foi feito. Agora que você sabe o tamanho do problema,
          vamos começar a limpar o terreno.
        </Paragraph>

        <PageFooter pageNumber="06" />
      </Section>

      <Section id="mod-1-cap-04">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO (DETOX)
        </h3>
        <ChapterTitle>04. O INIMIGO INVISÍVEL (XENOESTRÓGENOS)</ChapterTitle>

        <SubTitle>A Sabotagem Química Silenciosa</SubTitle>
        <Paragraph>
          O maior obstáculo para a sua produção de testosterona não é apenas o
          que falta na sua dieta, mas o que sobra no seu ambiente. Vivemos
          cercados por Xenoestrógenos — compostos químicos sintéticos que
          possuem uma estrutura molecular tão semelhante ao estrogênio que o seu
          corpo os confunde com o hormônio real.
        </Paragraph>
        <Paragraph>
          Essas substâncias agem como &quot;chaves falsas&quot; que ocupam os
          receptores hormonais nas suas células, bloqueando a ação da
          testosterona e enviando um sinal falso ao seu cérebro de que você já
          possui hormônios femininos em excesso. O resultado? Seu corpo reduz a
          produção natural de testosterona e você entra em um estado de
          dominância estrogênica.
        </Paragraph>

        <BiohackBox title="ONDE ELES ESTÃO ESCONDIDOS?" type="warning">
          <p className="mb-4">
            Você está sendo exposto a esses disruptores endócrinos desde o
            momento em que acorda até a hora em que vai dormir. Identificar as
            fontes é o primeiro passo da sua Blindagem Ambiental:
          </p>
          <ul className="space-y-4">
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">
                Plásticos e Bisfenóis (BPA/BPS)
              </span>
              <span className="text-slate-300">
                Garrafas de água plásticas, recipientes de comida que vão ao
                micro-ondas e o revestimento interno de latas de conserva.
                Quando aquecidos, esses plásticos liberam químicos diretamente
                na sua comida.
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">
                Recibos de Papel Térmico
              </span>
              <span className="text-slate-300">
                Aquele papel de cupom fiscal de supermercado ou banco é saturado
                de BPA de fácil absorção pela pele. Evite manuseá-los
                desnecessariamente.
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">
                Produtos de Higiene Pessoal
              </span>
              <span className="text-slate-300">
                Shampoos, desodorantes e sabonetes convencionais costumam conter{' '}
                <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">
                  PARABENOS
                </span>{' '}
                e{' '}
                <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">
                  FTALATOS
                </span>
                , usados como conservantes e fixadores de fragrância.
              </span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">
                Água de Torneira sem Filtro
              </span>
              <span className="text-slate-300">
                Pode conter resíduos de defensivos agrícolas e até traços de
                anticoncepcionais que os sistemas de tratamento convencionais
                não conseguem eliminar totalmente.
              </span>
            </li>
          </ul>
        </BiohackBox>

        <SubTitle>O Impacto na Sua Virilidade</SubTitle>
        <Paragraph>
          A exposição constante a xenoestrógenos é a principal causa da
          &quot;barriga de estrogênio&quot;, do ginecomastia (desenvolvimento de
          tecido mamário) e da perda de agressividade competitiva. Não se trata
          de uma paranoia, mas de uma ameaça biológica real que o Protocolo visa
          neutralizar.
        </Paragraph>
        <Paragraph>
          Identificamos os sabotadores. Agora, precisamos de um plano de defesa
          para proteger seu santuário biológico.
        </Paragraph>

        <PageFooter pageNumber="10" />
      </Section>

      <Section id="mod-1-cap-05">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO (DETOX)
        </h3>
        <ChapterTitle>05. BLINDAGEM AMBIENTAL</ChapterTitle>

        <SubTitle>Construindo o seu Santuário de Testosterona</SubTitle>
        <Paragraph>
          A identificação dos inimigos químicos foi apenas o primeiro passo da
          sua jornada. Agora, iniciaremos a construção da sua Blindagem
          Ambiental. Não faz sentido investir em suplementação tática e nutrição
          de precisão se você permite que o ambiente externo sabote seus
          receptores hormonais a cada hora do dia.
        </Paragraph>
        <Paragraph>
          Abaixo, apresento as substituições obrigatórias para neutralizar a
          invasão estrogênica e proteger sua fisiologia.
        </Paragraph>

        <SubTitle>O PROTOCOLO DE SUBSTITUIÇÃO TÁTICA</SubTitle>
        <Paragraph>
          Para blindar seu sistema, você deve trocar a conveniência tóxica pela
          segurança biológica:
        </Paragraph>

        <List
          items={[
            <>
              <strong>Vidro e Aço Inox sobre Plástico:</strong> Elimine garrafas
              de água de plástico e vasilhas de polímeros, especialmente se
              forem aquecidas. O calor acelera a liberação de bisfenóis que
              mimetizam o estrogênio no seu sangue. Use apenas recipientes de
              vidro ou aço inoxidável de alta qualidade.
            </>,
            <>
              <strong>Higiene Pessoal Consciente:</strong> Migre para
              desodorantes sem alumínio e shampoos livres de{' '}
              <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">
                PARABENOS
              </span>{' '}
              e{' '}
              <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">
                FTALATOS
              </span>
              . Sua pele é um órgão de absorção direta; o que você passa nela
              entra na sua corrente sanguínea sem o filtro do fígado.
            </>,
            <>
              <strong>Filtragem de Água Avançada:</strong> Utilize filtros que
              possuam carvão ativado ou osmose reversa. A água da torneira pode
              conter traços de disruptores endócrinos que sobrecarregam sua
              sinalização hormonal.
            </>,
            <>
              <strong>A Regra do &quot;Não Toque&quot;:</strong> Recuse recibos
              de papel térmico sempre que possível. Se precisar manuseá-los,
              lave as mãos imediatamente após o contato para evitar a absorção
              cutânea de bisfenol A (
              <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">
                BPA
              </span>
              ).
            </>,
          ]}
        />

        <BiohackBox title="O CHECKLIST DA BLINDAGEM" type="synergy">
          <Checklist
            items={[
              'Troquei minha garrafa de plástico por uma de aço inox ou vidro.',
              'Joguei fora todos os recipientes de plástico que eu usava para esquentar comida no micro-ondas.',
              "Verifiquei meu desodorante e sabonete em busca de 'Paraben' ou 'Phthalate' nos ingredientes.",
              'Instalei ou revisei o filtro de água da minha residência.',
            ]}
          />
        </BiohackBox>

        <Paragraph>
          Limpamos o ambiente externo. Agora, precisamos olhar para dentro. O
          seu sistema hormonal depende de um alicerce sólido que começa no seu
          trato digestivo.
        </Paragraph>

        <PageFooter pageNumber="11" />
      </Section>

      <Section id="mod-1-cap-06">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO (DETOX)
        </h3>
        <ChapterTitle>06. O SEGUNDO CÉREBRO (SAÚDE INTESTINAL)</ChapterTitle>

        <SubTitle>Por que sua suplementação está indo para o ralo</SubTitle>
        <Paragraph>
          Este capítulo é fundamental porque ele resolve o maior gargalo de quem
          tenta se suplementar: a absorção. Como seu editor, estruturei este
          conteúdo para que o leitor entenda que o intestino não é apenas um
          tubo de digestão, mas o centro de comando da sua inflamação e,
          consequentemente, da sua testosterona.
        </Paragraph>
        <Paragraph>
          Você pode comprar a Creatina mais pura do mundo e o Zinco mais
          biodisponível do mercado, mas se o seu trato gastrointestinal estiver
          inflamado, você está apenas produzindo uma &quot;urina cara&quot;. O
          intestino é o porteiro da sua biologia. Se o porteiro estiver sob
          ataque, nada de bom entra e tudo o que é ruim vaza para a sua corrente
          sanguínea.
        </Paragraph>
        <Paragraph>
          O que a maioria dos homens ignora é a conexão direta entre o intestino
          e a produção de testosterona. Um intestino &quot;furado&quot;
          (permeabilidade intestinal) gera um estado de inflamação crônica. O
          seu corpo interpreta inflamação como estresse. O estresse dispara o
          Cortisol. E o Cortisol é o inimigo mortal da sua Testosterona. Quando
          um sobe, o outro desce obrigatoriamente.
        </Paragraph>

        <ComparisonBox
          items={[
            {
              myth: 'Intestino serve apenas para absorver calorias e eliminar resíduos.',
              reality:
                'O intestino abriga cerca de 70% do seu sistema imunológico e produz 90% da sua serotonina. Se ele falha, sua imunidade cai, seu humor desmorona e sua sinalização hormonal entra em colapso.',
            },
            {
              myth: 'Se eu não tenho dor de barriga, meu intestino está perfeito.',
              reality:
                'A inflamação intestinal pode ser silenciosa, manifestando-se como névoa mental (brain fog), falta de libido e dificuldade de ganhar massa muscular, mesmo sem sintomas digestivos óbvios.',
            },
          ]}
        />

        <SubTitle>NÍVEIS DE IMPLEMENTAÇÃO: O PROTOCOLO DE RECUPERAÇÃO</SubTitle>
        <Paragraph>
          Escolha o seu nível de comprometimento hoje. O objetivo é subir para o
          nível Gold conforme sua disciplina aumenta.
        </Paragraph>

        <ImplementationLevels
          levels={[
            {
              title: 'NÍVEL BRONZE',
              subtitle: '(ESSENCIAL)',
              action:
                'Remova óleos vegetais (soja, milho, canola) e açúcares refinados. Eles são como lixa nas paredes do seu intestino.',
              focus:
                'Hidratação agressiva (35ml de água por kg de peso) para manter a mucosa intestinal saudável.',
              colorClass: 'bg-amber-700',
            },
            {
              title: 'NÍVEL SILVER',
              subtitle: '(OTIMIZAÇÃO)',
              action:
                'Introduza alimentos densos em nutrientes e colágeno natural, como o Tutano e o Fígado de Boi. Estes alimentos fornecem a matéria-prima para reconstruir a parede intestinal.',
              focus:
                'Suplementação com Glutamina (5g ao acordar) para selar as paredes do intestino.',
              colorClass: 'bg-slate-400',
            },
            {
              title: 'NÍVEL GOLD',
              subtitle: '(THE TITAN)',
              action:
                'Implemente o Jejum Intermitente (16/8) pelo menos 3 vezes por semana para dar descanso ao sistema digestivo e permitir a autofagia celular.',
              focus:
                'Uso de probióticos de alta densidade e remoção total de glúten e laticínios de baixa qualidade por 21 dias para um "Hard Reset".',
              colorClass: 'bg-yellow-500',
            },
          ]}
        />

        <PageFooter pageNumber="12" />
      </Section>

      <Section id="mod-1-cap-7">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO I: O RESET BIOLÓGICO (DETOX)
        </h3>
        <ChapterTitle>07. A GRANDE FAXINA</ChapterTitle>

        <SubTitle>Preparando o Terreno para a Supremacia</SubTitle>
        <Paragraph>
          Antes de construirmos um império hormonal, precisamos limpar os
          escombros. Seu corpo passou anos acumulando subprodutos do metabolismo
          e toxinas ambientais que sobrecarregam seus hepatócitos (as células
          funcionais do fígado, responsáveis por processar tudo o que entra no
          seu corpo).
        </Paragraph>
        <Paragraph>
          Se o seu fígado está ocupado demais tentando filtrar corantes,
          conservantes e o excesso de açúcar, ele não consegue processar
          eficientemente o colesterol para transformá-lo em testosterona. Este
          detox de 7 dias é o seu Hard Reset.
        </Paragraph>

        <ComparisonBox
          items={[
            {
              myth: 'Detox é tomar sucos detox de frutas o dia todo.',
              reality:
                'Frutas em excesso contêm frutose, que em altas doses pode causar esteatose hepática não alcoólica (acúmulo de gordura no fígado). O detox real é sobre apoiar as fases de biotransformação (o processo onde o fígado transforma uma toxina perigosa em algo que o corpo consiga expelir).',
            },
            {
              myth: 'Eu não preciso de detox porque meu corpo já faz isso sozinho.',
              reality:
                'Sim, seu corpo faz, mas o ambiente moderno (xenoestrógenos, poluição, dieta industrial) fornece uma carga tóxica muito maior do que a nossa biologia foi projetada para suportar. Nós vamos apenas dar as ferramentas certas para o seu corpo fazer o trabalho dele com potência máxima.',
            },
          ]}
        />

        <SubTitle>O PROTOCOLO PASSO A PASSO (7 DIAS)</SubTitle>
        <Paragraph>
          Durante esta semana, seu foco será reduzir a inflamação sistêmica (uma
          resposta de defesa do corpo que, quando constante, &quot;rouba&quot;
          energia e destrói seus hormônios).
        </Paragraph>

        <List
          items={[
            <>
              <strong>1. Hidratação Hiperosmótica:</strong> Beba 40ml de água
              por kg de peso corporal. Adicione uma pitada de sal integral ou
              sal do Himalaia para garantir a biodisponibilidade (a facilidade
              com que o nutriente é absorvido e utilizado pelo organismo) de
              minerais essenciais.
            </>,
            <>
              <strong>2. Eliminação de Disparadores Inflamatórios:</strong>{' '}
              Remova 100% de Açúcares e Edulcorantes (adoçantes artificiais),
              Óleos de Sementes (soja, milho, canola) e Glúten/Laticínios
              convencionais.
            </>,
            <>
              <strong>3. Nutrição de Suporte ao Fígado:</strong> Inclua alimentos
              que estimulem a produção de Glutationa, como Crucíferos (brócolis,
              couve-flor) e Proteínas Densas (Fígado de Boi uma vez na semana).
            </>,
          ]}
        />

        <SubTitle>NÍVEIS DE IMPLEMENTAÇÃO: O RESET</SubTitle>

        <ImplementationLevels
          levels={[
            {
              title: 'NÍVEL BRONZE',
              subtitle: '(ESSENCIAL)',
              action:
                'Corte total de álcool, açúcar e frituras por 7 dias.',
              focus:
                'Redução imediata do inchaço e melhora na clareza mental.',
              colorClass: 'bg-amber-700',
            },
            {
              title: 'NÍVEL SILVER',
              subtitle: '(AVANÇADO)',
              action:
                'Adicione o consumo de Tutano de Boi. O tutano é rico em glicina, um aminoácido fundamental para a integridade da mucosa intestinal e para a síntese de colágeno.',
              focus:
                'Melhora na absorção de nutrientes e proteção das articulações.',
              colorClass: 'bg-slate-400',
            },
            {
              title: 'NÍVEL GOLD',
              subtitle: '(THE TITAN)',
              action:
                'Combine a dieta limpa com o Jejum de Dopamina. Remova redes sociais e estímulos artificiais por 24h durante o final de semana do detox.',
              focus:
                "Pratique o Jejum Intermitente 18/6 para estimular a <span class='font-jetbrains bg-brand-red/20 px-1 rounded text-brand-red'>AUTOFAGIA</span> (renovação celular).",
              colorClass: 'bg-yellow-500 animate-pulse',
            },
          ]}
        />

        <BiohackBox title="DEFINIÇÃO TÉCNICA: AUTOFAGIA" type="info">
          <p className="mb-2">
            <span className="font-jetbrains text-brand-red">AUTOFAGIA</span> é
            um processo biológico onde as células &quot;comem&quot; suas
            próprias partes danificadas ou disfuncionais para se renovarem.
          </p>
          <p>
            É o mecanismo de reciclagem celular mais potente que possuímos,
            ativado principalmente pela ausência de nutrientes (jejum). Sem
            autofagia, suas células acumulam lixo metabólico e envelhecem
            precocemente.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="10" />
      </Section>
    </div>
  )
}
