export const macroConcepts = [
  {
    id: 'investment_pool',
    title: 'O Fundo de Investimento (Investment Pool)',
    iconType: 'dollar',
    description: 'Dinheiro gerado pelos Lucros das construções. É usado para pagar novas construções civis gratuitamente.',
    extendedDetails: 'O Fundo de Investimento age como uma reserva automática de capital (Private Construction). Os donos das fábricas (Capitalistas) e terras (Aristocratas) depositam uma porcentagem fixa de seus dividendos aqui. O Estado pode utilizar este fundo para pagar os materiais e salários do setor de construção, o que significa que, em economias fortes, você pode expandir a sua indústria sem gastar um centavo do tesouro público.',
    lawsImpact: [
      'Laissez-Faire (Capitalismo Livre): +25% de contribuição de Capitalistas. O fundo constrói autonomamente a maioria das fábricas.',
      'Intervencionismo: Menos eficiência de contribuição, mas o Estado pode usar o fundo para subsidiar qualquer indústria e construir fazendas.',
      'Economia de Comando: Remove totalmente o fundo de investimento. Todo o lucro das fábricas vai direto para o tesouro do Governo (mas exige enorme capacidade burocrática).'
    ],
    proTip: 'No início do jogo, países agrários dependem de Aristocratas (Agrarianismo). Industrialize rapidamente com fábricas de Ferramentas/Roupas para criar uma base de Capitalistas, que são muito mais eficientes em reinvestir na economia.',
    colorTheme: 'text-amber-500',
    bgColorTheme: 'bg-amber-500/20'
  },
  {
    id: 'sol',
    title: 'Padrão de Vida (Standard of Living / SoL)',
    iconType: 'users',
    description: 'Calculado pela Renda Pós-Impostos vs Custo das Necessidades. Afeta diretamente lealdade e imigração.',
    extendedDetails: 'O Padrão de Vida (SoL) dita a estabilidade da sua nação. Cada grupo populacional (Pop) possui um "nível esperado" baseado em sua classe social e alfabetização. Se a renda deles cobrir o custo dos bens básicos (Grãos, Roupas, Móveis) e sobrar dinheiro para bens de luxo, o SoL sobe, criando Legalistas. Se houver escassez ou altos impostos, o SoL cai, criando Radicais que iniciarão rebeliões.',
    lawsImpact: [
      'Impostos Proporcionais / Graduados: Reduz o peso dos impostos sobre as classes baixas (aumentando o SoL deles) e taxa os dividendos dos ricos.',
      'Assistência Social (Poor Laws / Wage Subsidies): Garante uma renda mínima para os desempregados, evitando que o SoL caia para níveis de inanição.',
      'Fronteiras Abertas: Um SoL nacional alto em relação aos países vizinhos atrairá fluxos massivos de imigração, explodindo a sua população produtiva.'
    ],
    proTip: 'Não foque apenas em aumentar salários; reduzir o custo de vida é mais barato. Importe Grãos e Peixes em grande escala, ou construa muitas fazendas locais. Comida barata significa que sobra dinheiro para os Pops comprarem Roupas e Móveis, impulsionando a sua indústria manufatureira.',
    colorTheme: 'text-green-400',
    bgColorTheme: 'bg-green-500/20'
  },
  {
    id: 'taxation_capacity',
    title: 'Capacidade de Impostos e Desperdício',
    iconType: 'trendingUp',
    description: 'A habilidade de coletar dinheiro. Baixa capacidade gera Desperdício de Impostos (Tax Waste).',
    extendedDetails: 'A Capacidade de Impostos (Taxation Capacity) determina quão eficientemente os agentes do estado coletam impostos nas províncias. Em países densamente povoados (como China, Rússia, ou Japão), os estados rurais frequentemente sofrem de capacidade negativa. Isso gera "Desperdício de Impostos", o que significa que o dinheiro é retirado da população (diminuindo seu SoL) mas NÃO entra nos seus cofres.',
    lawsImpact: [
      'Imposto Territorial (Land-Based): Difícil de coletar de forma justa, altamente ineficiente e cria grande poder para os latifundiários.',
      'Imposto Per Capita: Melhor capacidade e rendimento para meio de jogo.',
      'Burocracia Apontada / Eleita: Oferecem +25% e +15% de capacidade de impostos base, essenciais para não perder dinheiro em impérios vastos.'
    ],
    proTip: 'Construa Administrações Governamentais nas províncias com déficit de impostos, mas atenção: o papel (Paper) e os salários que essas administrações consomem muitas vezes custam mais do que o imposto recuperado no early-game. Use novas tecnologias sociais e as leis corretas primeiro!',
    colorTheme: 'text-red-400',
    bgColorTheme: 'bg-red-500/20'
  },
  {
    id: 'world_market',
    title: 'Mercado Mundial e Centros de Comércio',
    iconType: 'map',
    description: 'Desde o patch 1.9, uma camada de preços global fica acima dos mercados nacionais. Centros de Comércio negociam com ela sozinhos.',
    extendedDetails: 'O Mercado Mundial conecta o seu mercado nacional ao resto do globo. Os Centros de Comércio (construídos pelo setor de construção e financiáveis via Fundo de Investimento) negociam automaticamente com esse mercado global, explorando diferenças de preço e Vantagem Comercial para lucrar — você não desenha rotas de comércio manualmente. Isso torna preços domésticos sensíveis a escassez ou excesso lá fora, e transforma tarifas em uma ferramenta real de política econômica: protegem indústria nascente ao custo de encarecer bens para os POPs, ou baixam insumos ao custo de expor produtores locais.',
    lawsImpact: [
      'Livre Mercado: sem tarifas, ativa a Vantagem Comercial — o bônus mais subutilizado do jogo pela maioria dos jogadores.',
      'Protecionismo: só compensa se a estratégia for arrecadar em cima de tarifa (ex.: países muito populosos).',
      'Tratados bilaterais e sujeitos (colônias/protetorados) normalmente entram no seu próprio mercado, ampliando o alcance dos seus Centros de Comércio.'
    ],
    proTip: 'Importar insumo barato para transformar internamente não é fraqueza, é o modelo que historicamente enriquece (é o que a Grã-Bretanha faz). A exceção real são bens militares (munição, artilharia, armas, combustível): depender de importação neles significa que quem te bloquear no mar decide se você luta.',
    colorTheme: 'text-blue-400',
    bgColorTheme: 'bg-blue-500/20'
  },
  {
    id: 'market_access',
    title: 'Acesso ao Mercado e Infraestrutura',
    iconType: 'settings',
    description: 'Ferrovias e portos definem quanto da produção de um estado realmente chega ao mercado nacional. É o vazamento mais silencioso do jogo.',
    extendedDetails: 'Cada estado tem oferta de Infraestrutura (ferrovias, portos) e consumo (todo prédio pesado consome). Quando o consumo ultrapassa a oferta, o Acesso ao Mercado daquele estado cai proporcionalmente: parte da produção simplesmente não chega ao mercado nacional, e parte dos insumos não chega aos prédios. Os números de produção parecem certos, mas o resultado não aparece — e o preço local de um insumo pode ficar bem acima da média nacional mesmo sem nenhuma fábrica local, só por causa da demanda de prédios vizinhos.',
    lawsImpact: [
      'Métodos de ferrovia mais avançados aumentam a produção de Transporte (consumido por outras indústrias), mas podem reduzir a infraestrutura entregue se você não construir níveis adicionais junto.',
      'Portos entregam menos infraestrutura, mas geram Comboios, que sustentam comércio marítimo e exércitos/frotas no exterior.',
      'Canais (Suez, Panamá) são projetos de década que reorganizam rotas comerciais inteiras.'
    ],
    proTip: 'Preço local alto tem duas causas distintas e correções diferentes: demanda local sem produção local (construa o insumo ali) ou acesso ao mercado abaixo de 100% (construa ferrovia — produzir mais no estado não resolve isso). Abra o modo de mapa de infraestrutura a cada década para checar qual é o seu caso.',
    colorTheme: 'text-teal-400',
    bgColorTheme: 'bg-teal-500/20'
  },
  {
    id: 'debt_leverage',
    title: 'Dívida, Juros e Alavancagem',
    iconType: 'coins',
    description: 'Dívida não é pecado, é alavancagem — mas só compensa dentro de um teto de crédito e quando financia capacidade produtiva.',
    extendedDetails: 'Um PIB crescendo 5% a 8% ao ano é factível na maior parte de uma partida. Se a taxa de juros do seu país estiver abaixo disso, ficar negativo pode compensar, porque o crescimento futuro paga a dívida sozinho. Mas a régua "juros baixos = pode dever" é incompleta em dois pontos: existe um teto de crédito (ultrapassá-lo gera bancarrota, que destrói prestígio, radicaliza o país e trava construção), e importa para onde vai o dinheiro — dívida financiando setor de obras e cadeia de insumos gera o crescimento que paga a conta; a mesma dívida financiando subsídio permanente ou exército de tempo de paz não gera crescimento nenhum.',
    lawsImpact: [
      'Tecnologias financeiras (Padrão Monetário/Serviços Bancários, Banco Central, Fundos Múltiplos): cada uma reduz os juros em cerca de 2%, e os efeitos se somam.',
      'Laissez-Faire: o maior corte isolado de juros (até -25%), mas é uma lei de fim de jogo.',
      'Prestígio alto reduz o custo do crédito internacional; um país respeitado toma dinheiro mais barato.'
    ],
    proTip: 'Fique negativo apenas quando as três condições se somam: juros baixos, dinheiro indo para capacidade produtiva, e você longe do teto de crédito. Falhar em qualquer uma delas transforma alavancagem em espiral de dívida.',
    colorTheme: 'text-purple-400',
    bgColorTheme: 'bg-purple-500/20'
  }
];

export const productionChains = [
  {
    output: 'Ferramentas',
    category: 'Intermediário Base',
    tier: 'bg-slate-700',
    inputs: ['Madeira', 'Ferro', 'Aço (Avançado)'],
    description: 'A espinha dorsal da industrialização.',
    pmEvolution: 'Começa produzindo ferramentas grosseiras de Madeira. A transição para Ferramentas de Ferro (Iron Tools) duplica a produção, mas exige expansão massiva de Minas de Ferro. No late-game, Ferramentas de Aço exigem Aço refinado.',
    primaryUses: 'Absolutamente tudo. Usado em minas de carvão, campos de trigo, plantações de algodão, portos e engrenagens industriais. Escassez de ferramentas quebra a economia inteira.',
    iconType: 'pickaxe'
  },
  {
    output: 'Aço',
    category: 'Indústria Pesada',
    tier: 'bg-slate-600',
    inputs: ['Ferro', 'Carvão'],
    description: 'Necessário para a transição do meio do jogo e construção civil de alto nível.',
    pmEvolution: 'Fornos Bessemer (Bessemer Process) e Fornos Martin-Siemens (Open-Hearth) aumentarão vertiginosamente o consumo de Carvão para produzir grandes quantidades de Aço. A Eletricidade permite fornos elétricos no século XX.',
    primaryUses: 'Motores, Artilharia, Navios a Vapor (Steamers), Construção de Estrutura de Aço (nível 3 de Setores de Construção) e Ferramentas avançadas.',
    iconType: 'factory'
  },
  {
    output: 'Motores (Engines)',
    category: 'Indústria Avançada',
    tier: 'bg-emerald-800',
    inputs: ['Aço', 'Carvão', 'Borracha (Tardio)'],
    description: 'Move as ferrovias, garantindo Infraestrutura (Market Access) para os estados.',
    pmEvolution: 'Começa consumindo apenas Aço. O método "Locomotivas a Vapor" adiciona grande consumo de Carvão. No final do jogo, o motor de combustão ou motores elétricos exigirão Petróleo e Eletricidade para serem montados.',
    primaryUses: 'Ferrovias (Railways) para criar Infraestrutura. Também consumido na criação de Automóveis, Aviões, Tratores (para uso agrário) e Bombas para aumentar o rendimento das minas.',
    iconType: 'combine'
  },
  {
    output: 'Móveis & Roupas de Luxo',
    category: 'Bens de Consumo',
    tier: 'bg-purple-900',
    inputs: ['Madeira de Lei (Hardwood)', 'Seda', 'Corantes', 'Ferramentas'],
    description: 'Essenciais para pacificar e extrair impostos das classes ricas.',
    pmEvolution: 'Bens de luxo não são fábricas isoladas, são métodos de produção secundários nas fábricas normais. Ao ativar o PM de "Móveis de Luxo" na fábrica de móveis, ela consumirá Madeira de Lei para produzir itens caros ao lado dos normais.',
    primaryUses: 'Consumo exclusivo das Pops Ricas (Aristocratas e Capitalistas a partir do SoL 15). Tê-los baratos e abundantes aumenta o padrão de vida global e gera uma base tributária gigantesca sob leis de Imposto Graduado.',
    iconType: 'star'
  },
  {
    output: 'Papel',
    category: 'Insumo Administrativo',
    tier: 'bg-yellow-900',
    inputs: ['Madeira', 'Serviços (métodos avançados)'],
    description: 'O custo escondido de toda a burocracia do seu país.',
    pmEvolution: 'Começa em moinhos que só consomem Madeira. Métodos de polpa química mais avançados aumentam bastante o rendimento, mas passam a exigir Serviços como insumo secundário. Em países muito populosos, o consumo de Papel escala com o número de Administrações Governamentais e Universidades construídas.',
    primaryUses: 'Consumido por Administração Governamental (a fonte de Burocracia) e por Universidades. Papel caro encarece toda a sua burocracia ao mesmo tempo — construir indústria de papel local é uma das formas mais eficazes de destravar países populosos como China, Índia ou Rússia, presos no loop de "mais gente → mais administração → mais papel caro → mais administração".',
    iconType: 'book'
  },
  {
    output: 'Artilharia & Tanques',
    category: 'Indústria Militar',
    tier: 'bg-red-900',
    inputs: ['Aço', 'Explosivos', 'Peças de Máquina', 'Automóveis', 'Borracha'],
    description: 'Armamento de ponta para dominar nas Guerras Mundiais e Grandes Jogos.',
    pmEvolution: 'Explosivos derivam de Fábricas de Químicos (consomem Enxofre e Fertilizante). A evolução para Armamento de Cerco e, finalmente, Tanques, exigirá que você converta as suas produções em linhas de montagem pesadas de Automóveis (que precisam de Motores e Borracha).',
    primaryUses: 'Consumidos diretamente pelos seus Quarteis Militares. Uma escassez destes itens durante uma guerra causará um debuff massivo de suprimento nos seus exércitos, resultando em derrotas certas.',
    iconType: 'target'
  }
];
