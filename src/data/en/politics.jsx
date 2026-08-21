import React from 'react';
import { Users, Landmark, FileText, Megaphone, Gavel } from 'lucide-react';

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
    id: 'movements_radicals',
    title: '4. Movements & Radicalism',
    icon: <Megaphone className="w-6 h-6 text-rose-400" />,
    description: 'Falling Standard of Living creates Radicals; Radicals feed Movements, which can turn into revolution — or become support for passing laws.',
    details: 'A Political Movement forms around a specific law (to enact, revert, or preserve) and accumulates Participation and Radicalism. It is born from falling POP Standard of Living, which turns them into Radicals (sustained rises create Loyalists instead). If a movement grows unaddressed, it turns revolutionary and the Revolution Clock starts running. Government Legitimacy (0-100) modulates all of this: below 25 no law advances except ones endorsed by an active movement; between 25 and 49 enactment is roughly 50% slower; above 90, roughly 25% faster. This creates the mechanic almost no tutorial explains: a non-passive movement that endorses a law serves as a support base to pass it, even under an illegitimate government — using the street as a third legislative chamber.',
    inputs: ['Radicals and Loyalists (from the enactment process)', 'Falling or rising Standard of Living', 'Government Legitimacy'],
    outputs: ['Political Movements (passive or active)', 'Revolution Clock', 'Popular support to pass laws even under an illegitimate government'],
    themeColor: 'text-rose-400',
    themeBg: 'bg-rose-500/20',
    themeBorder: 'border-rose-500/30'
  },
  {
    id: 'laws_institutions',
    title: '5. Current Laws & Feedback Loop',
    icon: <Gavel className="w-6 h-6 text-emerald-400" />,
    description: 'Enacted laws affect Voting Rules, Institutions, and create a cycle that alters society.',
    details: 'When a law survives the enactment phases, it becomes part of the "Current Laws". These laws unlock or limit state "Institutions" (Schools, Hospitals, Police) and also determine how much Authority and Bureaucracy you generate or consume. Since patch 1.13.9, most flat negative Authority and Bureaucracy modifiers (such as Political Concessions) are treated as a cost instead of a direct penalty — which changes how it pays to budget slack in those two resources. The most important point remains the Feedback Loop: Current Laws change the Economic and Social Structure (e.g. end of slavery, end of subsidies), which directly alters the Wealth and Professions of the POPs at the base of the pyramid, restarting the political cycle under new rules.',
    inputs: ['Enacted Law (Phases completed)'],
    outputs: ['Institutions', 'Generation/Consumption of Authority & Bureaucracy', 'Change in Economic Structure (Feedback Loop for POPs)'],
    themeColor: 'text-emerald-400',
    themeBg: 'bg-emerald-500/20',
    themeBorder: 'border-emerald-500/30'
  }
];
