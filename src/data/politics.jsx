import React from 'react';
import { Users, Landmark, FileText, Gavel } from 'lucide-react';

export const politicsNodes = [
  {
    id: 'base_pops',
    title: '1. População (POPs) e IGs',
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    description: 'A base da sociedade. As Profissões, Riqueza e Alfabetização determinam a Consciência Política e a formação dos Grupos de Interesse (IGs).',
    details: 'A População (POPs) é a origem de todo o poder. A combinação de Profissões (ex: Camponeses, Operários, Capitalistas), Riqueza e Alfabetização define a Consciência Política de um POP. A Riqueza gera Poder de Compra e Influência. Juntos, esses fatores determinam quais Grupos de Interesse (IGs) esses POPs irão formar e apoiar financeiramente.',
    inputs: ['Profissões', 'Riqueza', 'Alfabetização'],
    outputs: ['Consciência Política', 'Poder de Compra/Influência', 'Grupos de Interesse (IGs)'],
    themeColor: 'text-indigo-400',
    themeBg: 'bg-indigo-500/20',
    themeBorder: 'border-indigo-500/30'
  },
  {
    id: 'clout_gov',
    title: '2. Clout (Poder Político) e Governo',
    icon: <Landmark className="w-6 h-6 text-amber-400" />,
    description: 'Os IGs convertem sua influência em Clout através das Regras de Votação, formando o Governo e gerando Legitimidade.',
    details: 'Os Grupos de Interesse acumulam Poder Político (Clout) que é filtrado pelas "Leis Atuais" referentes à Distribuição de Poder (quem pode votar). O Clout dita a força de cada IG. Os IGs mais fortes geralmente compõem o "Governo Formado". A coesão ideológica deste Governo e o total de Clout que ele representa geram a sua Legitimidade.',
    inputs: ['Grupos de Interesse (IGs)', 'Regras de Votação (Leis Atuais)'],
    outputs: ['Poder Político (Clout)', 'Governo Formado', 'Legitimidade'],
    themeColor: 'text-amber-400',
    themeBg: 'bg-amber-500/20',
    themeBorder: 'border-amber-500/30'
  },
  {
    id: 'law_process',
    title: '3. Proposta e Fases de Aprovação',
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    description: 'O Governo propõe leis que passam por Fases de Aprovação. A Legitimidade afeta a chance de sucesso.',
    details: 'Apenas o Governo Formado pode endossar uma "Proposta de Nova Lei". Ao ser proposta, a lei entra nas "Fases de Aprovação / Eventos". A velocidade de cada fase e as chances de Sucesso, Debate ou Estagnação dependem diretamente da Legitimidade do governo e da Compatibilidade Ideológica. Durante os eventos de aprovação, a reação dos IGs (apoio ou oposição) gera Radicais e Legalistas.',
    inputs: ['Proposta de Nova Lei', 'Legitimidade', 'Compatibilidade Ideológica'],
    outputs: ['Fases de Aprovação / Eventos', 'Radicais e Legalistas'],
    themeColor: 'text-blue-400',
    themeBg: 'bg-blue-500/20',
    themeBorder: 'border-blue-500/30'
  },
  {
    id: 'laws_institutions',
    title: '4. Leis Atuais e Feedback Loop',
    icon: <Gavel className="w-6 h-6 text-emerald-400" />,
    description: 'Leis aprovadas afetam Regras de Votação, Instituições e criam um ciclo que altera a sociedade.',
    details: 'Quando uma lei sobrevive às fases de aprovação, ela se torna parte das "Leis Atuais". Estas leis desbloqueiam ou limitam as "Instituições" de estado (Escolas, Hospitais, Polícia) e também determinam quanta Autoridade e Burocracia você gera ou consome. O ponto mais importante é o Feedback Loop: as Leis Atuais mudam a Estrutura Econômica e Social (ex: fim da escravidão, fim dos subsídios), o que altera diretamente a Riqueza e as Profissões dos POPs na base da pirâmide, reiniciando o ciclo político sob novas regras.',
    inputs: ['Lei Aprovada (Fases concluídas)'],
    outputs: ['Instituições', 'Geração/Consumo de Autoridade e Burocracia', 'Mudança na Estrutura Econômica (Feedback Loop para POPs)'],
    themeColor: 'text-emerald-400',
    themeBg: 'bg-emerald-500/20',
    themeBorder: 'border-emerald-500/30'
  }
];
