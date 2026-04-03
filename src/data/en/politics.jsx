import React from 'react';
import { Users, Landmark, FileText, Gavel } from 'lucide-react';

export const politicsNodes = [
  {
    id: 'base_pops',
    title: '1. Population (POPs) & IGs',
    icon: <Users className="w-6 h-6 text-indigo-400" />,
    description: 'The foundation of society. Professions, Wealth, and Literacy determine Political Consciousness and the formation of Interest Groups (IGs).',
    details: 'Population (POPs) is the origin of all power. The combination of Professions (e.g. Peasants, Laborers, Capitalists), Wealth, and Literacy defines a POP\'s Political Consciousness. Wealth generates Purchasing Power and Influence. Together, these factors determine which Interest Groups (IGs) these POPs will form and financially support.',
    inputs: ['Professions', 'Wealth', 'Literacy'],
    outputs: ['Political Consciousness', 'Purchasing Power/Influence', 'Interest Groups (IGs)'],
    themeColor: 'text-indigo-400',
    themeBg: 'bg-indigo-500/20',
    themeBorder: 'border-indigo-500/30'
  },
  {
    id: 'clout_gov',
    title: '2. Clout (Political Power) & Government',
    icon: <Landmark className="w-6 h-6 text-amber-400" />,
    description: 'IGs convert their influence into Clout through Voting Rules, forming the Government and generating Legitimacy.',
    details: 'Interest Groups accumulate Political Power (Clout) which is filtered by the "Current Laws" regarding the Distribution of Power (who can vote). Clout dictates the strength of each IG. The strongest IGs usually make up the "Formed Government". The ideological cohesion of this Government and the total Clout it represents generate its Legitimacy.',
    inputs: ['Interest Groups (IGs)', 'Voting Rules (Current Laws)'],
    outputs: ['Political Power (Clout)', 'Formed Government', 'Legitimacy'],
    themeColor: 'text-amber-400',
    themeBg: 'bg-amber-500/20',
    themeBorder: 'border-amber-500/30'
  },
  {
    id: 'law_process',
    title: '3. Proposal and Enactment Phases',
    icon: <FileText className="w-6 h-6 text-blue-400" />,
    description: 'The Government proposes laws that go through Enactment Phases. Legitimacy affects the chance of success.',
    details: 'Only the Formed Government can endorse a "New Law Proposal". Once proposed, the law enters the "Enactment Phases / Events". The speed of each phase and the chances of Success, Debate, or Stall depend directly on the government\'s Legitimacy and Ideological Compatibility. During enactment events, the reaction of the IGs (support or opposition) generates Radicals and Loyalists.',
    inputs: ['New Law Proposal', 'Legitimacy', 'Ideological Compatibility'],
    outputs: ['Enactment Phases / Events', 'Radicals and Loyalists'],
    themeColor: 'text-blue-400',
    themeBg: 'bg-blue-500/20',
    themeBorder: 'border-blue-500/30'
  },
  {
    id: 'laws_institutions',
    title: '4. Current Laws & Feedback Loop',
    icon: <Gavel className="w-6 h-6 text-emerald-400" />,
    description: 'Enacted laws affect Voting Rules, Institutions, and create a cycle that alters society.',
    details: 'When a law survives the enactment phases, it becomes part of the "Current Laws". These laws unlock or limit state "Institutions" (Schools, Hospitals, Police) and also determine how much Authority and Bureaucracy you generate or consume. The most important point is the Feedback Loop: Current Laws change the Economic and Social Structure (e.g. end of slavery, end of subsidies), which directly alters the Wealth and Professions of the POPs at the base of the pyramid, restarting the political cycle under new rules.',
    inputs: ['Enacted Law (Phases completed)'],
    outputs: ['Institutions', 'Generation/Consumption of Authority & Bureaucracy', 'Change in Economic Structure (Feedback Loop for POPs)'],
    themeColor: 'text-emerald-400',
    themeBg: 'bg-emerald-500/20',
    themeBorder: 'border-emerald-500/30'
  }
];
