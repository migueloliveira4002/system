import { Cover } from "@/components/Cover";
import { TableOfContents } from "@/components/TableOfContents";
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
  SimpleTable
} from "@/components/ContentBlocks";
import { Checklist } from "@/components/Checklist";
import { DiagnosticQuiz } from "@/components/DiagnosticQuiz";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex flex-col items-center py-10">
      
      {/* 1. Capa */}
      <Cover />

      {/* 2. Sumário */}
      <TableOfContents />

      {/* ESTRUTURA DOS CAPÍTULOS (PLACEHOLDERS) */}
      
      {/* INTRODUÇÃO */}
      <Section id="intro">
        <span className="font-jetbrains text-brand-red text-sm mb-4 uppercase tracking-widest">INTRODUÇÃO</span>
        <ChapterTitle>O MANIFESTO: O DESPERTAR DO TITÃ</ChapterTitle>
        <Paragraph>
          Este não é um guia de bem-estar genérico. Se você busca dicas superficiais e conforto, feche este arquivo agora. O Protocolo H-Natural é um manifesto de revolta contra a decadência biológica imposta ao homem moderno.
        </Paragraph>
        <Paragraph>
          Vivemos em uma era onde a fraqueza é celebrada e a vitalidade é tratada como um erro sistêmico. Você foi condicionado a aceitar níveis de energia medíocres, um físico apático e uma mente nublada como se fossem normais. Eu estou aqui para dizer que o normal é o seu maior inimigo.
        </Paragraph>
        <Paragraph>
          Recuperar sua supremacia hormonal não é um luxo; é um resgate da sua essência. É o retorno ao estado de prontidão, força e clareza que seus ancestrais possuíam apenas para sobreviver. Aqui, nós não aceitamos o declínio. Nós o combatemos com precisão técnica e disciplina inabalável.
        </Paragraph>

        <SubTitle>[CHECKLIST] O AUDIT H-NATURAL: ONDE VOCÊ ESTÁ</SubTitle>
        <Paragraph>
          Antes de virar a página, seja brutalmente honesto consigo mesmo. Marque cada caixa que descreve sua realidade nos últimos 3 meses:
        </Paragraph>

        <Checklist items={[
          "Acordo e ainda me sinto exausto, mesmo após 7-8 horas de sono.",
          "Sinto uma névoa mental (brain fog) que dificulta o foco no trabalho.",
          "Minha libido não é mais a mesma de 5 anos atrás.",
          "Acúmulo de gordura abdominal (a famosa barriga de estrogênio) mesmo treinando.",
          "Falta de drive ou ambição para conquistar novos projetos.",
          "Irritabilidade constante ou falta de paciência com coisas pequenas.",
          "Ausência ou raridade de ereções matinais espontâneas.",
          "Recuperação muscular lenta; sinto dores por dias após um treino simples.",
          "Dependência de café ou estimulantes para conseguir funcionar à tarde.",
          "Perda de densidade muscular e força, apesar de manter a rotina."
        ]} />

        <BiohackBox title="O VEREDITO" type="warning">
          <p className="font-jetbrains text-xs text-slate-400 mb-4 uppercase tracking-wider">
            Some suas marcações e descubra em qual estágio de decadência biológica você se encontra:
          </p>
          
          <div className="space-y-4">
            <div>
              <span className="font-oswald text-white font-bold text-lg">0 a 3 Caixas: O ADORMECIDO.</span>
              <p className="mt-1 text-slate-300">Você ainda tem uma base sólida, mas está operando em 60% do seu potencial. O Protocolo será o seu ajuste fino para a elite.</p>
            </div>
            
            <div>
              <span className="font-oswald text-brand-red font-bold text-lg">4 a 7 Caixas: O ATROFIADO.</span>
              <p className="mt-1 text-slate-300">Você está na zona de perigo. Seu ambiente e hábitos já começaram a sabotar sua produção hormonal de forma severa. O Protocolo é sua única saída antes do colapso.</p>
            </div>
            
            <div>
              <span className="font-oswald text-red-600 font-bold text-lg">8 a 10 Caixas: O CASTRADO.</span>
              <p className="mt-1 text-slate-300">Alerta máximo. Sua biologia está pedindo socorro. Você está vivendo como um passageiro no próprio corpo. Para você, este livro não é uma leitura; é um kit de sobrevivência imediato.</p>
            </div>
          </div>
        </BiohackBox>

        <PageFooter pageNumber="03" />
      </Section>

      {/* MÓDULO I */}
      <Section id="mod-1-cap-1">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO</h3>
        <ChapterTitle>01. A CRISE DA VIRILIDADE</ChapterTitle>
        
        <SubTitle>O Colapso Invisível</SubTitle>
        <Paragraph>
          Olhe ao seu redor. O homem moderno é uma sombra pálida, biológica e hormonal, de seus antepassados. O que antes era a norma — força física abundante, clareza mental afiada e uma libido inabalável — tornou-se uma raridade estatística. Vivemos em uma era de declínio sistêmico da testosterona. Dados científicos mostram que os níveis de testosterona em homens têm caído drasticamente, década após década, criando uma geração de homens que vivem em um estado de mediocridade biológica.
        </Paragraph>
        <Paragraph>
          Este não é um processo natural de envelhecimento; é um ataque coordenado pelo estilo de vida contemporâneo.
        </Paragraph>

        <SubTitle>A Castração Química Moderna</SubTitle>
        <Paragraph>
          Não estamos apenas "envelhecendo mais rápido". Estamos sendo quimicamente castrados pelo ambiente em que vivemos. O inimigo é invisível e onipresente:
        </Paragraph>

        <List items={[
          <><strong>O Ambiente:</strong> Microplásticos e disruptores endócrinos (xenoestrógenos) que mimetizam o estrogênio no seu sangue.</>,
          <><strong>A Dieta:</strong> Alimentos processados e inflamatórios que destroem a sinalização hormonal no testículo e na hipófise.</>,
          <><strong>O Estilo de Vida:</strong> Sedentarismo, privação de sono e exposição constante à luz azul, que sinalizam ao seu cérebro que você não precisa mais ser um "macho alfa" da espécie.</>
        ]} />

        <BiohackBox title="AVISO DO ESPECIALISTA">
          Se você sente cansaço crônico, falta de motivação para treinar ou aquela névoa mental que te impede de performar no trabalho, você não está "cansado". Você está operando com o tanque hormonal vazio. O Protocolo H-Natural foi desenhado justamente para quem recusa esse destino.
        </BiohackBox>

        <SubTitle>A Armadilha da Normalidade</SubTitle>
        <Paragraph>
          O grande perigo da crise da virilidade é que ela foi "normalizada". Os exames de laboratório modernos possuem intervalos de referência que incluem homens com níveis hormonais de idosos. Se você está no limite inferior do "normal", você ainda está em crise.
        </Paragraph>
        <Paragraph>
          Recuperar sua vitalidade não é apenas uma questão de estética ou músculos; é um dever para com a sua própria biologia. Para evoluir, primeiro precisamos limpar o terreno. Não existe construção sobre escombros.
        </Paragraph>
        <Paragraph>
          Este capítulo é o seu despertar. O ambiente quer você fraco, dócil e dependente. O Protocolo H-Natural quer você no topo da pirâmide.
        </Paragraph>

        <PageFooter pageNumber="04" />
      </Section>

      <Section id="mod-1-cap-2">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO</h3>
        <ChapterTitle>02. A MENTALIDADE DO PROTOCOLO</ChapterTitle>
        
        <SubTitle>Disciplina é a Única Suplementação Obrigatória</SubTitle>
        <Paragraph>
          Muitos homens compram este guia buscando a "pílula mágica" que resolverá anos de negligência em uma semana. Eles estão errados. O Protocolo H-Natural não é um evento; é um processo de guerra contra a sua própria inércia.
        </Paragraph>
        <Paragraph>
          Para que os resultados descritos aqui se manifestem, você deve adotar os três pilares da mentalidade de elite:
        </Paragraph>

        <MonoSubTitle>1. Responsabilidade Radical</MonoSubTitle>
        <Paragraph>
          Esqueça a genética, o governo ou o estresse do trabalho como desculpas para a sua baixa performance. A responsabilidade pela execução e pelos resultados é inteiramente sua. O protocolo fornece o mapa e os compostos, mas é você quem decide se vai acordar para treinar ou se vai se render ao conforto do sedentarismo.
        </Paragraph>

        <MonoSubTitle>2. Intolerância à Mediocridade</MonoSubTitle>
        <Paragraph>
          O homem moderno foi ensinado a aceitar a fadiga e a falta de libido como parte do "envelhecimento normal". Aqui, nós tratamos o "normal" como um estado de falência biológica. Você deve desenvolver uma intolerância visceral a qualquer sintoma que diminua sua virilidade. Se você não está no topo da sua capacidade física e mental, você está perdendo a guerra.
        </Paragraph>

        <MonoSubTitle>3. Precisão Cirúrgica</MonoSubTitle>
        <Paragraph>
          Otimização hormonal não é sobre "tentar" fazer dieta ou "tentar" suplementar. É sobre precisão.
        </Paragraph>
        <List items={[
          <><strong>Timing:</strong> Tomar a Creatina ou o Zinco no momento errado pode reduzir a eficácia em 30%.</>,
          <><strong>Dosagem:</strong> Não existem "multivitamínicos" genéricos aqui; usamos doses clínicas para efeitos específicos.</>,
          <><strong>Consistência:</strong> Um biohack isolado não muda sua vida; a sinergia entre sono, dieta e suplementação, repetida diariamente, sim.</>
        ]} />

        <BiohackBox title="DIRETRIZ DO EDITOR" type="synergy">
          Você não está "testando" um produto. Você está implementando um algoritmo de 21 dias que exige obediência cega aos horários e doses. A dúvida é o primeiro passo para o fracasso hormonal.
        </BiohackBox>

        <PageFooter pageNumber="05" />
      </Section>

      <Section id="mod-1-cap-3">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO</h3>
        <ChapterTitle>03. O DIAGNÓSTICO (ONDE VOCÊ ESTÁ?)</ChapterTitle>
        <Paragraph>
          Este capítulo é o momento da verdade. No Manifesto, você teve um vislumbre; agora, vamos realizar uma biópsia da sua realidade atual. Para o Protocolo H-Natural funcionar, você precisa parar de se comparar com a média medíocre e começar a se comparar com o seu potencial biológico máximo.
        </Paragraph>

        <SubTitle>A Mentira dos Intervalos de Referência</SubTitle>
        <Paragraph>
          Antes de iniciarmos o questionário, entenda uma coisa: os laboratórios modernos definem o que é "normal" baseando-se na média da população atual. Se a população está doente, inflamada e com a testosterona em declínio, o "normal" do laboratório será, por definição, um estado de declínio.
        </Paragraph>
        <Paragraph>
          Se o seu exame diz que você está dentro do limite, mas você se sente sem energia, saiba que você está operando em um vácuo hormonal. Aqui, não buscamos o normal. Buscamos a Otimização.
        </Paragraph>

        <DiagnosticQuiz questions={{
          physical: [
            { id: "p1", text: "Sinto fadiga excessiva ou falta de energia ao final do dia" },
            { id: "p2", text: "Minha força na academia estagnou ou diminuiu nos últimos meses" },
            { id: "p3", text: "Sinto dores articulares ou musculares que demoram a passar" },
            { id: "p4", text: "Tenho dificuldade em perder gordura abdominal, mesmo com dieta" }
          ],
          mental: [
            { id: "m1", text: "Sinto névoa mental ou dificuldade de concentração no trabalho" },
            { id: "m2", text: "Minha motivação e drive para novos projetos estão baixos" },
            { id: "m3", text: "Sinto irritabilidade, ansiedade ou alterações bruscas de humor" },
            { id: "m4", text: "Tenho episódios de desânimo ou falta de confiança competitiva" }
          ],
          hormonal: [
            { id: "h1", text: "Minha libido (desejo sexual) está abaixo do que já foi um dia" },
            { id: "h2", text: "Percebo uma diminuição na frequência de ereções matinais" },
            { id: "h3", text: "Sinto que meu sono não é reparador, mesmo dormindo 7h+" },
            { id: "h4", text: "Percebo uma perda de densidade muscular (músculos moles)" }
          ]
        }} />

        <Paragraph>
          O diagnóstico foi feito. Agora que você sabe o tamanho do problema, vamos começar a limpar o terreno.
        </Paragraph>

        <PageFooter pageNumber="06" />
      </Section>

      <Section id="mod-1-cap-04">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO (DETOX)</h3>
        <ChapterTitle>04. O INIMIGO INVISÍVEL (XENOESTRÓGENOS)</ChapterTitle>
        
        <SubTitle>A Sabotagem Química Silenciosa</SubTitle>
        <Paragraph>
          O maior obstáculo para a sua produção de testosterona não é apenas o que falta na sua dieta, mas o que sobra no seu ambiente. Vivemos cercados por Xenoestrógenos — compostos químicos sintéticos que possuem uma estrutura molecular tão semelhante ao estrogênio que o seu corpo os confunde com o hormônio real.
        </Paragraph>
        <Paragraph>
          Essas substâncias agem como "chaves falsas" que ocupam os receptores hormonais nas suas células, bloqueando a ação da testosterona e enviando um sinal falso ao seu cérebro de que você já possui hormônios femininos em excesso. O resultado? Seu corpo reduz a produção natural de testosterona e você entra em um estado de dominância estrogênica.
        </Paragraph>

        <BiohackBox title="ONDE ELES ESTÃO ESCONDIDOS?" type="warning">
          <p className="mb-4">
            Você está sendo exposto a esses disruptores endócrinos desde o momento em que acorda até a hora em que vai dormir. Identificar as fontes é o primeiro passo da sua Blindagem Ambiental:
          </p>
          <ul className="space-y-4">
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">Plásticos e Bisfenóis (BPA/BPS)</span>
              <span className="text-slate-300">Garrafas de água plásticas, recipientes de comida que vão ao micro-ondas e o revestimento interno de latas de conserva. Quando aquecidos, esses plásticos liberam químicos diretamente na sua comida.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">Recibos de Papel Térmico</span>
              <span className="text-slate-300">Aquele papel de cupom fiscal de supermercado ou banco é saturado de BPA de fácil absorção pela pele. Evite manuseá-los desnecessariamente.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">Produtos de Higiene Pessoal</span>
              <span className="text-slate-300">Shampoos, desodorantes e sabonetes convencionais costumam conter <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">PARABENOS</span> e <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">FTALATOS</span>, usados como conservantes e fixadores de fragrância.</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-jetbrains text-brand-red text-sm font-bold uppercase">Água de Torneira sem Filtro</span>
              <span className="text-slate-300">Pode conter resíduos de defensivos agrícolas e até traços de anticoncepcionais que os sistemas de tratamento convencionais não conseguem eliminar totalmente.</span>
            </li>
          </ul>
        </BiohackBox>

        <SubTitle>O Impacto na Sua Virilidade</SubTitle>
        <Paragraph>
          A exposição constante a xenoestrógenos é a principal causa da "barriga de estrogênio", do ginecomastia (desenvolvimento de tecido mamário) e da perda de agressividade competitiva. Não se trata de uma paranoia, mas de uma ameaça biológica real que o Protocolo visa neutralizar.
        </Paragraph>
        <Paragraph>
            Identificamos os sabotadores. Agora, precisamos de um plano de defesa para proteger seu santuário biológico.
        </Paragraph>

        <PageFooter pageNumber="10" />
      </Section>

      <Section id="mod-1-cap-05">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO (DETOX)</h3>
        <ChapterTitle>05. BLINDAGEM AMBIENTAL</ChapterTitle>
        
        <SubTitle>Construindo o seu Santuário de Testosterona</SubTitle>
        <Paragraph>
          A identificação dos inimigos químicos foi apenas o primeiro passo da sua jornada. Agora, iniciaremos a construção da sua Blindagem Ambiental. Não faz sentido investir em suplementação tática e nutrição de precisão se você permite que o ambiente externo sabote seus receptores hormonais a cada hora do dia.
        </Paragraph>
        <Paragraph>
          Abaixo, apresento as substituições obrigatórias para neutralizar a invasão estrogênica e proteger sua fisiologia.
        </Paragraph>

        <SubTitle>O PROTOCOLO DE SUBSTITUIÇÃO TÁTICA</SubTitle>
        <Paragraph>
          Para blindar seu sistema, você deve trocar a conveniência tóxica pela segurança biológica:
        </Paragraph>

        <List items={[
          <><strong>Vidro e Aço Inox sobre Plástico:</strong> Elimine garrafas de água de plástico e vasilhas de polímeros, especialmente se forem aquecidas. O calor acelera a liberação de bisfenóis que mimetizam o estrogênio no seu sangue. Use apenas recipientes de vidro ou aço inoxidável de alta qualidade.</>,
          <><strong>Higiene Pessoal Consciente:</strong> Migre para desodorantes sem alumínio e shampoos livres de <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">PARABENOS</span> e <span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">FTALATOS</span>. Sua pele é um órgão de absorção direta; o que você passa nela entra na sua corrente sanguínea sem o filtro do fígado.</>,
          <><strong>Filtragem de Água Avançada:</strong> Utilize filtros que possuam carvão ativado ou osmose reversa. A água da torneira pode conter traços de disruptores endócrinos que sobrecarregam sua sinalização hormonal.</>,
          <><strong>A Regra do "Não Toque":</strong> Recuse recibos de papel térmico sempre que possível. Se precisar manuseá-los, lave as mãos imediatamente após o contato para evitar a absorção cutânea de bisfenol A (<span className="font-jetbrains text-xs bg-slate-800 px-1 rounded text-slate-400">BPA</span>).</>
        ]} />

        <BiohackBox title="O CHECKLIST DA BLINDAGEM" type="synergy">
           <Checklist items={[
              "Troquei minha garrafa de plástico por uma de aço inox ou vidro.",
              "Joguei fora todos os recipientes de plástico que eu usava para esquentar comida no micro-ondas.",
              "Verifiquei meu desodorante e sabonete em busca de 'Paraben' ou 'Phthalate' nos ingredientes.",
              "Instalei ou revisei o filtro de água da minha residência."
           ]} />
        </BiohackBox>

        <Paragraph>
          Limpamos o ambiente externo. Agora, precisamos olhar para dentro. O seu sistema hormonal depende de um alicerce sólido que começa no seu trato digestivo.
        </Paragraph>

        <PageFooter pageNumber="11" />
      </Section>

      <Section id="mod-1-cap-06">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO (DETOX)</h3>
        <ChapterTitle>06. O SEGUNDO CÉREBRO (SAÚDE INTESTINAL)</ChapterTitle>
        
        <SubTitle>Por que sua suplementação está indo para o ralo</SubTitle>
        <Paragraph>
          Este capítulo é fundamental porque ele resolve o maior gargalo de quem tenta se suplementar: a absorção. Como seu editor, estruturei este conteúdo para que o leitor entenda que o intestino não é apenas um tubo de digestão, mas o centro de comando da sua inflamação e, consequentemente, da sua testosterona.
        </Paragraph>
        <Paragraph>
          Você pode comprar a Creatina mais pura do mundo e o Zinco mais biodisponível do mercado, mas se o seu trato gastrointestinal estiver inflamado, você está apenas produzindo uma "urina cara". O intestino é o porteiro da sua biologia. Se o porteiro estiver sob ataque, nada de bom entra e tudo o que é ruim vaza para a sua corrente sanguínea.
        </Paragraph>
        <Paragraph>
          O que a maioria dos homens ignora é a conexão direta entre o intestino e a produção de testosterona. Um intestino "furado" (permeabilidade intestinal) gera um estado de inflamação crônica. O seu corpo interpreta inflamação como estresse. O estresse dispara o Cortisol. E o Cortisol é o inimigo mortal da sua Testosterona. Quando um sobe, o outro desce obrigatoriamente.
        </Paragraph>

        <ComparisonBox items={[
          {
            myth: "Intestino serve apenas para absorver calorias e eliminar resíduos.",
            reality: "O intestino abriga cerca de 70% do seu sistema imunológico e produz 90% da sua serotonina. Se ele falha, sua imunidade cai, seu humor desmorona e sua sinalização hormonal entra em colapso."
          },
          {
            myth: "Se eu não tenho dor de barriga, meu intestino está perfeito.",
            reality: "A inflamação intestinal pode ser silenciosa, manifestando-se como névoa mental (brain fog), falta de libido e dificuldade de ganhar massa muscular, mesmo sem sintomas digestivos óbvios."
          }
        ]} />

        <SubTitle>NÍVEIS DE IMPLEMENTAÇÃO: O PROTOCOLO DE RECUPERAÇÃO</SubTitle>
        <Paragraph>
          Escolha o seu nível de comprometimento hoje. O objetivo é subir para o nível Gold conforme sua disciplina aumenta.
        </Paragraph>

        <ImplementationLevels levels={[
          {
            title: "NÍVEL BRONZE",
            subtitle: "(ESSENCIAL)",
            action: "Remova óleos vegetais (soja, milho, canola) e açúcares refinados. Eles são como lixa nas paredes do seu intestino.",
            focus: "Hidratação agressiva (35ml de água por kg de peso) para manter a mucosa intestinal saudável.",
            colorClass: "bg-amber-700"
          },
          {
            title: "NÍVEL SILVER",
            subtitle: "(OTIMIZAÇÃO)",
            action: "Introduza alimentos densos em nutrientes e colágeno natural, como o Tutano e o Fígado de Boi. Estes alimentos fornecem a matéria-prima para reconstruir a parede intestinal.",
            focus: "Suplementação com Glutamina (5g ao acordar) para selar as paredes do intestino.",
            colorClass: "bg-slate-400"
          },
          {
            title: "NÍVEL GOLD",
            subtitle: "(THE TITAN)",
            action: "Implemente o Jejum Intermitente (16/8) pelo menos 3 vezes por semana para dar descanso ao sistema digestivo e permitir a autofagia celular.",
            focus: "Uso de probióticos de alta densidade e remoção total de glúten e laticínios de baixa qualidade por 21 dias para um \"Hard Reset\".",
            colorClass: "bg-yellow-500"
          }
        ]} />

        <PageFooter pageNumber="12" />
      </Section>

      <Section id="mod-1-cap-7">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO I: O RESET BIOLÓGICO (DETOX)</h3>
        <ChapterTitle>07. A GRANDE FAXINA</ChapterTitle>
        
        <SubTitle>Preparando o Terreno para a Supremacia</SubTitle>
        <Paragraph>
          Antes de construirmos um império hormonal, precisamos limpar os escombros. Seu corpo passou anos acumulando subprodutos do metabolismo e toxinas ambientais que sobrecarregam seus hepatócitos (as células funcionais do fígado, responsáveis por processar tudo o que entra no seu corpo).
        </Paragraph>
        <Paragraph>
          Se o seu fígado está ocupado demais tentando filtrar corantes, conservantes e o excesso de açúcar, ele não consegue processar eficientemente o colesterol para transformá-lo em testosterona. Este detox de 7 dias é o seu Hard Reset.
        </Paragraph>

        <ComparisonBox items={[
          {
            myth: "Detox é tomar sucos detox de frutas o dia todo.",
            reality: "Frutas em excesso contêm frutose, que em altas doses pode causar esteatose hepática não alcoólica (acúmulo de gordura no fígado). O detox real é sobre apoiar as fases de biotransformação (o processo onde o fígado transforma uma toxina perigosa em algo que o corpo consegue expelir)."
          },
          {
            myth: "Eu não preciso de detox porque meu corpo já faz isso sozinho.",
            reality: "Sim, seu corpo faz, mas o ambiente moderno (xenoestrógenos, poluição, dieta industrial) fornece uma carga tóxica muito maior do que a nossa biologia foi projetada para suportar. Nós vamos apenas dar as ferramentas certas para o seu corpo fazer o trabalho dele com potência máxima."
          }
        ]} />

        <SubTitle>O PROTOCOLO PASSO A PASSO (7 DIAS)</SubTitle>
        <Paragraph>
          Durante esta semana, seu foco será reduzir a inflamação sistêmica (uma resposta de defesa do corpo que, quando constante, "rouba" energia e destrói seus hormônios).
        </Paragraph>

        <List items={[
          <><strong>1. Hidratação Hiperosmótica:</strong> Beba 40ml de água por kg de peso corporal. Adicione uma pitada de sal integral ou sal do Himalaia para garantir a biodisponibilidade (a facilidade com que o nutriente é absorvido e utilizado pelo organismo) de minerais essenciais.</>,
          <><strong>2. Eliminação de Disparadores Inflamatórios:</strong> Remova 100% de Açúcares e Edulcorantes (adoçantes artificiais), Óleos de Sementes (soja, milho, canola) e Glúten/Laticínios convencionais.</>,
          <><strong>3. Nutrição de Suporte ao Fígado:</strong> Inclua alimentos que estimulem a produção de Glutationa, como Crucíferos (brócolis, couve-flor) e Proteínas Densas (Fígado de Boi uma vez na semana).</>
        ]} />

        <SubTitle>NÍVEIS DE IMPLEMENTAÇÃO: O RESET</SubTitle>
        
        <ImplementationLevels levels={[
          {
            title: "NÍVEL BRONZE",
            subtitle: "(ESSENCIAL)",
            action: "Corte total de álcool, açúcar e frituras por 7 dias.",
            focus: "Redução imediata do inchaço e melhora na clareza mental.",
            colorClass: "bg-amber-700"
          },
          {
            title: "NÍVEL SILVER",
            subtitle: "(AVANÇADO)",
            action: "Adicione o consumo de Tutano de Boi. O tutano é rico em glicina, um aminoácido fundamental para a integridade da mucosa intestinal e para a síntese de colágeno.",
            focus: "Melhora na absorção de nutrientes e proteção das articulações.",
            colorClass: "bg-slate-400"
          },
          {
            title: "NÍVEL GOLD",
            subtitle: "(THE TITAN)",
            action: "Combine a dieta limpa com o Jejum de Dopamina. Remova redes sociais e estímulos artificiais por 24h durante o final de semana do detox.",
            focus: "Pratique o Jejum Intermitente 18/6 para estimular a <span class='font-jetbrains bg-brand-red/20 px-1 rounded text-brand-red'>AUTOFAGIA</span> (renovação celular).",
            colorClass: "bg-yellow-500 animate-pulse"
          }
        ]} />

        <BiohackBox title="DEFINIÇÃO TÉCNICA: AUTOFAGIA" type="info">
          <p className="mb-2"><span className="font-jetbrains text-brand-red">AUTOFAGIA</span> é um processo biológico onde as células "comem" suas próprias partes danificadas ou disfuncionais para se renovarem.</p>
          <p>É o mecanismo de reciclagem celular mais potente que possuímos, ativado principalmente pela ausência de nutrientes (jejum). Sem autofagia, suas células acumulam lixo metabólico e envelhecem precocemente.</p>
        </BiohackBox>

        <PageFooter pageNumber="10" />
      </Section>

      {/* MÓDULO II */}
      <Section id="mod-2-cap-8">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)</h3>
        <ChapterTitle className="text-[#FF0000]">08. O MITO DA GORDURA E DO COLESTEROL</ChapterTitle>
        
        <SubTitle>A Mentira que Castrou uma Geração</SubTitle>
        <Paragraph>
          Por mais de 50 anos, você foi bombardeado com a ideia de que a gordura saturada (aquela encontrada em carnes e ovos) entope suas artérias e que o colesterol é um vilão a ser combatido com medicamentos. Essa narrativa não apenas falhou em reduzir as doenças cardíacas, como criou uma epidemia de homens com baixa libido, depressão e falta de força muscular.
        </Paragraph>
        <Paragraph>
          A ciência básica da endocrinologia é clara: a testosterona é um hormônio esteroide (uma substância química produzida a partir do colesterol). Sem colesterol e gorduras saturadas de alta qualidade, suas células de Leydig simplesmente não têm o "tijolo" necessário para construir a molécula de testosterona. Ao adotar uma dieta baixa em gordura, você está, tecnicamente, desligando sua própria produção hormonal.
        </Paragraph>

        <ComparisonBox items={[
          {
            myth: "Comer gordura saturada causa doenças no coração.",
            reality: "A gordura saturada é a molécula mais estável do corpo humano. O verdadeiro culpado pelas doenças cardíacas é a inflamação sistêmica causada pelo excesso de açúcar e óleos vegetais processados, que oxidam as partículas de colesterol no seu sangue."
          },
          {
            myth: "O colesterol dos alimentos aumenta drasticamente o colesterol no sangue.",
            reality: "Cerca de 80% do colesterol no seu sangue é produzido pelo seu próprio fígado, independentemente do que você come. Se você come menos, seu corpo produz mais. O colesterol é vital para a sobrevivência e para o cérebro."
          },
          {
            myth: "Dietas Low-Fat (baixa gordura) são melhores para a performance.",
            reality: "Dietas baixas em gordura reduzem drasticamente a biodisponibilidade de vitaminas lipossolúveis como A, D, E e K. Sem essas vitaminas, sua sinalização hormonal entra em colapso e seu 'drive' competitivo desaparece."
          },
          {
            myth: "As gorduras vegetais (soja, milho, canola) são 'amigas do coração'.",
            reality: "Esses óleos são extremamente instáveis e ricos em ômega-6, que promove a inflamação e pode reduzir a sensibilidade dos seus receptores de testosterona. A gordura animal é o combustível original do ser humano."
          }
        ]} />

        <SubTitle>A ENGANHARIA DA <span className="font-jetbrains text-brand-red">ESTEROIDOGÊNESE</span></SubTitle>
        <Paragraph>
          A <span className="font-jetbrains text-brand-red">ESTEROIDOGÊNESE</span> (o processo biológico de criação de hormônios esteroides) começa com o transporte de colesterol para dentro das mitocôndrias das suas células. Para otimizar esse processo, o Protocolo H-Natural exige a inclusão de alimentos densos e ancestrais que foram esquecidos pela nutrição moderna:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 break-inside-avoid">
          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">O Poder do Tutano</h4>
            <p className="font-inter text-slate-300 text-sm">
              O Tutano de Boi é um reservatório de gorduras saudáveis e glicina (um aminoácido essencial para a saúde intestinal e reparo de tecidos). Ele fornece a densidade calórica e hormonal necessária para manter o sistema em alta voltagem.
            </p>
          </div>
          
          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">Fígado de Boi</h4>
            <p className="font-inter text-slate-300 text-sm">
              O Multivitamínico da Natureza: O fígado é a fonte mais rica de retinol (Vitamina A pré-formada), que é um co-fator crítico para a produção de testosterona nos testículos. Sem Vitamina A, sua produção hormonal fica estagnada.
            </p>
          </div>

          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">Gemas de Ovos</h4>
            <p className="font-inter text-slate-300 text-sm">
              A gema é o local onde reside todo o colesterol e a colina (nutriente vital para a função cerebral e metabólica). Jogar a gema fora é, literalmente, jogar sua testosterona no lixo.
            </p>
          </div>
        </div>

        <BiohackBox title="NOTA TÉCNICA: HEPATÓCITOS" type="warning">
          <p>
            Seus <span className="font-jetbrains text-brand-red">HEPATÓCITOS</span> (células do fígado) precisam de matéria-prima de qualidade. Gorduras oxidadas de óleos vegetais danificam essas células, enquanto gorduras saturadas estáveis as protegem e fornecem energia limpa.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="11" />
      </Section>

      <Section id="mod-2-cap-9">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)</h3>
        <ChapterTitle>09. A TRÍADE MINERAL (ZN, MG, B)</ChapterTitle>
        
        <SubTitle>Os Maestros da Orquestra Hormonal</SubTitle>
        <Paragraph>
          Se as gorduras saturadas são o combustível, os minerais são os catalisadores — substâncias que aceleram as reações químicas sem serem consumidas por elas. No contexto da esteroidogénese (a criação de hormonas), a carência de um único mineral pode criar um "gargalo" biológico que reduz a sua produção de testosterona a uma fração do que ela deveria ser.
        </Paragraph>
        <Paragraph>
          O homem moderno é cronicamente deficiente nestes três elementos devido ao empobrecimento do solo e ao consumo excessivo de alimentos processados, que "sequestram" os minerais antes que o corpo os consiga utilizar.
        </Paragraph>

        <ComparisonBox items={[
          {
            myth: "Posso obter todos os minerais de que preciso apenas através de uma alimentação equilibrada.",
            reality: "Devido à agricultura intensiva, os solos atuais possuem até 80% menos minerais do que há 50 anos. Mesmo uma dieta 'limpa' pode deixar lacunas críticas que apenas a suplementação estratégica ou alimentos extremamente densos conseguem preencher."
          },
          {
            myth: "Zinco é bom apenas para a imunidade.",
            reality: "O Zinco é fundamental para a função das células de Leydig (que produzem testosterona). Além disso, ele atua como um inibidor natural da aromatase (a enzima que transforma a sua preciosa testosterona em estrogénio)."
          },
          {
            myth: "Tomar Magnésio antes de treinar dá mais energia.",
            reality: "O Magnésio é um relaxante neuromuscular. O seu melhor uso é no período pré-sono para otimizar a recuperação e baixar o cortisol. Tomá-lo antes do treino pode, inclusive, reduzir a sua explosão muscular momentânea."
          },
          {
            myth: "O Boro é um mineral sem importância para humanos.",
            reality: "Estudos mostram que a suplementação com Boro pode aumentar a testosterona livre (a fração da hormona que não está ligada a proteínas e que realmente exerce o efeito de força e libido) em até 25% numa única semana."
          }
        ]} />

        <SubTitle>OS TRÊS PILARES DA TRÍADE</SubTitle>
        
        <div className="space-y-6 my-6">
          <div className="border-l-4 border-zinc-500 pl-4">
            <h4 className="font-oswald text-zinc-400 text-lg uppercase font-bold mb-2">1. ZINCO (O CONSTRUTOR)</h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              O Zinco é o mineral da masculinidade. Ele é necessário para a espermatogénese e para manter a integridade dos recetores androgénicos. A deficiência de Zinco envia um sinal de "fome hormonal" ao cérebro, desligando o eixo de produção.
            </p>
          </div>
          
          <div className="border-l-4 border-slate-400 pl-4">
            <h4 className="font-oswald text-slate-400 text-lg uppercase font-bold mb-2">2. MAGNÉSIO (O RECUPERADOR)</h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Participante em mais de 300 reações enzimáticas, o Magnésio é vital para a produção de <span className="font-jetbrains text-brand-red">ATP</span>. No Protocolo H-Natural, ele garante que o sistema nervoso entre em repouso profundo, momento do pico de GH.
            </p>
          </div>

          <div className="border-l-4 border-amber-600 pl-4">
            <h4 className="font-oswald text-amber-600 text-lg uppercase font-bold mb-2">3. BORO (O LIBERTADOR)</h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              O Boro atua diminuindo os níveis de SHBG, permitindo que mais testosterona circule de forma livre e ativa no seu sangue, pronta para construir músculo e queimar gordura.
            </p>
          </div>
        </div>

        <BiohackBox title="CONCEITO CHAVE: SHBG E TESTOSTERONA LIVRE" type="warning">
          <p>
            A <span className="font-jetbrains text-brand-red">SHBG</span> (Globulina Ligadora de Hormônios Sexuais) é como um "freio de mão" para sua testosterona. Ela se liga à molécula e a impede de agir nos tecidos.
          </p>
          <p className="mt-2">
            O objetivo do <strong>BORO</strong> é soltar esse freio, aumentando a <span className="font-jetbrains text-brand-red">TESTOSTERONA LIVRE</span> disponível para uso biológico imediato.
          </p>
        </BiohackBox>

        <SubTitle>FONTES ALIMENTARES DE ELITE</SubTitle>
        <SimpleTable 
          headers={["Mineral", "Fonte Principal", "Benefício Chave"]}
          rows={[
            ["ZINCO", "Ostras, Carne Vermelha", "Produção de Testosterona e Inibição da Aromatase"],
            ["MAGNÉSIO", "Espinafre, Sementes de Abóbora", "Relaxamento Muscular e Síntese de ATP"],
            ["BORO", "Passas, Ameixas Secas, Abacate", "Redução de SHBG e Aumento de Testosterona Livre"]
          ]}
        />

        <SubTitle>ENGENHARIA DE CONSUMO: O TIMING TÁTICO</SubTitle>
        <List items={[
          <><strong>Zinco e Magnésio:</strong> Devem ser consumidos preferencialmente à noite, longe de laticínios, pois o cálcio pode competir pela absorção.</>,
          <><strong>Boro:</strong> Pode ser ciclado (ex: 2 semanas de uso por 1 de descanso) para manter a sensibilidade dos recetores elevada.</>
        ]} />

        <PageFooter pageNumber="12" />
      </Section>

      <Section id="mod-2-cap-10">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)</h3>
        <ChapterTitle className="text-[#FF0000]">10. O PODER VERMELHO (VASODILATAÇÃO NATURAL)</ChapterTitle>
        
        <SubTitle>O Sistema de Entrega da Virilidade</SubTitle>
        <Paragraph>
          O sangue é o veículo que transporta a sua testosterona, o oxigénio e os nutrientes até aos tecidos alvo (músculos e órgãos genitais). Se o seu <span className="font-jetbrains text-brand-red">ENDOTÉLIO</span> (a camada fina de células que reveste o interior dos vasos sanguíneos) não estiver a funcionar corretamente, o seu corpo não consegue produzir <span className="font-jetbrains text-brand-red">ÓXIDO NÍTRICO</span> (um gás sinalizador crucial que diz aos vasos sanguíneos para relaxarem e dilatarem).
        </Paragraph>
        <Paragraph>
          Sem Óxido Nítrico, a performance desmorona. Na academia, você não sente o "pump" (o inchaço muscular causado pelo fluxo sanguíneo). No quarto, a qualidade das ereções diminui. O "Poder Vermelho" é sobre restaurar a saúde das suas artérias para que a sua potência seja sentida em cada centímetro do seu corpo.
        </Paragraph>

        <ComparisonBox items={[
          {
            myth: "Vasodilatadores servem apenas para deixar as veias aparentes na academia.",
            reality: "A vasodilatação é um marcador de saúde cardiovascular. Vasos sanguíneos saudáveis reduzem a pressão arterial e garantem que a testosterona livre chegue aos recetores androgénicos de forma eficiente."
          },
          {
            myth: "A Arginina é o melhor suplemento para aumentar o Óxido Nítrico.",
            reality: "A Arginina é amplamente degradada no fígado. A Citrulina Malato é vastamente superior, pois é um precursor que o corpo converte em Arginina de forma muito mais eficaz, mantendo os níveis de Óxido Nítrico elevados por mais tempo."
          },
          {
            myth: "Disfunção erétil é apenas um problema psicológico ou de falta de testosterona.",
            reality: "Na maioria das vezes, é um problema de disfunção endotelial. O pênis é um órgão puramente vascular; o que é bom para o seu coração e para os seus músculos, é obrigatoriamente bom para a sua saúde sexual."
          }
        ]} />

        <SubTitle>A ENGENHARIA DO FLUXO SANGUÍNEO</SubTitle>
        <Paragraph>
          Para ativar o "Poder Vermelho", o Protocolo H-Natural foca em compostos que maximizam a biodisponibilidade de nitratos e aminoácidos específicos:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 break-inside-avoid">
          <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-900/30 p-6 rounded-lg">
            <h4 className="font-oswald text-white text-xl uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
              Citrulina Malato
            </h4>
            <span className="text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider">(O ARSENAL TÁTICO)</span>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Como definido no seu arsenal, a dose de 6g-8g tomada 30 minutos antes do treino é o padrão ouro. Ela melhora a entrega de nutrientes e reduz a fadiga ao acelerar a remoção de subprodutos metabólicos como o amoníaco.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/20 p-6 rounded-lg">
            <h4 className="font-oswald text-white text-xl uppercase mb-3">O Poder das Betalainas</h4>
            <span className="text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider">(BETERRABA)</span>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Alimentos vermelhos, especialmente a beterraba, são ricos em nitratos inorgânicos. Estes nitratos são convertidos em Óxido Nítrico através de uma via independente da suplementação, criando uma sinergia poderosa quando combinados com a Citrulina.
            </p>
          </div>
        </div>

        <BiohackBox title="HASTE CAPILAR E MICROCIRCULAÇÃO" type="info">
          <p>
            A saúde capilar e o crescimento de pelos faciais (cavanhaque/barba) dependem desta microcirculação. O uso de óleos vegetais atua externamente, mas o fluxo sanguíneo interno é o que realmente nutre o folículo piloso.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="13" />
      </Section>

      <Section id="mod-2-cap-11">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)</h3>
        <ChapterTitle>11. ALIMENTOS PROIBIDOS VS. OBRIGATÓRIOS</ChapterTitle>
        <SubTitle>A Engenharia da sua Despensa: O Guia Definitivo</SubTitle>
        <Paragraph>
          Neste capítulo, vamos separar o que constrói a sua virilidade (características biológicas masculinas) do que promove a sua decadência hormonal. Cada item no seu prato desencadeia uma cascata de sinais químicos. Nosso objetivo é silenciar os sinais de estresse e amplificar os sinais de poder.
        </Paragraph>

        <SubTitle>I. A LISTA DE BIOHAZARD (RISCO BIOLÓGICO)</SubTitle>
        <Paragraph>
            Estes itens promovem a Lipoperoxidação (um processo químico onde as gorduras ruins "apodrecem" dentro das suas células, causando danos ao DNA e às membranas celulares).
        </Paragraph>
        
        <div className="space-y-6 my-6">
            <BiohackBox title="LIPOPEROXIDAÇÃO (ÓLEOS DE SEMENTES)" type="warning">
                <p><strong className="text-white">O Inimigo:</strong> Óleos de soja, canola, girassol e milho.</p>
                <p className="mt-2 text-slate-300">Ricos em ácido linoleico, estes óleos acumulam-se no tecido adiposo e inibem a função das mitocôndrias. A <span className="font-jetbrains text-brand-red">LIPOPEROXIDAÇÃO</span> é o processo onde estas gorduras "apodrecem" dentro das células.</p>
            </BiohackBox>

            <BiohackBox title="GLICAÇÃO (AÇÚCARES E XAROPES)" type="warning">
                <p><strong className="text-white">O Processo:</strong> O consumo constante gera a <span className="font-jetbrains text-brand-red">GLICAÇÃO</span>.</p>
                <p className="mt-2 text-slate-300">O açúcar "cola-se" às proteínas do sangue (como a hemoglobina), criando moléculas rígidas e inúteis (AGEs). Isso entope os microvasos e destrói a vasodilatação natural.</p>
            </BiohackBox>

            <BiohackBox title="DISRUPTORES ENDÓCRINOS (SOJA)" type="warning">
                <p><strong className="text-white">O Bloqueio:</strong> Soja e derivados não-fermentados contêm fitoestrógenos.</p>
                <p className="mt-2 text-slate-300">Eles competem com a testosterona pelos receptores androgênicos (as "fechaduras" das células), bloqueando a ação do hormônio masculino.</p>
            </BiohackBox>

            <BiohackBox title="EXCITOTOXINAS (TEMPEROS PRONTOS)" type="warning">
                <p><strong className="text-white">O Dano Neural:</strong> Quase todos contêm Glutamato Monossódico.</p>
                <p className="mt-2 text-slate-300">Uma <span className="font-jetbrains text-brand-red">EXCITOTOXINA</span> que estimula as células cerebrais até a exaustão. Prejudica diretamente o eixo Hipotálamo-Hipófise-Testicular.</p>
            </BiohackBox>
        </div>

        <SubTitle>II. A SELEÇÃO DE ELITE (OBRIGATÓRIOS)</SubTitle>
        <Paragraph>
          Aqui residem os alimentos com maior Densidade Nutricional (quantidade de micronutrientes por caloria).
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid">
            {/* Cards estilizados para os grupos de alimentos */}
            <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">1. Gorduras Estruturais</h4>
                <ul className="space-y-3 font-inter text-sm text-slate-300">
                    <li><strong className="text-white block mb-1">Tutano de Boi:</strong> Rico em células-tronco e Glicina (anti-inflamatório).</li>
                    <li><strong className="text-white block mb-1">Manteiga Ghee:</strong> Pura gordura saturada, base para a Esteroidogênese.</li>
                    <li><strong className="text-white block mb-1">Óleo de Coco:</strong> Fonte de TCMs para energia imediata.</li>
                </ul>
            </div>

            <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">2. Órgãos (Topo da Pirâmide)</h4>
                <ul className="space-y-3 font-inter text-sm text-slate-300">
                    <li><strong className="text-white block mb-1">Fígado de Boi (1-2x/sem):</strong> Fonte suprema de Retinol (Vit. A) para sinalização de testosterona.</li>
                    <li><strong className="text-white block mb-1">Coração de Boi:</strong> Maior fonte natural de Coenzima Q10 (energia mitocondrial).</li>
                </ul>
            </div>

            <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">3. Sementes Táticas</h4>
                <ul className="space-y-3 font-inter text-sm text-slate-300">
                    <li><strong className="text-white block mb-1">Abóbora:</strong> Zinco e Magnésio (inibição da Aromatase).</li>
                    <li><strong className="text-white block mb-1">Castanha do Pará (2un/dia):</strong> Selênio para tireoide e proteção testicular.</li>
                    <li><strong className="text-white block mb-1">Gergelim:</strong> Cálcio e Boro (regulação da SHBG).</li>
                </ul>
            </div>

            <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">4. Carboidratos de Baixa Toxicidade</h4>
                <ul className="space-y-3 font-inter text-sm text-slate-300">
                    <li><strong className="text-white block mb-1">Frutas (Baixo IG):</strong> Vermelhas e Cítricas (polifenóis para o Endotélio).</li>
                    <li><strong className="text-white block mb-1">Tubérculos:</strong> Mandioca, batata-doce, inhame (glicogênio limpo).</li>
                </ul>
            </div>
        </div>

        <SubTitle>III. O GUIA DE COMPRAS "H-NATURAL" (CHECKLIST)</SubTitle>
        <Paragraph>Use este guia ao entrar no supermercado para garantir a Blindagem Ambiental:</Paragraph>
        
        <Checklist items={[
          "Açougue: Cortes gordos, fígado, tutano e ovos caipiras.",
          "Hortifruti: Crucíferos (brócolis, couve), abacate, beterraba (para o Poder Vermelho) e limão.",
          "Grãos/Sementes: Sementes de abóbora cruas, castanhas do Pará e gergelim.",
          "Bebidas: Água mineral em vidro (se possível), café orgânico e chás naturais.",
          "IGNORAR: Corredores de biscoitos, óleos vegetais, refrigerantes e produtos 'diet/light'."
        ]} />

        <PageFooter pageNumber="14" />
      </Section>

      {/* MÓDULO III */}
      <Section id="mod-3-cap-12">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)</h3>
        <ChapterTitle>12. TREINO NEURO-HORMONAL</ChapterTitle>
        
        <Paragraph>
          Com o combustível de elite devidamente integrado ao seu sistema, entramos agora na fase de ignição mecânica do Protocolo H-Natural. O treinamento neuro-hormonal não é um exercício de vaidade estética, mas um protocolo de comunicação química com o seu DNA. Para o homem que busca a supremacia biológica, a academia é o laboratório onde o esforço físico é traduzido em picos de Testosterona e GH (Hormona do Crescimento).
        </Paragraph>
        <Paragraph>
          Neste capítulo, vamos desvendar por que o levantamento de peso pesado e a obsessão pelo treino de pernas são os gatilhos fisiológicos mais potentes do planeta para a sua masculinidade.
        </Paragraph>

        <SubTitle>A Força como Sinalizador de Sobrevivência</SubTitle>
        <Paragraph>
          O seu corpo é uma máquina biológica extremamente económica; ele não gastará energia produzindo hormonas dispendiosas se não houver uma necessidade real de sobrevivência. Quando você levanta cargas pesadas, está a enviar um sinal claro ao seu Eixo Hipotálamo-Hipófise-Testicular: o ambiente é hostil e o corpo precisa de mais força, mais densidade óssea e mais massa muscular para prevalecer.
        </Paragraph>
        <Paragraph>
          O treino de alta intensidade e baixa repetição recruta as unidades motoras de alto limiar, exigindo uma resposta coordenada do seu Sistema Nervoso Central (SNC). Esta demanda neurológica força o organismo a aumentar a libertação de testosterona para reparar os tecidos e reforçar as fibras musculares. Não se trata apenas de "puxar ferro", mas de aplicar a física básica para gerar uma resposta endócrina:
        </Paragraph>

        <div className="my-8 bg-slate-900 border border-slate-800 p-6 flex items-center justify-center rounded-lg">
            <span className="font-jetbrains text-2xl md:text-4xl text-brand-red font-bold">
                F = m · a
            </span>
        </div>
        <Paragraph>
            Onde a força (<span className="font-jetbrains text-brand-red">F</span>) aplicada sobre a massa (<span className="font-jetbrains text-brand-red">m</span>) gera a aceleração (<span className="font-jetbrains text-brand-red">a</span>) necessária para romper a homeostase e forçar a evolução hormonal.
        </Paragraph>

        <SubTitle>O Efeito Sistêmico do Treino de Pernas</SubTitle>
        <Paragraph>
          A maior parte dos homens ignora o treino de pernas, sem perceber que está a deixar 70% do seu potencial hormonal na mesa. Os membros inferiores abrigam os maiores grupos musculares do corpo humano: os quadríceps, os isquiotibiais e os glúteos. Quando você executa um agachamento pesado ou um deadlift (levantamento terra), a quantidade de tecido muscular recrutada é tão vasta que o impacto hormonal é sistémico, afetando o corpo inteiro.
        </Paragraph>
        <Paragraph>
          O estímulo das pernas provoca uma resposta aguda na libertação de GH (Hormona do Crescimento). Esta hormona é essencial não apenas para a hipertrofia, mas para a lipólise (queima de gordura) e para a manutenção da saúde celular. Ao treinar pernas com intensidade brutal, você cria uma "maré hormonal" que beneficia inclusive o desenvolvimento dos músculos superiores. É impossível construir um físico de titã com pernas de vidro; a base da sua pirâmide hormonal está no solo.
        </Paragraph>

        <BiohackBox title="A ENGENHARIA DA CARGA E O ARSENAL TÁTICO" type="synergy">
            <p className="mb-4">Para sustentar este nível de agressividade no treino, a precisão na suplementação é inegociável. O uso estratégico do seu arsenal tático garante que a máquina não quebre sob a pressão:</p>
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <span className="text-brand-red font-bold">01.</span>
                    <div>
                        <strong className="text-white block font-oswald uppercase">Creatina Monohidratada</strong>
                        <span className="text-slate-400">Garante o combustível primário de ATP (Adenosina Trifosfato) necessário para as contrações musculares explosivas e para suportar o SNC sob estresse extremo.</span>
                    </div>
                </li>
                <li className="flex gap-3">
                    <span className="text-brand-red font-bold">02.</span>
                    <div>
                        <strong className="text-white block font-oswald uppercase">Citrulina Malato</strong>
                        <span className="text-slate-400">Ao ser tomada 30 minutos antes do treino, garante que as hormonas cheguem aos músculos recrutados com pressão máxima.</span>
                    </div>
                </li>
                <li className="flex gap-3">
                    <span className="text-brand-red font-bold">03.</span>
                    <div>
                        <strong className="text-white block font-oswald uppercase">Sinergia Hormonal</strong>
                        <span className="text-slate-400">O esforço físico intenso consome minerais rapidamente; por isso, a reposição da Tríade Mineral (Zinco, Magnésio e Boro) é o que permite que o seu pico de testosterona pós-treino seja sustentado e não resulte apenas num "voo de galinha" hormonal.</span>
                    </div>
                </li>
            </ul>
        </BiohackBox>
        
        <Paragraph>
            No Protocolo H-Natural, o treino é curto, pesado e infrequente o suficiente para permitir a recuperação, mas intenso o bastante para sinalizar que a mediocridade não é mais aceite.
        </Paragraph>

        <PageFooter pageNumber="15" />
      </Section>

      <Section id="mod-3-cap-13">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)</h3>
        <ChapterTitle>13. O EFEITO SISTÊMICO DAS PERNAS</ChapterTitle>
        <SubTitle>A Alquimia Hormonal do Movimento Composto</SubTitle>
        <Paragraph>
          Este capítulo é o motor de arranque da sua reconstrução física no Protocolo H-Natural. Para o homem que busca a supremacia biológica, o treino de pernas não é um dia de "acessórios", mas sim o momento de maior resposta endócrina (a reação coordenada das glândulas que produzem e libertam hormonas no sangue) de toda a semana. Ao focar nos maiores grupos musculares do seu organismo, você não está apenas a construir coxas densas, mas sim a inundar o seu sistema com GH (hormona do crescimento) e testosterona.
        </Paragraph>
        <Paragraph>
          A ciência da performance masculina é clara: exercícios que envolvem múltiplas articulações e grandes massas musculares geram picos hormonais que exercícios isolados jamais conseguiriam replicar. O treino de pernas é o rei absoluto nesta categoria. Quando você se posiciona sob uma barra pesada para um agachamento, o seu corpo entra num estado de homeostase (o equilíbrio interno constante que o organismo tenta manter) rompida. Para sobreviver a esse estresse mecânico brutal, o cérebro ordena uma descarga massiva de sinais anabólicos para reparar o tecido e fortalecer o sistema.
        </Paragraph>
        
        <BiohackBox title="O SEGREDO SISTÊMICO" type="info">
          <p>
            Este efeito não fica restrito aos membros inferiores. A testosterona e o GH libertados após uma sessão intensa de pernas circulam por todo o corpo, auxiliando na hipertrofia (o aumento do volume das células musculares por meio da síntese de proteínas) dos braços, peito e ombros. É por isso que dizemos que o segredo para um tronco potente começa com pernas de titã.
          </p>
        </BiohackBox>

        <SubTitle>O Arsenal dos Exercícios de Elite</SubTitle>
        <Paragraph>
          Para extrair o máximo de potência deste protocolo, devemos focar nos movimentos que exigem o maior recrutamento de unidades motoras (a ativação coordenada das fibras musculares pelo sistema nervoso central).
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">O Agachamento Livre</h4>
                <p className="font-inter text-sm text-slate-300">
                    O pilar inegociável. Ele exige que quase todos os músculos do corpo trabalhem em sinergia para estabilizar a carga. A profundidade do movimento é crucial: quanto maior a amplitude, maior o alongamento das fibras e mais potentes as microlesões que disparam a produção hormonal.
                </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">O Levantamento Terra</h4>
                <p className="font-inter text-sm text-slate-300">
                    O segundo comandante desta batalha. Ele recruta toda a cadeia posterior e gera um impacto sistémico que sinaliza ao corpo que ele deve tornar-se mais denso e forte. Este exercício é um dos maiores gatilhos para a testosterona livre.
                </p>
            </div>
        </div>

        <SubTitle>A Engenharia das Repetições e da Intensidade</SubTitle>
        <Paragraph>
          Para maximizar a libertação de hormonas, a carga deve ser desafiadora o suficiente para exigir esforço máximo, mas o volume deve ser controlado para não gerar um estado de overtraining (um desequilíbrio onde o desgaste físico supera a capacidade de recuperação do corpo).
        </Paragraph>
        <Paragraph>
          A faixa de <span className="font-jetbrains text-brand-red">6 a 10 repetições</span> é o "ponto ideal" para a otimização hormonal. Menos do que isso foca primariamente na força neurológica bruta; mais do que isso foca na resistência metabólica. Ao trabalhar com cargas que levam à falha técnica entre a 6ª e a 10ª repetição, você cria o ambiente de tensão mecânica perfeito para forçar o corpo a entrar em anabolismo.
        </Paragraph>

        <BiohackBox title="TRAUMA E CRESCIMENTO" type="warning">
          <p>
            Lembre-se: o treino de pernas é um evento traumático para o sistema. Para garantir que este trauma se transforme em crescimento, o seu Arsenal Tático deve estar em dia. A <span className="text-brand-red font-bold">Creatina</span> garantirá a reposição de energia celular, enquanto a <span className="text-brand-red font-bold">Citrulina Malato</span> garantirá que o fluxo sanguíneo transporte todos os hormônios libertados para os recetores androgénicos com pressão máxima.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="16" />
      </Section>

      <Section id="mod-3-cap-14">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)</h3>
        <ChapterTitle>14. CARDIO ESTRATÉGICO</ChapterTitle>
        <Paragraph>
          Para o homem que vive sob o Protocolo H-Natural, o medo do catabolismo (a degradação de tecido muscular para conversão em energia) é uma preocupação constante. No entanto, ignorar completamente o condicionamento cardiovascular é um erro técnico grave que limita o seu teto de performance biológica e hormonal.
        </Paragraph>
        <Paragraph>
          Como seu editor, Miguel F. de Oliveira, estruturei este capítulo para mostrar que o "Cardio Estratégico" não serve apenas para queimar calorias, mas para otimizar a infraestrutura que transporta a sua testosterona.
        </Paragraph>

        <SubTitle>A Engenharia Vascular da Supremacia Hormonal</SubTitle>
        <Paragraph>
          O condicionamento cardiovascular não deve ser visto como um inimigo da massa muscular, mas como um catalisador para a saúde do seu endotélio (a camada fina de células que reveste o interior dos vasos sanguíneos e controla a dilatação). Um sistema cardiovascular eficiente aumenta a sua angiogénese (a formação de novos vasos sanguíneos a partir de vasos pré-existentes), o que expande a rede de distribuição de nutrientes e hormonas para os tecidos periféricos.
        </Paragraph>
        
        <BiohackBox title="O FLUXO DA POTÊNCIA" type="info">
          <p>
            Sem um coração forte, a sua <span className="text-brand-red font-bold">testosterona livre</span> (a fração do hormônio que não está ligada a proteínas e que realmente exerce o efeito de força) não consegue chegar aos recetores androgénicos com a pressão necessária para gerar mudanças epigenéticas.
          </p>
        </BiohackBox>

        <Paragraph>
          A chave para manter a testosterona alta enquanto se realiza cardio reside na gestão do cortisol (o hormônio do estresse que atua como um antagonista da testosterona; quando o cortisol sobe demais, a testosterona cai). O objetivo aqui é evitar o "treino de resistência crônico", que sinaliza ao corpo a necessidade de ser leve e eficiente (queimando músculo), e focar em estímulos que suportem a biogénese mitocondrial (a criação de novas "usinas" de energia dentro das células).
        </Paragraph>

        <SubTitle>LISS vs. HIIT: A Dualidade de Alta Performance</SubTitle>
        <Paragraph>
          No Protocolo H-Natural, utilizamos duas ferramentas específicas para condicionamento, dependendo da fase de recuperação do sistema nervoso central:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">LISS (Low-Intensity Steady State)</h4>
                <p className="font-inter text-sm text-slate-300 mb-4">
                    O "Cardio de Baixa Intensidade". Deve ser realizado numa zona de frequência cardíaca onde você ainda consiga manter uma conversa. Utiliza primariamente a oxidação lipídica e promove recuperação ativa.
                </p>
                <div className="bg-black/50 p-3 rounded border border-slate-700 font-jetbrains text-xs text-brand-red text-center">
                    FCM = (220 - idade) × 0.65
                </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg">
                <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">HIIT (High-Intensity Interval Training)</h4>
                <p className="font-inter text-sm text-slate-300">
                    Picos de esforço máximo seguidos de descanso curto. Um gatilho potente para a libertação de GH e catecolaminas. Preserva as fibras musculares de contração rápida (Tipo II) enquanto melhora o VO2 Máx.
                </p>
            </div>
        </div>

        <SubTitle>Sinergia com o Arsenal Tático</SubTitle>
        <Paragraph>
          Ao realizar estas sessões, a utilização da <span className="text-brand-red font-bold">Citrulina Malato</span> potencializa a produção de Óxido Nítrico, permitindo que o sistema cardiovascular opere com menor resistência periférica e maior eficiência na entrega de oxigénio.
        </Paragraph>
        <Paragraph>
          Além disso, a manutenção de um sistema cardiovascular saudável reduz o tempo de remoção do lactato e de outros subprodutos do metabolismo anaeróbico, permitindo que você volte à sala de musculação mais rápido e com maior densidade de treino.
        </Paragraph>

        <PageFooter pageNumber="17" />
      </Section>

      <Section id="mod-3-cap-15" className="bg-gradient-to-b from-black to-[#050A1F]">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)</h3>
        <ChapterTitle>15. ENGENHARIA DO SONO</ChapterTitle>
        <SubTitle>A Fábrica Noturna de Testosterona e GH</SubTitle>
        <Paragraph>
          Este capítulo é, sem dúvida, o mais crítico para a funcionalidade biológica de todo o Protocolo H-Natural. Se o treino é o sinalizador e a nutrição é a matéria-prima, o sono é a linha de montagem onde a mágica realmente acontece. Como seu editor, Miguel F. de Oliveira, estruturei este conteúdo para convencer o leitor de que negligenciar o repouso é o caminho mais curto para a falência hormonal e o acúmulo de gordura visceral.
        </Paragraph>
        <Paragraph>
          Muitos homens acreditam que o crescimento muscular e a queima de gordura ocorrem na academia. Estão profundamente enganados. O exercício é um evento catabólico — um processo de desgaste e destruição controlada de tecidos. A verdadeira transformação ocorre durante a Arquitetura do Sono (a organização cíclica das diferentes fases do repouso), especificamente durante os estágios de sono profundo e sono REM. É neste período que o corpo realiza a Homeostase Endócrina (o reequilíbrio dos níveis hormonais do organismo), reparando danos e consolidando os ganhos do dia.
        </Paragraph>
        <Paragraph>
          O sono não é um estado de passividade, mas sim o momento de maior atividade anabólica do seu dia. É durante as fases profundas do sono que ocorre o pico de libertação da <span className="font-jetbrains text-brand-red">Somatotropina</span> (mais conhecida como GH ou Hormona do Crescimento). Cerca de 80% de todo o GH libertado pelo seu corpo nas 24 horas ocorre durante o primeiro terço da noite, em sincronia com o sono profundo. Se você interrompe este ciclo ou possui um sono fragmentado, você está literalmente sabotando a sua capacidade de se reconstruir.
        </Paragraph>

        <SubTitle>A Conexão Crítica entre o Sono e a Testosterona</SubTitle>
        <Paragraph>
          A produção de testosterona segue um <span className="font-jetbrains text-brand-red">Ritmo Circadiano</span> (o relógio biológico interno de 24 horas que regula os processos biológicos de acordo com a luz e a escuridão). Os níveis mais altos de testosterona livre são atingidos durante o sono e permanecem elevados nas primeiras horas da manhã. Estudos indicam que apenas uma semana de privação de sono (dormir apenas 5 horas por noite) pode reduzir os níveis de testosterona em até 15%, um impacto equivalente ao envelhecimento biológico de 10 a 15 anos.
        </Paragraph>
        <Paragraph>
          O grande vilão aqui é o Cortisol (o hormônio do estresse que age como um sinalizador de alerta no corpo). Quando você dorme mal, o seu corpo entra num estado de emergência biológica, disparando os níveis de cortisol logo ao acordar. Como o cortisol e a testosterona competem pela mesma via de produção, o excesso de estresse mata a sua virilidade antes mesmo de você sair da cama.
        </Paragraph>

        <div className="my-8 border-2 border-[#FF0000] bg-black/50 p-6 rounded-lg break-inside-avoid shadow-[0_0_15px_rgba(255,0,0,0.1)]">
            <h4 className="font-oswald text-[#FF0000] text-xl uppercase mb-3">FASE N3: SONO PROFUNDO</h4>
            <p className="font-inter text-slate-300">
                É nesta fase que a pressão arterial cai e a maior parte do sangue é direcionada para os músculos para reparação tecidual. É o momento crítico onde a recuperação física acontece de verdade. Sem atingir o N3, não há crescimento.
            </p>
        </div>

        <hr className="border-t border-red-600 my-8 opacity-50" />

        <SubTitle>Otimização da Fase REM e a Tríade Mineral</SubTitle>
        <Paragraph>
          O sono REM (sigla para Rapid Eye Movement, a fase em que ocorrem os sonhos e a consolidação da memória) é o momento em que o cérebro realiza uma limpeza neuroquímica e regula a sensibilidade dos receptores hormonais. Para garantir que esta fase seja atingida com a profundidade necessária, o seu Arsenal Tático é indispensável.
        </Paragraph>
        <Paragraph>
          A combinação de Zinco e Magnésio antes de dormir não é uma recomendação aleatória; é uma estratégia de engenharia química. O magnésio atua no sistema nervoso promovendo o relaxamento muscular e a redução da latência do sono (o tempo que você demora a adormecer), permitindo que você entre mais rapidamente no sono profundo (Estágio N3). Quando o zinco é adicionado a esta equação, ele protege os testículos durante a noite contra o estresse oxidativo, garantindo que a fábrica de testosterona opere sem interrupções.
        </Paragraph>

        <PageFooter pageNumber="18" />
      </Section>

      <Section id="mod-3-cap-16">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO III: A MÁQUINA (TREINO E ESTILO DE VIDA)</h3>
        <ChapterTitle>16. DOPAMINA E SOL</ChapterTitle>
        <SubTitle>A Engenharia do Foco e a Sincronia Hormonal</SubTitle>
        <Paragraph>
          O homem moderno vive em um estado de "crepúsculo biológico". Passamos o dia sob luzes artificiais fracas e a noite sob o brilho intenso de telas de LED, o que destrói a nossa <span className="font-jetbrains text-brand-red">Homeostase Circadiana</span> (o equilíbrio interno regulado pelo ciclo de 24 horas). No Protocolo H-Natural, a luz solar não é um detalhe estético, mas o sinalizador mestre que diz ao seu cérebro para parar de produzir melatonina e iniciar a cascata de Cortisol e Testosterona necessária para a conquista.
        </Paragraph>
        <Paragraph>
          A exposição solar matinal — especificamente o espectro de luz infravermelha e azul do início do dia — atinge os recetores na sua retina e sinaliza ao <span className="font-jetbrains text-brand-red">Núcleo Supraquiasmático</span> (o relógio central do cérebro) que o dia começou. Este sinal é o que dispara a Resposta de Despertar do Cortisol, que, quando calibrada pelo sol, atua em sinergia com a testosterona matinal para criar um estado de alerta agressivo e focado. Sem esse estímulo, você permanece em uma névoa mental, arrastando-se através de cafeína para compensar a falta de sinalização biológica natural.
        </Paragraph>

        <SubTitle>Dopamina: O Combustível da Conquista</SubTitle>
        <Paragraph>
          A dopamina é frequentemente confundida com a substância do prazer, mas na realidade, ela é a molécula da antecipação e da busca. É o neurotransmissor que impulsiona o homem a caçar, construir e competir. Contudo, o ambiente digital moderno frita os seus recetores dopaminérgicos através de estímulos rápidos e baratos, deixando-o sem "drive" (motivação interna) para os objetivos de longo prazo que realmente importam.
        </Paragraph>
        <Paragraph>
          O Protocolo H-Natural exige uma gestão rigorosa do seu sistema de recompensa. Ao alinhar a sua biologia com a luz natural, você protege a sua síntese de dopamina. A exposição à luz solar aumenta a densidade dos recetores de dopamina no cérebro, tornando-o mais sensível aos prazeres reais e mais motivado para enfrentar o treino pesado de pernas ou os desafios da sua carreira. É a diferença entre o homem que reage ao mundo e o homem que o molda.
        </Paragraph>

        <SubTitle>Sinergia com a Vitamina D3 e o Arsenal Tático</SubTitle>
        <Paragraph>
          A luz solar é também a via primária para a produção de <span className="font-jetbrains text-brand-red">Colecalciferol (Vitamina D3)</span>. No seu arsenal, a suplementação de 5.000 UI de Vitamina D3 + K2 serve para garantir que, mesmo em dias nublados ou de trabalho intenso, os seus níveis deste pré-hormônio permaneçam na zona de elite. A Vitamina D3 regula mais de 200 genes e é o alicerce para que o seu corpo consiga converter o colesterol em testosterona livre.
        </Paragraph>

        <BiohackBox title="SOL: O SINALIZADOR MESTRE" type="synergy">
          <p>
            Ao combinar o Timing matinal da Vitamina D3 com a exposição solar real, você cria uma redundância biológica que blinda o seu sistema contra o declínio hormonal. O resultado é uma mente que não conhece a hesitação e um corpo que opera em constante estado de prontidão.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="19" />
      </Section>

      {/* MÓDULO IV */}
      <Section id="mod-4-cap-17">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO IV: O ACELERADOR</h3>
        <ChapterTitle>17. O QUE REALMENTE FUNCIONA</ChapterTitle>
        
        <SubTitle>A Ciência das Doses Clínicas e a Bioquímica da Performance</SubTitle>
        <Paragraph>
          Nesta etapa do Protocolo H-Natural, entramos no topo da pirâmide nutricional. Enquanto a dieta sólida fornece a fundação, a suplementação tática atua como o ajuste fino de alta precisão, utilizando compostos isolados em doses clínicas (quantidades comprovadas por estudos científicos para gerar efeitos biológicos reais). Não utilizamos fórmulas genéricas ou subdosadas; utilizamos o arsenal exato para forçar o organismo a um estado de anabolismo (o processo metabólico de construção e reparação de tecidos) e eficiência hormonal.
        </Paragraph>

        <SubTitle>Creatina Monohidratada: O Combustível de ATP</SubTitle>
        <Paragraph>
          A Creatina Monohidratada é, sem dúvida, o suplemento mais estudado e eficaz para a força bruta. Sua função primária é saturar os estoques de fosfocreatina nas células musculares, servindo como o combustível essencial para a ressíntese de <span className="font-jetbrains text-brand-red">ATP</span> (adenosina trifosfato — a unidade básica de energia utilizada em contrações musculares explosivas). No protocolo de Miguel Oliveira, a dose padrão é de <strong>5g/dia</strong>.
        </Paragraph>
        <Paragraph>
          Além do ganho de força, a creatina promove a hidratação celular (o aumento do conteúdo de água dentro da célula muscular), o que sinaliza ao núcleo da célula para aumentar a síntese de proteínas. Mais importante para o foco do protocolo, ela suporta a função cognitiva sob estados de estresse intenso, garantindo que o seu sistema nervoso não sofra um colapso durante treinos pesados. O timing ideal é no pós-treino ou logo ao acordar, garantindo a saturação constante dos tecidos.
        </Paragraph>

        <SubTitle>Citrulina Malato: O Precursor do Óxido Nítrico</SubTitle>
        <Paragraph>
          Para o "Poder Vermelho", utilizamos a Citrulina Malato em doses de <strong>6g a 8g</strong>. Ela é um precursor superior de <span className="font-jetbrains text-brand-red">Óxido Nítrico</span> (um gás sinalizador que relaxa as paredes das artérias, permitindo maior fluxo de sangue). Ao contrário da arginina comum, a citrulina sobrevive à passagem pelo fígado, aumentando a entrega de nutrientes e oxigênio diretamente aos músculos sob tensão.
        </Paragraph>
        <Paragraph>
          Este composto é vital para o "pump" muscular e para a redução da fadiga, pois auxilia na remoção de subprodutos metabólicos como o amoníaco. Deve ser consumida 30 minutos antes do treino para garantir que, no momento do agachamento pesado, o seu <span className="font-jetbrains text-brand-red">Endotélio</span> (a camada interna dos vasos sanguíneos) esteja operando com dilatação máxima.
        </Paragraph>

        <SubTitle>Vitamina D3 + K2: O Hormônio Esteroide Seco</SubTitle>
        <Paragraph>
          No Protocolo H-Natural, não tratamos a Vitamina D3 como uma simples vitamina, mas como um potente <span className="font-jetbrains text-brand-red">Hormônio Esteroide Seco</span> (uma substância que atua diretamente no DNA celular para regular funções hormonais). Ela é responsável pela regulação de mais de 200 genes e é fundamental para a sinalização da produção de testosterona nos testículos.
        </Paragraph>
        <Paragraph>
          A dose de <strong>5.000 UI</strong> deve ser sempre acompanhada de Vitamina K2, que garante que o cálcio seja direcionado para os ossos e não para as artérias, prevenindo a calcificação vascular. O timing tático é pela manhã, acompanhada de uma fonte de gordura (como o tutano ou ovos), já que se trata de uma vitamina <span className="font-jetbrains text-brand-red">Lipossolúvel</span> (que só é absorvida na presença de gordura).
        </Paragraph>

        <SubTitle>Zinco Picolinato: O Guardião da Testosterona</SubTitle>
        <Paragraph>
          O Zinco Picolinato é a peça final do arsenal, na dose de <strong>30mg</strong>. Ele atua como um inibidor natural da aromatase (a enzima responsável por converter a sua testosterona em estrogênio). Além de crucial para a saúde imunológica, o zinco é determinante para a qualidade e motilidade do esperma, protegendo a sua fertilidade e vigor.
        </Paragraph>
        <Paragraph>
          A sinergia tática ocorre ao consumir o zinco antes de dormir. Quando combinado com o magnésio, ele otimiza o sono REM (fase do sono de movimentos oculares rápidos, essencial para a recuperação mental), momento em que ocorre cerca de 80% da liberação do seu GH (hormônio do crescimento).
        </Paragraph>

        <PageFooter pageNumber="20" />
      </Section>

      <Section id="mod-4-cap-18">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO IV: O ACELERADOR</h3>
        <ChapterTitle>18. FITOTERÁPICOS E ADAPTÓGENOS</ChapterTitle>
        
        <SubTitle>A Sabedoria Ancestral aliada à Farmacologia Natural</SubTitle>
        <Paragraph>
          Após consolidarmos os pilares da nutrição e dos minerais, avançamos para a camada mais sofisticada do Acelerador: os fitoterápicos e adaptógenos. Adaptógenos são substâncias naturais únicas que aumentam a <span className="font-jetbrains text-brand-red">Homeostase</span> (a capacidade do organismo de manter o equilíbrio interno e a estabilidade biológica diante de variações externas) diante de estressores físicos e químicos. No Protocolo H-Natural, não utilizamos ervas apenas por tradição, mas pela sua capacidade comprovada de modular o <span className="font-jetbrains text-brand-red">Eixo HPA</span> (o complexo sistema de comunicação entre o hipotálamo, a glândula pituitária e as glândulas adrenais, responsável por gerir a resposta do corpo ao estresse).
        </Paragraph>

        <SubTitle>Ashwagandha (Withania somnifera): O Exterminador de Cortisol</SubTitle>
        <Paragraph>
          A Ashwagandha é a rainha dos adaptógenos. Sua função primordial no organismo masculino é a regulação do <span className="font-jetbrains text-brand-red">Cortisol</span> (o hormônio do estresse que atua como o principal antagonista e sabotador da testosterona). Quando você vive sob estresse crônico, seu corpo entra em um estado de "luta ou fuga" permanente, o que desvia a energia e a matéria-prima hormonal da produção de virilidade para a sobrevivência imediata.
        </Paragraph>
        <Paragraph>
          Ao utilizar extratos de alta concentração, como o KSM-66, você sinaliza ao seu sistema nervoso para reduzir a hiperatividade das glândulas adrenais. Isso resulta em um aumento direto na <span className="font-jetbrains text-brand-red">Testosterona Livre</span> (a fração do hormônio que não está presa a proteínas transportadoras e que realmente exerce funções de força e desejo), pois menos cortisol significa menos inibição nas <span className="font-jetbrains text-brand-red">Células de Leydig</span> (as unidades funcionais nos testículos responsáveis pela síntese de testosterona). Além disso, a Ashwagandha melhora a qualidade do sono profundo, potencializando a liberação noturna de GH (Hormônio do Crescimento).
        </Paragraph>

        <SubTitle>Maca Peruana Marrom: O Combustível do Desejo Sexual</SubTitle>
        <Paragraph>
          Enquanto a Ashwagandha cuida da infraestrutura de estresse, a Maca Peruana atua diretamente na <span className="font-jetbrains text-brand-red">Libido</span> (o desejo sexual e o vigor psíquico) e na performance reprodutiva. No protocolo de Miguel Oliveira, focamos especificamente na Maca Peruana Marrom, uma variedade mais rara e potente, com maior densidade de nutrientes voltados para a fisiologia masculina.
        </Paragraph>
        
        <BiohackBox title="MACA MARROM: POTÊNCIA E FERTILIDADE" type="warning">
          <p className="mb-2">
            A Maca não altera a testosterona de forma direta e agressiva, mas ela otimiza a sensibilidade dos <span className="font-jetbrains text-brand-red">Recetores Androgênicos</span> (as "fechaduras" moleculares nas células onde os hormônios masculinos se encaixam para exercer sua função).
          </p>
          <p>
            O resultado é um aumento notável no "drive" competitivo e no apetite sexual. Além disso, ela é um suporte crítico para a <span className="font-jetbrains text-brand-red">Espermatogênese</span> (o processo biológico de produção e maturação de espermatozoides saudáveis), melhorando o volume e a vitalidade.
          </p>
        </BiohackBox>

        <SubTitle>Sinergia com o Arsenal Tático</SubTitle>
        <Paragraph>
          A integração destes adaptógenos com o seu Arsenal Tático cria uma blindagem de 360 graus para a sua biologia:
        </Paragraph>

        <List items={[
          <><strong>Recuperação de Elite:</strong> A Ashwagandha reduz a inflamação sistêmica, permitindo que o Zinco e o Magnésio trabalhem com eficiência máxima na reparação celular durante o sono.</>,
          <><strong>Potencialização da Performance:</strong> A energia adaptogênica da Maca Peruana complementa a vasodilatação da Citrulina Malato, garantindo que você tenha não apenas o fluxo sanguíneo necessário para o treino de pernas, mas a vontade psicológica de dominar as cargas pesadas.</>
        ]} />

        <Paragraph>
          A utilização estratégica de <strong>3g de Maca Peruana Marrom</strong> é o detalhe técnico que separa um corpo comum de uma máquina biológica operando em alta voltagem.
        </Paragraph>

        <PageFooter pageNumber="21" />
      </Section>

      <Section id="mod-4-cap-19">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO IV: O ACELERADOR</h3>
        <ChapterTitle>19. INTELIGÊNCIA DE CONSUMO: O QUE O SEU CORPO NÃO PRECISA</ChapterTitle>
        
        <SubTitle>Desmascarando a Indústria do "Marketing Biológico"</SubTitle>
        <Paragraph>
          Neste ponto do Protocolo H-Natural, você já compreende que a sua biologia responde a estímulos precisos e não a rótulos coloridos. A indústria de suplementação movimenta bilhões de dólares anualmente vendendo a ilusão de que a performance pode ser comprada em cápsulas de cores neon. No entanto, para o homem que busca a Supremacia Hormonal, a inteligência de consumo é uma ferramenta de defesa. Saber o que não comprar é tão importante quanto saber o que suplementar, pois evita que você sobrecarregue o seu sistema com substâncias inúteis e proteja a sua <span className="font-jetbrains text-brand-red">Homeostase</span> (o estado de equilíbrio interno necessário para que as suas funções vitais ocorram sem interferência externa).
        </Paragraph>

        <SubTitle>A Farsa dos BCAAs e dos Aminoácidos Isolados</SubTitle>
        <Paragraph>
          Um dos maiores erros cometidos por iniciantes é o investimento em BCAAs (aminoácidos de cadeia ramificada: leucina, isoleucina e valina). Embora estes aminoácidos sejam essenciais para a <span className="font-jetbrains text-brand-red">Síntese Proteica</span> (o processo pelo qual o corpo utiliza proteínas para reparar e construir tecido muscular), eles são abundantes em qualquer fonte de proteína animal de alta qualidade que você já consome, como ovos, carne bovina e, principalmente, no Fígado de Boi.
        </Paragraph>
        <Paragraph>
          Ao suplementar BCAAs isoladamente, você está fornecendo ao corpo apenas três dos nove aminoácidos essenciais necessários para a construção de tecido. É como tentar construir uma parede tendo apenas tijolos, mas sem o cimento (os outros aminoácidos). Se a sua ingestão de proteínas sólidas está alinhada ao protocolo, o BCAA torna-se uma "urina cara", sem qualquer benefício adicional para a sua testosterona ou massa muscular.
        </Paragraph>

        <SubTitle>O Perigo dos "Blends" de Pré-Treino</SubTitle>
        <Paragraph>
          A indústria adora criar "fórmulas proprietárias" ou "blends" que prometem energia explosiva. Na realidade, estas misturas costumam ser saturadas de cafeína barata e substâncias estimulantes que causam uma <span className="font-jetbrains text-brand-red">Vasoconstrição</span> (o estreitamento dos vasos sanguíneos, que é exatamente o oposto do que buscamos com o Poder Vermelho).
        </Paragraph>
        <Paragraph>
          Muitos destes produtos contêm subdosagens de ingredientes que realmente funcionam, escondendo as quantidades reais atrás de nomes complicados. No Protocolo H-Natural, substituímos essa complexidade desnecessária pela Citrulina Malato isolada em dose clínica. Ao usar o ingrediente puro, você garante a Biodisponibilidade (a velocidade e extensão com que uma substância é absorvida e chega ao local de ação no corpo) sem estressar o seu sistema nervoso central com químicos desnecessários.
        </Paragraph>

        <BiohackBox title="O CHECKLIST DO CONSUMIDOR CONSCIENTE" type="alert">
          <ul className="list-disc pl-5 space-y-2 font-inter text-gray-300">
            <li>Este suplemento tem dose clínica comprovada?</li>
            <li>Eu já estou obtendo isso através da comida de verdade?</li>
            <li>O rótulo esconde as quantidades atrás de um 'Blend'?</li>
          </ul>
        </BiohackBox>

        <SubTitle>Testo-Boosters de Prateleira vs. Alimentos Ancestrais</SubTitle>
        <Paragraph>
          Você encontrará centenas de suplementos que prometem "dobrar a sua testosterona em 30 dias". A maioria utiliza ervas de baixa qualidade que podem até aumentar a sua <span className="font-jetbrains text-brand-red">Libido</span> (o desejo sexual), mas que não possuem efeito real na <span className="font-jetbrains text-brand-red">Esteroidogênese</span> (o processo bioquímico de criação de hormônios a partir do colesterol).
        </Paragraph>
        <Paragraph>
          Investir 300 reais em um "Testo-Booster" sintético é um erro biológico quando você pode obter um impacto muito superior através do Tutano de Boi e das Gemas de Ovos. Estes alimentos fornecem o colesterol e as gorduras saturadas que são os verdadeiros precursores hormonais, algo que nenhuma cápsula de marketing consegue replicar. A inteligência aqui é focar no que é Denso em Nutrientes (alimentos que possuem uma alta concentração de vitaminas e minerais em relação ao seu volume calórico) e não no que é caro e processado.
        </Paragraph>

        <PageFooter pageNumber="22" />
      </Section>

      {/* MÓDULO V */}
      <Section id="mod-5-cap-20">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO V: O PLANO DE AÇÃO</h3>
        <ChapterTitle>20. O ALGORITMO DE 21 DIAS</ChapterTitle>
        
        <SubTitle>A Programação da sua Nova Realidade Biológica</SubTitle>
        <Paragraph>
          Chegamos à fase de execução. Você já possui o conhecimento sobre a <span className="font-jetbrains text-brand-red">Esteroidogênese</span> (o processo de fabricação de hormônios no corpo), já limpou sua despensa de <span className="font-jetbrains text-brand-red">Xenoestrógenos</span> (compostos químicos que mimetizam o estrogênio) e já entende a mecânica do treino pesado. Agora, vamos consolidar tudo isso em um <span className="font-jetbrains text-brand-red">Algoritmo</span> (uma sequência lógica e finita de instruções para resolver um problema ou executar uma tarefa).
        </Paragraph>
        <Paragraph>
          Por que 21 dias? Porque este é o tempo necessário para que o seu sistema nervoso realize a <span className="font-jetbrains text-brand-red">Neuroplasticidade</span> (a capacidade do cérebro de criar novas conexões neurais e adaptar-se a novos hábitos) e para que o seu <span className="font-jetbrains text-brand-red">Ritmo Circadiano</span> (o relógio biológico de 24 horas) se alinhe com a sua nova produção hormonal. Este não é um teste; é um protocolo de comando para o seu DNA.
        </Paragraph>

        <div className="my-8 border-2 border-brand-red/20 p-2 bg-black/50 break-inside-avoid">
           <img 
             src="/images/ciclo-circadiano.png" 
             alt="Gráfico do Ciclo Circadiano: Cortisol vs Melatonina" 
             className="w-full h-auto object-contain"
           />
           <p className="text-center text-xs text-gray-500 mt-2 font-jetbrains">Figura: O Ciclo Sleep/Wake ideal</p>
        </div>

        <SubTitle>O CICLO DIÁRIO: PASSO A PASSO TÁTICO</SubTitle>
        <Paragraph>
          Para que o Protocolo H-Natural funcione, a consistência deve ser absoluta. Abaixo, detalho a sua rotina ideal, desenhada para maximizar os picos naturais de testosterona e garantir que a sua <span className="font-jetbrains text-brand-red">Homeostase</span> (o equilíbrio interno do corpo) seja inabalável.
        </Paragraph>

        <div className="space-y-8 mt-6">
          {/* FASE 01 */}
          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">FASE 01: O DESPERTAR DO TITÃ (06:00 – 08:00)</h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Hidratação Hiperosmótica:</strong> Logo ao acordar, beba 500ml de água mineral com uma pitada de sal integral para repor eletrólitos e sinalizar ao metabolismo que o dia começou.
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Exposição Fotobiológica:</strong> Vá para o sol. 10 a 15 minutos de luz natural nos olhos (sem óculos escuros) para disparar a Resposta de Despertar do Cortisol, que regula o foco e prepara a produção de testosterona matinal.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">Suplementação de Base:</strong> Tome sua Vitamina D3 + K2 (5.000 UI). Como ela é lipossolúvel (precisa de gordura para ser absorvida), acompanhe com o café da manhã anabólico (ovos inteiros e, se possível, uma porção de Tutano de Boi).
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          {/* FASE 02 */}
          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">FASE 02: PERFORMANCE E FLUXO (08:00 – 13:00)</h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Foco Inabalável:</strong> Este é o momento de maior <span className="font-jetbrains text-brand-red">Dopamina</span> (o neurotransmissor do drive e da conquista). Utilize esta janela para as tarefas mais difíceis da sua carreira.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">Nutrição de Elite (Almoço):</strong> Proteína animal densa (carne vermelha ou fígado) acompanhada de vegetais crucíferos. Evite carboidratos pesados que causem <span className="font-jetbrains text-brand-red">Letargia Postprandial</span> (o cansaço excessivo após comer devido ao desvio de sangue para a digestão).
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          {/* FASE 03 */}
          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">FASE 03: A IGNIÇÃO MECÂNICA (16:00 – 19:00)</h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Janela Pré-Treino:</strong> 30 minutos antes da sessão, tome 6g-8g de Citrulina Malato para maximizar o Poder Vermelho (vasodilatação).
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">O Treino:</strong> Foque no levantamento de peso pesado, priorizando o agachamento e o levantamento terra para gerar o efeito sistêmico de GH e Testosterona.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">Pós-Treino Imediato:</strong> 5g de Creatina Monohidratada para repor os estoques de <span className="font-jetbrains text-brand-red">ATP</span> (energia celular) e sinalizar a síntese proteica.
            </p>
          </div>

          <hr className="border-gray-800 border-dashed" />

          {/* FASE 04 */}
          <div className="border-l-4 border-brand-red pl-4 break-inside-avoid">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">FASE 04: A ENGENHARIA DA RECUPERAÇÃO (20:00 – 22:30)</h4>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">Bloqueio de Luz Azul:</strong> Coloque óculos bloqueadores ou evite telas de LED. Isso protege a sua produção natural de <span className="font-jetbrains text-brand-red">Melatonina</span> (o hormônio que inicia o reparo celular noturno).
            </p>
            <p className="font-inter text-gray-300 mb-2">
              <strong className="text-white">A Tríade Mineral:</strong> Tome 30mg de Zinco Picolinato e o seu suplemento de Magnésio. Isso atuará como inibidor da <span className="font-jetbrains text-brand-red">Aromatase</span> (evitando que sua testosterona vire estrogênio) e preparará o seu cérebro para o sono profundo.
            </p>
            <p className="font-inter text-gray-300">
              <strong className="text-white">O Apagão:</strong> Deite-se em um quarto totalmente escuro e frio para garantir a entrada na Fase REM e no sono profundo, onde 80% do seu GH é liberado.
            </p>
          </div>
        </div>

        <SubTitle>A JORNADA DOS 21 DIAS: O QUE ESPERAR</SubTitle>
        <List items={[
          <><strong>Dias 01 a 07 (O Choque):</strong> Seu corpo sentirá a falta dos açúcares e do conforto. Você pode sentir fadiga leve enquanto o seu fígado realiza a <span className="font-jetbrains text-brand-red">Biotransformação</span> (limpeza de toxinas). Mantenha a disciplina.</>,
          <><strong>Dias 08 a 14 (A Estabilização):</strong> A névoa mental desaparece. A libido e a energia matinal começam a retornar. O sono torna-se muito mais reparador devido à Tríade Mineral.</>,
          <><strong>Dias 15 a 21 (A Supremacia):</strong> O corpo está otimizado. A densidade muscular aumenta e o "drive" competitivo torna-se o seu novo normal. Seus receptores androgênicos estão agora operando com sensibilidade máxima.</>
        ]} />

        <BiohackBox title="MISSÃO FINAL" type="warning">
          <p className="text-center font-bold mb-2">NÃO DEIXE ESTE CONHECIMENTO DIGITALMENTE ARQUIVADO.</p>
          <p className="text-center">
            Imprima esta página (ou copie o algoritmo manualmente) e cole na porta da sua geladeira ou no espelho do banheiro. 
            Transforme este ebook em uma ferramenta física de mudança.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="23" />
      </Section>

      <Section id="mod-5-cap-21">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">MÓDULO V: O PLANO DE AÇÃO</h3>
        <ChapterTitle>21. MANUTENÇÃO E CONSTÂNCIA</ChapterTitle>
        
        <SubTitle>A Transição do Protocolo para o Estilo de Vida Permanente</SubTitle>
        <Paragraph>
          Os 21 dias do algoritmo foram o seu período de <span className="font-jetbrains text-brand-red">Indução Hormonal</span> (o processo inicial de forçar o corpo a mudar o seu estado químico através de estímulos externos). Contudo, a verdadeira Supremacia Biológica não é conquistada num tiro de curto prazo, mas sim através da <span className="font-jetbrains text-brand-red">Homeostase Evolutiva</span> (a capacidade do organismo de manter um novo e elevado nível de equilíbrio interno de forma duradoura).
        </Paragraph>
        <Paragraph>
          O erro da maioria dos homens é tratar a saúde como um projeto com data de validade. Quando o esforço termina, o corpo tende a retornar ao seu antigo estado de <span className="font-jetbrains text-brand-red">Alostase</span> (o processo de alcançar a estabilidade através da mudança fisiológica, muitas vezes adaptando-se a um estado de baixa energia e alta inflamação para sobreviver ao ambiente moderno). Para evitar o efeito sanfona hormonal, precisamos de uma estratégia de manutenção que seja resiliente e, acima de tudo, sustentável.
        </Paragraph>

        <SubTitle>A Regra da Resiliência Metabólica (80/20)</SubTitle>
        <Paragraph>
          Para que o Protocolo H-Natural se torne a sua nova identidade, você deve desenvolver <span className="font-jetbrains text-brand-red">Resiliência Metabólica</span> (a flexibilidade do seu metabolismo em lidar com diferentes fontes de combustível e estressores sem entrar em colapso). No mundo real, você terá jantares de negócios, viagens e momentos de lazer onde a dieta perfeita não será possível.
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 break-inside-avoid">
          <div className="border border-brand-red/30 p-4 bg-brand-red/5">
            <h4 className="font-oswald text-brand-red text-lg uppercase mb-2">80% de Precisão</h4>
            <p className="font-inter text-gray-300 text-sm">
              Durante a maior parte do tempo, você mantém os pilares inegociáveis: a Tríade Mineral antes de dormir, o consumo de Gorduras Estruturais (como o tutano e a gema de ovo) e a exposição solar matinal.
            </p>
          </div>
          <div className="border border-brand-red/30 p-4 bg-brand-red/5">
            <h4 className="font-oswald text-brand-red text-lg uppercase mb-2">20% de Flexibilidade</h4>
            <p className="font-inter text-gray-300 text-sm">
              Permita-se desvios controlados sem culpa. O estresse psicológico causado pela busca da perfeição absoluta eleva o <span className="font-jetbrains text-brand-red">Cortisol</span> de tal forma que o prejuízo hormonal pode ser maior do que o causado por uma refeição fora do plano.
            </p>
          </div>
        </div>

        <SubTitle>Lidando com os "Dias de Erro": O Protocolo de Mitigação</SubTitle>
        <Paragraph>
          Se você teve um dia de excessos — seja por consumo de açúcares, álcool ou privação de sono — o seu foco no dia seguinte não deve ser a punição, mas a <span className="font-jetbrains text-brand-red">Biotransformação</span> (o conjunto de reações químicas que o corpo realiza para neutralizar e eliminar substâncias estranhas).
        </Paragraph>

        <div className="border-l-4 border-brand-red pl-6 py-2 my-6 bg-gradient-to-r from-brand-red/10 to-transparent break-inside-avoid">
          <h4 className="font-oswald text-white text-lg uppercase mb-4 flex items-center gap-2">
            <span className="text-brand-red text-2xl">⚠</span> PROTOCOLO DE RESGATE
          </h4>
          <ul className="space-y-4 font-inter text-gray-300">
            <li>
              <strong className="text-white block mb-1">Jejum de Reparação:</strong>
              Após um dia de erro, realize um jejum de 16 a 18 horas. Isso estimula a <span className="font-jetbrains text-brand-red">Autofagia</span> (o processo de "limpeza celular" onde o corpo recicla componentes danificados para gerar energia) e ajuda a restaurar a sensibilidade à insulina.
            </li>
            <li>
              <strong className="text-white block mb-1">Super-Hidratação:</strong>
              Dobre o consumo de água com sal integral para auxiliar os seus <span className="font-jetbrains text-brand-red">Hepatócitos</span> (células do fígado responsáveis pelo detox) e os seus rins na filtragem dos resíduos metabólicos.
            </li>
            <li>
              <strong className="text-white block mb-1">Estímulo Mecânico Leve:</strong>
              Não falte ao treino, mas reduza a carga. O objetivo é apenas bombear sangue e utilizar o <span className="font-jetbrains text-brand-red">Glicogénio</span> (a forma como o corpo armazena açúcar nos músculos e fígado) acumulado em excesso no dia anterior.
            </li>
          </ul>
        </div>

        <SubTitle>A Psicologia da Constância e a Dopamina</SubTitle>
        <Paragraph>
          A manutenção do protocolo exige uma reconfiguração da sua <span className="font-jetbrains text-brand-red">Linha de Base Dopaminérgica</span> (o nível padrão de dopamina que o seu cérebro mantém). Quando você se acostuma com estímulos naturais de alta qualidade — como a sensação de poder após um treino pesado de pernas ou a clareza mental após um sono profundo — o seu cérebro passa a preferir estas recompensas reais às recompensas baratas e artificiais.
        </Paragraph>
        <Paragraph>
          A disciplina não é sobre "força de vontade", mas sobre a criação de um sistema onde o caminho certo é o mais recompensador. Ao manter o Protocolo H-Natural como a sua base, você garante que o seu <span className="font-jetbrains text-brand-red">Eixo Hipotálamo-Hipófise-Testicular</span> (o sistema de comando que regula a sua masculinidade) permaneça em estado de prontidão, independentemente da sua idade ou das circunstâncias externas.
        </Paragraph>

        <PageFooter pageNumber="24" />
      </Section>

      <Section id="conclusion">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">CONCLUSÃO</h3>
        <h1 className="font-oswald text-4xl text-brand-red uppercase mb-8 border-l-4 border-brand-red pl-4">
          O DESPERTAR DO NOVO HOMEM
        </h1>
        
        <SubTitle>A Transição da Informação para a Maestria Biológica</SubTitle>
        <Paragraph>
          Você chegou ao fim deste mapa, mas este é apenas o marco zero da sua nova existência. A maioria dos homens que iniciou a leitura destas páginas desistiu no meio do caminho, perdidos na zona de conforto da mediocridade hormonal. Se você está lendo estas palavras, você já se diferenciou. Você possui agora a <span className="font-jetbrains text-brand-red">Soberania Biológica</span> (o estado de controle total sobre os processos químicos e hormonais do seu próprio corpo), algo que 99% da população masculina moderna sequer sabe que existe.
        </Paragraph>
        <Paragraph>
          Ao longo desta jornada no Protocolo H-Natural, desconstruímos mentiras seculares e instalamos uma nova infraestrutura de poder. Você aprendeu que a sua virilidade não é um acidente genético, mas o resultado direto de como você gerencia o seu <span className="font-jetbrains text-brand-red">Eixo Hipotálamo-Hipófise-Testicular</span> (o sistema de comando central que regula a produção de testosterona). Você parou de ser uma vítima do ambiente e passou a ser o arquiteto da sua própria <span className="font-jetbrains text-brand-red">Epigenética</span> (a capacidade de alterar a expressão dos seus genes através do estilo de vida, sem mudar a sua sequência de DNA).
        </Paragraph>

        <SubTitle>O Fim da Castração Química Invisível</SubTitle>
        <Paragraph>
          O mundo moderno foi desenhado para torná-lo fraco, letárgico e dependente. Desde os Disruptores Endócrinos (químicos que interferem nas suas glândulas) no seu shampoo até a luz azul que frita a sua <span className="font-jetbrains text-brand-red">Dopamina</span> (o neurotransmissor da motivação e busca), tudo foi projetado para reduzir o seu "drive" competitivo.
        </Paragraph>
        <Paragraph>
          Ao aplicar o Algoritmo de 21 Dias, você rompeu essa programação. Você limpou o seu <span className="font-jetbrains text-brand-red">Endotélio</span> (a camada interna dos vasos sanguíneos), otimizou a sua <span className="font-jetbrains text-brand-red">Esteroidogênese</span> (a fábrica de hormônios a partir do colesterol) e reconectou o seu corpo com os ritmos ancestrais de sol, esforço e descanso profundo. O homem que você vê no espelho hoje possui uma química interna radicalmente diferente daquele que começou este livro.
        </Paragraph>

        <SubTitle>O Próximo Nível: A Jornada Continua</SubTitle>
        <Paragraph>
          Este ebook é o alicerce, mas a construção da sua supremacia é uma obra perpétua. O conhecimento sem execução é apenas entretenimento. A partir de agora, o seu compromisso não é comigo, mas com o seu potencial biológico. Mantenha a Tríade Mineral em dia, nunca negligencie o Efeito Sistêmico das Pernas e proteja o seu sono como se a sua vida dependesse disso — porque, no fundo, a qualidade da sua vida depende.
        </Paragraph>
        <Paragraph>
          Você não é mais um escravo dos seus impulsos ou da desinformação da indústria. Você é um Titã H-Natural. O despertar aconteceu. Agora, vá lá fora e domine.
        </Paragraph>

        <div className="mt-16 mb-8 break-inside-avoid">
          <p className="font-oswald text-slate-400 text-sm uppercase mb-4 text-center">COMPROMISSO DE HONRA</p>
          <div className="border-b-2 border-slate-600 w-3/4 mx-auto mb-2"></div>
          <p className="text-center font-handwriting text-slate-500 italic text-lg">Assinatura do Titã</p>
        </div>

        <div className="flex justify-center mt-12 mb-8 break-inside-avoid">
            <div className="border border-brand-red p-4 rounded-sm inline-block">
                <p className="text-brand-red font-oswald text-xs tracking-[0.2em] text-center">PROTOCOL VERIFIED</p>
                <p className="text-white font-bold text-lg text-center font-jetbrains">2026</p>
            </div>
        </div>

        <PageFooter pageNumber="25" />
      </Section>

    </main>
  );
}
