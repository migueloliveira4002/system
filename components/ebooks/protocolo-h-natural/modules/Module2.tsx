import {
  Section,
  ChapterTitle,
  PageFooter,
  Paragraph,
  SubTitle,
  List,
  BiohackBox,
  ComparisonBox,
  SimpleTable,
} from '../components/ContentBlocks'

export function Module2() {
  return (
    <div className="space-y-16">
      <Section id="mod-2-cap-8">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)
        </h3>
        <ChapterTitle className="text-[#FF0000]">
          08. O MITO DA GORDURA E DO COLESTEROL
        </ChapterTitle>

        <SubTitle>A Mentira que Castrou uma Geração</SubTitle>
        <Paragraph>
          Por mais de 50 anos, você foi bombardeado com a ideia de que a gordura
          saturada (aquela encontrada em carnes e ovos) entope suas artérias e
          que o colesterol é um vilão a ser combatido com medicamentos. Essa
          narrativa não apenas falhou em reduzir as doenças cardíacas, como
          criou uma epidemia de homens com baixa libido, depressão e falta de
          força muscular.
        </Paragraph>
        <Paragraph>
          A ciência básica da endocrinologia é clara: a testosterona é um
          hormônio esteroide (uma substância química produzida a partir do
          colesterol). Sem colesterol e gorduras saturadas de alta qualidade,
          suas células de Leydig simplesmente não têm o &quot;tijolo&quot;
          necessário para construir a molécula de testosterona. Ao adotar uma
          dieta baixa em gordura, você está, tecnicamente, desligando sua
          própria produção hormonal.
        </Paragraph>

        <ComparisonBox
          items={[
            {
              myth: 'Comer gordura saturada causa doenças no coração.',
              reality:
                'A gordura saturada é a molécula mais estável do corpo humano. O verdadeiro culpado pelas doenças cardíacas é a inflamação sistêmica causada pelo excesso de açúcar e óleos vegetais processados, que oxidam as partículas de colesterol no seu sangue.',
            },
            {
              myth: 'O colesterol dos alimentos aumenta drasticamente o colesterol no sangue.',
              reality:
                'Cerca de 80% do colesterol no seu sangue é produzido pelo seu próprio fígado, independentemente do que você come. Se você come menos, seu corpo produz mais. O colesterol é vital para a sobrevivência e para o cérebro.',
            },
            {
              myth: 'Dietas Low-Fat (baixa gordura) são melhores para a performance.',
              reality:
                'Dietas baixas em gordura reduzem drasticamente a biodisponibilidade de vitaminas lipossolúveis como A, D, E e K. Sem essas vitaminas, sua sinalização hormonal entra em colapso e seu "drive" competitivo desaparece.',
            },
            {
              myth: 'As gorduras vegetais (soja, milho, canola) são "amigas do coração".',
              reality:
                'Esses óleos são extremamente instáveis e ricos em ômega-6, que promove a inflamação e pode reduzir a sensibilidade dos seus receptores de testosterona. A gordura animal é o combustível original do ser humano.',
            },
          ]}
        />

        <SubTitle>
          A ENGANHARIA DA{' '}
          <span className="font-jetbrains text-brand-red">ESTEROIDOGÊNESE</span>
        </SubTitle>
        <Paragraph>
          A{' '}
          <span className="font-jetbrains text-brand-red">ESTEROIDOGÊNESE</span>{' '}
          (o processo biológico de criação de hormônios esteroides) começa com o
          transporte de colesterol para dentro das mitocôndrias das suas células.
          Para otimizar esse processo, o Protocolo H-Natural exige a inclusão de
          alimentos densos e ancestrais que foram esquecidos pela nutrição
          moderna:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 break-inside-avoid">
          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              O Poder do Tutano
            </h4>
            <p className="font-inter text-slate-300 text-sm">
              O Tutano de Boi é um reservatório de gorduras saudáveis e glicina
              (um aminoácido essencial para a saúde intestinal e reparo de
              tecidos). Ele fornece a densidade calórica e hormonal necessária
              para manter o sistema em alta voltagem.
            </p>
          </div>

          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              Fígado de Boi
            </h4>
            <p className="font-inter text-slate-300 text-sm">
              O Multivitamínico da Natureza: O fígado é a fonte mais rica de
              retinol (Vitamina A pré-formada), que é um co-fator crítico para a
              produção de testosterona nos testículos. Sem Vitamina A, sua
              produção hormonal fica estagnada.
            </p>
          </div>

          <div className="border border-slate-800 bg-black/50 p-6 rounded-lg">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-2">
              Gemas de Ovos
            </h4>
            <p className="font-inter text-slate-300 text-sm">
              A gema é o local onde reside todo o colesterol e a colina
              (nutriente vital para a função cerebral e metabólica). Jogar a
              gema fora é, literalmente, jogar sua testosterona no lixo.
            </p>
          </div>
        </div>

        <BiohackBox title="NOTA TÉCNICA: HEPATÓCITOS" type="warning">
          <p>
            Seus{' '}
            <span className="font-jetbrains text-brand-red">HEPATÓCITOS</span>{' '}
            (células do fígado) precisam de matéria-prima de qualidade. Gorduras
            oxidadas de óleos vegetais danificam essas células, enquanto
            gorduras saturadas estáveis as protegem e fornecem energia limpa.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="11" />
      </Section>

      <Section id="mod-2-cap-9">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)
        </h3>
        <ChapterTitle>09. A TRÍADE MINERAL (ZN, MG, B)</ChapterTitle>

        <SubTitle>Os Maestros da Orquestra Hormonal</SubTitle>
        <Paragraph>
          Se as gorduras saturadas são o combustível, os minerais são os
          catalisadores — substâncias que aceleram as reações químicas sem
          serem consumidas por elas. No contexto da esteroidogénese (a criação
          de hormonas), a carência de um único mineral pode criar um
          &quot;gargalo&quot; biológico que reduz a sua produção de testosterona
          a uma fração do que ela deveria ser.
        </Paragraph>
        <Paragraph>
          O homem moderno é cronicamente deficiente nestes três elementos devido
          ao empobrecimento do solo e ao consumo excessivo de alimentos
          processados, que &quot;sequestram&quot; os minerais antes que o corpo
          os consiga utilizar.
        </Paragraph>

        <ComparisonBox
          items={[
            {
              myth: 'Posso obter todos os minerais de que preciso apenas através de uma alimentação equilibrada.',
              reality:
                'Devido à agricultura intensiva, os solos atuais possuem até 80% menos minerais do que há 50 anos. Mesmo uma dieta "limpa" pode deixar lacunas críticas que apenas a suplementação estratégica ou alimentos extremamente densos conseguem preencher.',
            },
            {
              myth: 'Zinco é bom apenas para a imunidade.',
              reality:
                'O Zinco é fundamental para a função das células de Leydig (que produzem testosterona). Além disso, ele atua como um inibidor natural da aromatase (a enzima que transforma a sua preciosa testosterona em estrogénio).',
            },
            {
              myth: 'Tomar Magnésio antes de treinar dá mais energia.',
              reality:
                'O Magnésio é um relaxante neuromuscular. O seu melhor uso é no período pré-sono para otimizar a recuperação e baixar o cortisol. Tomá-lo antes do treino pode, inclusive, reduzir a sua explosão muscular momentânea.',
            },
            {
              myth: 'O Boro é um mineral sem importância para humanos.',
              reality:
                'Estudos mostram que a suplementação com Boro pode aumentar a testosterona livre (a fração da hormona que não está ligada a proteínas e que realmente exerce o efeito de força e libido) em até 25% numa única semana.',
            },
          ]}
        />

        <SubTitle>OS TRÊS PILARES DA TRÍADE</SubTitle>

        <div className="space-y-6 my-6">
          <div className="border-l-4 border-zinc-500 pl-4">
            <h4 className="font-oswald text-zinc-400 text-lg uppercase font-bold mb-2">
              1. ZINCO (O CONSTRUTOR)
            </h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              O Zinco é o mineral da masculinidade. Ele é necessário para a
              espermatogénese e para manter a integridade dos recetores
              androgénicos. A deficiência de Zinco envia um sinal de &quot;fome
              hormonal&quot; ao cérebro, desligando o eixo de produção.
            </p>
          </div>

          <div className="border-l-4 border-slate-400 pl-4">
            <h4 className="font-oswald text-slate-400 text-lg uppercase font-bold mb-2">
              2. MAGNÉSIO (O RECUPERADOR)
            </h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Participante em mais de 300 reações enzimáticas, o Magnésio é
              vital para a produção de{' '}
              <span className="font-jetbrains text-brand-red">ATP</span>. No
              Protocolo H-Natural, ele garante que o sistema nervoso entre em
              repouso profundo, momento do pico de GH.
            </p>
          </div>

          <div className="border-l-4 border-amber-600 pl-4">
            <h4 className="font-oswald text-amber-600 text-lg uppercase font-bold mb-2">
              3. BORO (O LIBERTADOR)
            </h4>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              O Boro atua diminuindo os níveis de SHBG, permitindo que mais
              testosterona circule de forma livre e ativa no seu sangue, pronta
              para construir músculo e queimar gordura.
            </p>
          </div>
        </div>

        <BiohackBox
          title="CONCEITO CHAVE: SHBG E TESTOSTERONA LIVRE"
          type="warning"
        >
          <p>
            A <span className="font-jetbrains text-brand-red">SHBG</span>{' '}
            (Globulina Ligadora de Hormônios Sexuais) é como um &quot;freio de
            mão&quot; para sua testosterona. Ela se liga à molécula e a impede
            de agir nos tecidos.
          </p>
          <p className="mt-2">
            O objetivo do <strong>BORO</strong> é soltar esse freio, aumentando
            a <span className="font-jetbrains text-brand-red">
              TESTOSTERONA LIVRE
            </span>{' '}
            disponível para uso biológico imediato.
          </p>
        </BiohackBox>

        <SubTitle>FONTES ALIMENTARES DE ELITE</SubTitle>
        <SimpleTable
          headers={['Mineral', 'Fonte Principal', 'Benefício Chave']}
          rows={[
            [
              'ZINCO',
              'Ostras, Carne Vermelha',
              'Produção de Testosterona e Inibição da Aromatase',
            ],
            [
              'MAGNÉSIO',
              'Espinafre, Sementes de Abóbora',
              'Relaxamento Muscular e Síntese de ATP',
            ],
            [
              'BORO',
              'Passas, Ameixas Secas, Abacate',
              'Redução de SHBG e Aumento de Testosterona Livre',
            ],
          ]}
        />

        <SubTitle>ENGENHARIA DE CONSUMO: O TIMING TÁTICO</SubTitle>
        <List
          items={[
            <>
              <strong>Zinco e Magnésio:</strong> Devem ser consumidos
              preferencialmente à noite, longe de laticínios, pois o cálcio pode
              competir pela absorção.
            </>,
            <>
              <strong>Boro:</strong> Pode ser ciclado (ex: 2 semanas de uso por
              1 de descanso) para manter a sensibilidade dos recetores elevada.
            </>,
          ]}
        />

        <PageFooter pageNumber="12" />
      </Section>

      <Section id="mod-2-cap-10">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)
        </h3>
        <ChapterTitle className="text-[#FF0000]">
          10. O PODER VERMELHO (VASODILATAÇÃO NATURAL)
        </ChapterTitle>

        <SubTitle>O Sistema de Entrega da Virilidade</SubTitle>
        <Paragraph>
          O sangue é o veículo que transporta a sua testosterona, o oxigénio e
          os nutrientes até aos tecidos alvo (músculos e órgãos genitais). Se o
          seu <span className="font-jetbrains text-brand-red">ENDOTÉLIO</span>{' '}
          (a camada fina de células que reveste o interior dos vasos sanguíneos)
          não estiver a funcionar corretamente, o seu corpo não consegue
          produzir{' '}
          <span className="font-jetbrains text-brand-red">ÓXIDO NÍTRICO</span>{' '}
          (um gás sinalizador crucial que diz aos vasos sanguíneos para
          relaxarem e dilatarem).
        </Paragraph>
        <Paragraph>
          Sem Óxido Nítrico, a performance desmorona. Na academia, você não
          sente o &quot;pump&quot; (o inchaço muscular causado pelo fluxo
          sanguíneo). No quarto, a qualidade das ereções diminui. O &quot;Poder
          Vermelho&quot; é sobre restaurar a saúde das suas artérias para que a
          sua potência seja sentida em cada centímetro do seu corpo.
        </Paragraph>

        <ComparisonBox
          items={[
            {
              myth: 'Vasodilatadores servem apenas para deixar as veias aparentes na academia.',
              reality:
                'A vasodilatação é um marcador de saúde cardiovascular. Vasos sanguíneos saudáveis reduzem a pressão arterial e garantem que a testosterona livre chegue aos recetores androgénicos de forma eficiente.',
            },
            {
              myth: 'A Arginina é o melhor suplemento para aumentar o Óxido Nítrico.',
              reality:
                'A Arginina é amplamente degradada no fígado. A Citrulina Malato é vastamente superior, pois é um precursor que o corpo converte em Arginina de forma muito mais eficaz, mantendo os níveis de Óxido Nítrico elevados por mais tempo.',
            },
            {
              myth: 'Disfunção erétil é apenas um problema psicológico ou de falta de testosterona.',
              reality:
                'Na maioria das vezes, é um problema de disfunção endotelial. O pênis é um órgão puramente vascular; o que é bom para o seu coração e para os seus músculos, é obrigatoriamente bom para a sua saúde sexual.',
            },
          ]}
        />

        <SubTitle>A ENGENHARIA DO FLUXO SANGUÍNEO</SubTitle>
        <Paragraph>
          Para ativar o &quot;Poder Vermelho&quot;, o Protocolo H-Natural foca
          em compostos que maximizam a biodisponibilidade de nitratos e
          aminoácidos específicos:
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 break-inside-avoid">
          <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-900/30 p-6 rounded-lg">
            <h4 className="font-oswald text-white text-xl uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Citrulina Malato
            </h4>
            <span className="text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider">
              (O ARSENAL TÁTICO)
            </span>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Como definido no seu arsenal, a dose de 6g-8g tomada 30 minutos
              antes do treino é o padrão ouro. Ela melhora a entrega de
              nutrientes e reduz a fadiga ao acelerar a remoção de subprodutos
              metabólicos como o amoníaco.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/20 p-6 rounded-lg">
            <h4 className="font-oswald text-white text-xl uppercase mb-3">
              O Poder das Betalainas
            </h4>
            <span className="text-xs font-jetbrains text-red-400 block mb-3 uppercase tracking-wider">
              (BETERRABA)
            </span>
            <p className="font-inter text-slate-300 text-sm leading-relaxed">
              Alimentos vermelhos, especialmente a beterraba, são ricos em
              nitratos inorgânicos. Estes nitratos são convertidos em Óxido
              Nítrico através de uma via independente da suplementação, criando
              uma sinergia poderosa quando combinados com a Citrulina.
            </p>
          </div>
        </div>

        <BiohackBox title="HASTE CAPILAR E MICROCIRCULAÇÃO" type="info">
          <p>
            A saúde capilar e o crescimento de pelos faciais
            (cavanhaque/barba) dependem desta microcirculação. O uso de óleos
            vegetais atua externamente, mas o fluxo sanguíneo interno é o que
            realmente nutre o folículo piloso.
          </p>
        </BiohackBox>

        <PageFooter pageNumber="13" />
      </Section>

      <Section id="mod-2-cap-11">
        <h3 className="font-oswald text-slate-500 text-sm uppercase tracking-widest mb-2">
          MÓDULO II: COMBUSTÍVEL DE ELITE (NUTRIÇÃO)
        </h3>
        <ChapterTitle>11. ALIMENTOS PROIBIDOS VS. OBRIGATÓRIOS</ChapterTitle>
        <SubTitle>A Engenharia da sua Despensa: O Guia Definitivo</SubTitle>
        <Paragraph>
          Neste capítulo, vamos separar o que constrói a sua virilidade
          (características biológicas masculinas) do que promove a sua decadência
          hormonal. Cada item no seu prato desencadeia uma cascata de sinais
          químicos. Nosso objetivo é silenciar os sinais de estresse e
          amplificar os sinais de poder.
        </Paragraph>

        <SubTitle>I. A LISTA DE BIOHAZARD (RISCO BIOLÓGICO)</SubTitle>
        <Paragraph>
          Estes itens promovem a Lipoperoxidação (um processo químico onde as
          gorduras ruins &quot;apodrecem&quot; dentro das suas células, causando
          danos ao DNA e às membranas celulares).
        </Paragraph>

        <div className="space-y-6 my-6">
          <BiohackBox title="LIPOPEROXIDAÇÃO (ÓLEOS DE SEMENTES)" type="warning">
            <p>
              <strong className="text-white">O Inimigo:</strong> Óleos de soja,
              canola, girassol e milho.
            </p>
            <p className="mt-2 text-slate-300">
              Ricos em ácido linoleico, estes óleos acumulam-se no tecido
              adiposo e inibem a função das mitocôndrias. A{' '}
              <span className="font-jetbrains text-brand-red">
                LIPOPEROXIDAÇÃO
              </span>{' '}
              é o processo onde estas gorduras &quot;apodrecem&quot; dentro das
              células.
            </p>
          </BiohackBox>

          <BiohackBox title="GLICAÇÃO (AÇÚCARES E XAROPES)" type="warning">
            <p>
              <strong className="text-white">O Processo:</strong> O consumo
              constante gera a{' '}
              <span className="font-jetbrains text-brand-red">GLICAÇÃO</span>.
            </p>
            <p className="mt-2 text-slate-300">
              O açúcar &quot;cola-se&quot; às proteínas do sangue (como a
              hemoglobina), criando moléculas rígidas e inúteis (AGEs). Isso
              entope os microvasos e destrói a vasodilatação natural.
            </p>
          </BiohackBox>

          <BiohackBox title="DISRUPTORES ENDÓCRINOS (SOJA)" type="warning">
            <p>
              <strong className="text-white">O Bloqueio:</strong> Soja e
              derivados não-fermentados contêm fitoestrógenos.
            </p>
            <p className="mt-2 text-slate-300">
              Eles competem com a testosterona pelos receptores androgênicos (as
              &quot;fechaduras&quot; das células), bloqueando a ação do hormônio
              masculino.
            </p>
          </BiohackBox>

          <BiohackBox title="EXCITOTOXINAS (TEMPEROS PRONTOS)" type="warning">
            <p>
              <strong className="text-white">O Dano Neural:</strong> Quase todos
              contêm Glutamato Monossódico.
            </p>
            <p className="mt-2 text-slate-300">
              Uma{' '}
              <span className="font-jetbrains text-brand-red">
                EXCITOTOXINA
              </span>{' '}
              que estimula as células cerebrais até a exaustão. Prejudica
              diretamente o eixo Hipotálamo-Hipófise-Testicular.
            </p>
          </BiohackBox>
        </div>

        <SubTitle>II. A SELEÇÃO DE ELITE (OBRIGATÓRIOS)</SubTitle>
        <Paragraph>
          Aqui residem os alimentos com maior Densidade Nutricional (quantidade
          de micronutrientes por caloria).
        </Paragraph>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 break-inside-avoid">
          <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">
              1. Gorduras Estruturais
            </h4>
            <ul className="space-y-3 font-inter text-sm text-slate-300">
              <li>
                <strong className="text-white block mb-1">
                  Tutano de Boi:
                </strong>{' '}
                Rico em células-tronco e Glicina (anti-inflamatório).
              </li>
              <li>
                <strong className="text-white block mb-1">
                  Manteiga Ghee:
                </strong>{' '}
                Pura gordura saturada, base para a Esteroidogênese.
              </li>
              <li>
                <strong className="text-white block mb-1">
                  Óleo de Coco:
                </strong>{' '}
                Fonte de TCMs para energia imediata.
              </li>
            </ul>
          </div>

          <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">
              2. Órgãos (Topo da Pirâmide)
            </h4>
            <ul className="space-y-3 font-inter text-sm text-slate-300">
              <li>
                <strong className="text-white block mb-1">
                  Fígado de Boi (1-2x/sem):
                </strong>{' '}
                Fonte suprema de Retinol (Vit. A) para sinalização de
                testosterona.
              </li>
              <li>
                <strong className="text-white block mb-1">Coração de Boi:</strong>{' '}
                Maior fonte natural de Coenzima Q10 (energia mitocondrial).
              </li>
            </ul>
          </div>

          <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">
              3. Sementes Táticas
            </h4>
            <ul className="space-y-3 font-inter text-sm text-slate-300">
              <li>
                <strong className="text-white block mb-1">Abóbora:</strong> Zinco
                e Magnésio (inibição da Aromatase).
              </li>
              <li>
                <strong className="text-white block mb-1">
                  Castanha do Pará (2un/dia):
                </strong>{' '}
                Selênio para tireoide e proteção testicular.
              </li>
              <li>
                <strong className="text-white block mb-1">Gergelim:</strong>{' '}
                Cálcio e Boro (regulação da SHBG).
              </li>
            </ul>
          </div>

          <div className="border border-slate-800 p-5 rounded-lg bg-slate-900/30">
            <h4 className="font-oswald text-brand-red text-xl uppercase mb-3 border-b border-slate-800 pb-2">
              4. Carboidratos de Baixa Toxicidade
            </h4>
            <ul className="space-y-3 font-inter text-sm text-slate-300">
              <li>
                <strong className="text-white block mb-1">
                  Frutas (Baixo IG):
                </strong>{' '}
                Vermelhas e Cítricas (polifenóis para o Endotélio).
              </li>
              <li>
                <strong className="text-white block mb-1">Tubérculos:</strong>{' '}
                Mandioca, batata-doce, inhame (glicogênio limpo).
              </li>
            </ul>
          </div>
        </div>

        <SubTitle>III. O GUIA DE COMPRAS &quot;H-NATURAL&quot; (CHECKLIST)</SubTitle>
        <Paragraph>
          Use este guia ao entrar no supermercado para garantir a Blindagem
          Ambiental:
        </Paragraph>

        <List
          items={[
            'Açougue: Cortes gordos, fígado, tutano e ovos caipiras.',
            'Hortifruti: Crucíferos (brócolis, couve), abacate, beterraba (para o Poder Vermelho) e limão.',
            'Grãos/Sementes: Sementes de abóbora cruas, castanhas do Pará e gergelim.',
            "Bebidas: Água mineral em vidro (se possível), café orgânico e chás naturais.",
            "IGNORAR: Corredores de biscoitos, óleos vegetais, refrigerantes e produtos 'diet/light'.",
          ]}
        />

        <PageFooter pageNumber="14" />
      </Section>
    </div>
  )
}
