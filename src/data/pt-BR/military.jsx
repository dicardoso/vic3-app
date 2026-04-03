import React from 'react';
import { Flag, Tent, Crosshair, Skull } from 'lucide-react';

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
    id: 'formations_battles',
    title: '3. Formações e Batalhas',
    icon: <Crosshair className="w-6 h-6 text-red-400" />,
    description: 'Batalhões agrupados em Exércitos são comandados por Generais para resolver impasses nas Frentes de Batalha.',
    details: 'Os Quartéis mantêm os "Batalhões e Flotilhas", que são então agrupados em "Formações: Exércitos e Frotas". Os "Generais e Almirantes" comandam estas formações e recebem ordens para avançar ou defender nas "Frentes de Batalha e Nodos Navais". O impasse territorial resulta em Batalhas. O poder ofensivo e defensivo da batalha é definido pela Tecnologia Militar combinada com as táticas e os bônus fornecidos pelos Comandantes.',
    inputs: ['Batalhões e Flotilhas', 'Generais e Almirantes', 'Frentes de Batalha / Nodos Navais'],
    outputs: ['Resolução de Batalhas', 'Ocupação de Território (Vitória)', 'Mortos e Feridos'],
    themeColor: 'text-red-400',
    themeBg: 'bg-red-500/20',
    themeBorder: 'border-red-500/30'
  },
  {
    id: 'war_exhaustion',
    title: '4. Exaustão de Guerra e Resolução',
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
