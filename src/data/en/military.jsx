import React from 'react';
import { Flag, Tent, Ship, Crosshair, Skull } from 'lucide-react';

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
    id: 'naval_rework',
    title: '3. Navy: Crews and Missions (since 1.13)',
    icon: <Ship className="w-6 h-6 text-cyan-400" />,
    description: 'Since "The Great Wave", ships are individual objects with their own crews. Fleets run Missions instead of a single admiral order.',
    details: 'The navy was rebuilt from scratch in the 1.13 "Matcha" / "The Great Wave" update. Ships are now individual objects you construct, lose, and repair — no longer abstract manpower packages. Every fleet needs real crews, supplied by a new building, the Naval Administration, which acts as a pool of sailors for your country. The Ship Designer lets you customize armor, armament, propulsion, and supply capacity per ship type. The old "pick a node and give an order" system was replaced by a fleet Mission system: Project Power, Interception, Protect Supply, Attack Supply, Blockade, Port Bombardment, Hunt Pirates, and Privateering. A single fleet can cover several nodes at once (at reduced efficiency, up to a limit tied to the admiral\'s rank), and combat depends on detection versus visibility — fleets can search for, find, and intercept each other in transit. Straits and naval fortifications now define a minimum strength the attacker must overcome before attempting an amphibious invasion.',
    inputs: ['Shipyards and Naval Base levels', 'Naval Administration (crew)', 'Ship Designer (armor, armament, propulsion, supply)'],
    outputs: ['Fleets with detection/visibility', 'Active fleet Missions', 'Flagship captaincies and combat prestige'],
    themeColor: 'text-cyan-400',
    themeBg: 'bg-cyan-500/20',
    themeBorder: 'border-cyan-500/30'
  },
  {
    id: 'formations_battles',
    title: '4. Formations & Battles',
    icon: <Crosshair className="w-6 h-6 text-red-400" />,
    description: 'Battalions and fleets grouped into Formations with a single Commander resolve stalemates on Frontlines and Naval Nodes.',
    details: 'Barracks maintain "Battalions", and the Naval Administration maintains fleet crews; both are grouped into "Formations: Armies and Fleets". Since the 1.13 rework, each Formation has a single Commander (General or Admiral), cutting down the micromanagement of dozens of leaders, and the command limit was reworked to reflect this. Commanders receive orders to advance or defend on "Frontlines and Naval Nodes". Territorial stalemates result in Battles. Offensive and defensive power in battle is defined by Military Technology combined with tactics, Commander bonuses, and — decisively — supply along the logistics lines.',
    inputs: ['Battalions and Flotillas', 'Single Commander per Formation', 'Frontlines / Naval Nodes'],
    outputs: ['Battle Resolution', 'Territorial Occupation (Victory)', 'Dead and Wounded'],
    themeColor: 'text-red-400',
    themeBg: 'bg-red-500/20',
    themeBorder: 'border-red-500/30'
  },
  {
    id: 'war_exhaustion',
    title: '5. War Exhaustion & Resolution',
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
