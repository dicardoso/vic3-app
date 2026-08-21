import React from 'react';
import { Flag, Tent, Ship, Crosshair, Skull } from 'lucide-react';

export const militaryNodes = [
  {
    id: 'diplo_mob',
    title: '1. Jogada Diplomática e Mobilização',
    icon: <Flag className="w-6 h-6 text-orange-400" />,
    description: 'O conflito se inicia na diplomacia. A escalada leva à Mobilização, ativando as tropas e disparando o consumo.',
    details: 'Qualquer conflito em Victoria 3 começa com uma "Jogada Diplomática" (Diplomatic Play). Se as partes não chegarem a um acordo durante a fase de escalada, a guerra se aproxima e você aciona a "Mobilização". Mobilizar as tropas ativa suas formações militares e os direciona para as frentes, mas isso aumenta quase imediatamente e de forma drástica o consumo de Bens militares na economia.',
    inputs: ['Jogada Diplomática (Escalada)'],
    outputs: ['Mobilização Ativa', 'Aumento de Consumo de Bens'],
    themeColor: 'text-orange-400',
    themeBg: 'bg-orange-500/20',
    themeBorder: 'border-orange-500/30'
  },
  {
    id: 'barracks_supply',
    title: '2. Suprimentos e Quartéis',
    icon: <Tent className="w-6 h-6 text-green-400" />,
    description: 'Bens e POPs alimentam os Quartéis e Bases Navais. A tecnologia define os atributos.',
    details: 'Os Bens militares (Armas, Munição, Navios) são consumidos pelos "Quartéis e Bases Navais". Ao mesmo tempo, os POPs (Soldados e Oficiais) são empregados nestas estruturas físicas em seus estados. Em tempo de guerra e dependendo das suas leis, os "Centros de Recrutamento" podem levantar civis (conscrição) para engrossar as fileiras. A "Tecnologia Militar" que você pesquisou define os Métodos de Produção destas construções e seus atributos base.',
    inputs: ['Bens (Armas, Munição, Navios)', 'POPs (Soldados, Oficiais)', 'Tecnologia Militar', 'Centros de Recrutamento (Leis)'],
    outputs: ['Quartéis e Bases Navais Funcionais', 'Manutenção de Batalhões e Flotilhas'],
    themeColor: 'text-green-400',
    themeBg: 'bg-green-500/20',
    themeBorder: 'border-green-500/30'
  },
  {
    id: 'naval_rework',
    title: '3. Marinha: Tripulação e Missões (desde o 1.13)',
    icon: <Ship className="w-6 h-6 text-cyan-400" />,
    description: 'Desde "The Great Wave", navios são objetos individuais com tripulação própria. Frotas executam Missões, não mais uma única ordem por almirante.',
    details: 'A marinha foi refeita do zero na atualização 1.13 "Matcha" / "The Great Wave". Navios agora são objetos individuais que você constrói, perde e repara — não mais pacotes abstratos de mão de obra. Toda frota precisa de tripulação de verdade, fornecida por um novo prédio, a Administração Naval, que funciona como um reservatório de marinheiros. O Ship Designer permite customizar blindagem, armamento, propulsão e capacidade de suprimento por tipo de navio. O antigo sistema de "escolher um nó e dar uma ordem" foi substituído por um sistema de Missões de frota: Projetar Poder, Interceptação, Proteger Suprimento, Atacar Suprimento, Bloqueio, Bombardeio de Porto, Caçar Piratas e Corso. Uma única frota pode cobrir vários nós ao mesmo tempo (com eficiência reduzida, até um limite ligado à patente do almirante), e o combate depende de detecção contra visibilidade — frotas podem se procurar, se encontrar e ser interceptadas em trânsito. Estreitos e fortificações navais agora definem uma força mínima que o atacante precisa superar antes de tentar uma invasão anfíbia.',
    inputs: ['Estaleiros e níveis de Base Naval', 'Administração Naval (tripulação)', 'Ship Designer (blindagem, armamento, propulsão, suprimento)'],
    outputs: ['Frotas com detecção/visibilidade', 'Missões de frota ativas', 'Capitanias e prestígio de combate (Flagship)'],
    themeColor: 'text-cyan-400',
    themeBg: 'bg-cyan-500/20',
    themeBorder: 'border-cyan-500/30'
  },
  {
    id: 'formations_battles',
    title: '4. Formações e Batalhas',
    icon: <Crosshair className="w-6 h-6 text-red-400" />,
    description: 'Batalhões e frotas agrupados em Formações com um único Comandante resolvem impasses nas Frentes de Batalha e Nós Navais.',
    details: 'Os Quartéis mantêm os "Batalhões", e a Administração Naval mantém as tripulações das frotas; ambos são agrupados em "Formações: Exércitos e Frotas". Desde o rework de 1.13, cada Formação tem um único Comandante (General ou Almirante), reduzindo o microgerenciamento de dezenas de líderes, e o limite de comando (command limit) foi reformulado para refletir isso. Os Comandantes recebem ordens para avançar ou defender nas "Frentes de Batalha e Nós Navais". O impasse territorial resulta em Batalhas. O poder ofensivo e defensivo da batalha é definido pela Tecnologia Militar combinada com as táticas, os bônus dos Comandantes e — decisivamente — o suprimento das linhas de logística.',
    inputs: ['Batalhões e Flotilhas', 'Comandante único por Formação', 'Frentes de Batalha / Nós Navais'],
    outputs: ['Resolução de Batalhas', 'Ocupação de Território (Vitória)', 'Mortos e Feridos'],
    themeColor: 'text-red-400',
    themeBg: 'bg-red-500/20',
    themeBorder: 'border-red-500/30'
  },
  {
    id: 'war_exhaustion',
    title: '5. Exaustão de Guerra e Resolução',
    icon: <Skull className="w-6 h-6 text-purple-400" />,
    description: 'Baixas e Ocupações punem a Exaustão de Guerra até forçar a Capitulação. Cria um forte Feedback Loop.',
    details: 'As batalhas deixam duas grandes cicatrizes: "Ocupação de Território" pelo vencedor e um número substancial de "Mortos, Feridos e Dependentes" de ambos os lados. Estes fatores punem a sua moral, aumentando a penalidade de "Exaustão de Guerra" semanalmente. Quando a Exaustão atinge seu limite (100%), o país é forçado à Capitulação ou a aceitar um Tratado de Paz. Além disso, as baixas ativam um Feedback Loop perigoso: reduzem a População Ativa da sua economia e o luto aumenta o número de Radicais no país.',
    inputs: ['Ocupação de Território (Inimigo)', 'Mortos, Feridos e Dependentes'],
    outputs: ['Penalidade de Exaustão de Guerra', 'Capitulação / Tratado de Paz', 'Redução de POPs e Aumento de Radicais (Feedback Loop)'],
    themeColor: 'text-purple-400',
    themeBg: 'bg-purple-500/20',
    themeBorder: 'border-purple-500/30'
  }
];
