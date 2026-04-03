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
