import React from 'react';
import { Flag, Tent, Crosshair, Skull } from 'lucide-react';

export const militaryNodes = [
  {
    id: 'diplo_mob',
    title: '1. Diplomatic Play & Mobilization',
    icon: <Flag className="w-6 h-6 text-orange-400" />,
    description: 'Conflict starts in diplomacy. Escalation leads to Mobilization, activating troops and triggering consumption.',
    details: 'Any conflict in Victoria 3 begins with a "Diplomatic Play". If the parties do not reach an agreement during the escalation phase, war approaches and you activate "Mobilization". Mobilizing troops activates your military formations and routes them to the frontlines, but this almost immediately and drastically increases the consumption of military goods in the economy.',
    inputs: ['Diplomatic Play (Escalation)'],
    outputs: ['Active Mobilization', 'Increased Goods Consumption'],
    themeColor: 'text-orange-400',
    themeBg: 'bg-orange-500/20',
    themeBorder: 'border-orange-500/30'
  },
  {
    id: 'barracks_supply',
    title: '2. Supplies and Barracks',
    icon: <Tent className="w-6 h-6 text-green-400" />,
    description: 'Goods and POPs feed Barracks and Naval Bases. Technology defines attributes.',
    details: 'Military goods (Arms, Ammunition, Ships) are consumed by "Barracks and Naval Bases". At the same time, POPs (Servicemen and Officers) are employed in these physical structures in their states. In wartime and depending on your laws, "Conscription Centers" can raise civilians (conscription) to swell the ranks. The "Military Technology" you researched defines the Production Methods of these buildings and their base attributes.',
    inputs: ['Goods (Arms, Ammunition, Ships)', 'POPs (Servicemen, Officers)', 'Military Technology', 'Conscription Centers (Laws)'],
    outputs: ['Functional Barracks and Naval Bases', 'Maintenance of Battalions and Flotillas'],
    themeColor: 'text-green-400',
    themeBg: 'bg-green-500/20',
    themeBorder: 'border-green-500/30'
  },
  {
    id: 'formations_battles',
    title: '3. Formations & Battles',
    icon: <Crosshair className="w-6 h-6 text-red-400" />,
    description: 'Battalions grouped into Armies are commanded by Generals to resolve stalemates on the Frontlines.',
    details: 'Barracks maintain "Battalions and Flotillas", which are then grouped into "Formations: Armies and Fleets". "Generals and Admirals" command these formations and receive orders to advance or defend on "Frontlines and Naval Nodes". Territorial stalemates result in Battles. Offensive and defensive power in battle is defined by Military Technology combined with tactics and bonuses provided by Commanders.',
    inputs: ['Battalions and Flotillas', 'Generals and Admirals', 'Frontlines / Naval Nodes'],
    outputs: ['Battle Resolution', 'Territorial Occupation (Victory)', 'Dead and Wounded'],
    themeColor: 'text-red-400',
    themeBg: 'bg-red-500/20',
    themeBorder: 'border-red-500/30'
  },
  {
    id: 'war_exhaustion',
    title: '4. War Exhaustion & Resolution',
    icon: <Skull className="w-6 h-6 text-purple-400" />,
    description: 'Casualties and Occupations punish War Exhaustion until forcing Capitulation. Creates a strong Feedback Loop.',
    details: 'Battles leave two great scars: "Territorial Occupation" by the victor and a substantial number of "Dead, Wounded and Dependents" on both sides. These factors punish your morale, increasing the "War Exhaustion" penalty weekly. When Exhaustion reaches its limit (100%), the country is forced to Capitulate or accept a Peace Treaty. Furthermore, casualties trigger a dangerous Feedback Loop: they reduce the Active Population of your economy and the mourning increases the number of Radicals in the country.',
    inputs: ['Territorial Occupation (Enemy)', 'Dead, Wounded and Dependents'],
    outputs: ['War Exhaustion Penalty', 'Capitulation / Peace Treaty', 'POP Reduction and Radical Increase (Feedback Loop)'],
    themeColor: 'text-purple-400',
    themeBg: 'bg-purple-500/20',
    themeBorder: 'border-purple-500/30'
  }
];
