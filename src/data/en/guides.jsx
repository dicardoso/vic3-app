import { Landmark, Swords, Navigation, Globe, Target, Users, Shield, Star } from 'lucide-react';

export const countryGuides = [
  {
    id: 'usa',
    name: 'United States',
    focus: 'Mass Immigration, Territorial Expansion, Civil War',
    difficulty: 'Easy to Medium',
    overview: 'The USA has the greatest demographic and economic potential in the game due to natural immigration attraction bonuses and vast resource reserves (including Gold and Late-game Oil).',
    earlyGame: 'Your absolute focus early on should be Manifest Destiny. Colonize the plains before GB/Mexico. Pressure Mexico via war to take Texas, California, and New Mexico. Maintain cordial relations with European powers so they do not intervene in your American wars.',
    midLateGame: 'The Civil War is almost inevitable if you try to abolish Slavery. It is often better to force the revolt early, defeat the Confederates, and unify the country under liberal laws (Multiculturalism, Open Borders). From 1880 onwards, build heavy industries and harness the infinite flow of European immigrants to inflate your GDP to the global top.',
    relatedAchievements: ['Star-Swarmed Banner', 'Go West, Young Man', 'Notes on the State of Virginia', 'Robber Baron', 'Manifest Mexico (as opponent)'],
    flagColor: 'bg-blue-900',
    icon: <Landmark className="w-8 h-8 text-white" />
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    focus: 'Naval Hegemony, Free Trade Imperialism, Global Colonization',
    difficulty: 'Easy',
    overview: 'Great Britain starts as the greatest economic and naval superpower in the world in 1836. Its game is about power maintenance and market expansion rather than nation-building.',
    earlyGame: 'Use your fleet to open vital markets in Asia (start the Opium War quickly against Qing to take Hong Kong and reparations). Keep the East India Company under control. Build universities at home and ports in the colonies.',
    midLateGame: 'The British challenge is managing the size of the empire. Lead the Scramble for Africa securing the Congo and Niger routes. Avoid massive land wars in Europe; instead, bankroll allies (checkbook diplomacy) and use naval blockades to choke rivals like France or Germany.',
    relatedAchievements: ['Pax Britannica', 'The Sun Never Sets', 'Poppydock', 'Pound Sterling', 'The British Lion'],
    flagColor: 'bg-red-800',
    icon: <Navigation className="w-8 h-8 text-white" />
  },
  {
    id: 'france',
    name: 'France',
    focus: 'Stagnant Demographics, Land/Naval Power, Political Turmoil',
    difficulty: 'Medium',
    overview: 'France has a formidable army and a rich economy, but historically suffers from slow population growth and constant revolutions (Monarchists vs Bonapartists vs Republicans).',
    earlyGame: 'Secure your resource base in Algeria. France starts strong enough to challenge Prussia or GB early on. Try to stop Prussia from unifying Germany or stealing the Rhineland. Foster alliances with Austria or Russia.',
    midLateGame: 'Take advantage of your Innovation bonuses to dominate the Belle Époque. You will face the Paris Commune and radical agitators. Decide whether to suppress socialists or embrace the Council Republic. Use your massive capital to fund the Suez or Panama Canal and colonize West Africa.',
    relatedAchievements: ['L\'Hexagone', 'Belle Époque', 'The Paris Commune', 'The 18th of Brumaire', 'L\'Etat, c\'est moi'],
    flagColor: 'bg-blue-600',
    icon: <Globe className="w-8 h-8 text-white" />
  },
  {
    id: 'prussia',
    name: 'Prussia / German Empire',
    focus: 'Militarism, Unification, Rapid Industrialization',
    difficulty: 'Medium',
    overview: 'The classic land military game of Victoria 3. You start militarily strong but politically fragmented. The core goal is to unify Germany and dominate Continental Europe.',
    earlyGame: 'Focus on military technologies (Infantry Tactics). Improve relations with Russia and GB to isolate Austria. Launch the Leadership War against Austria early. Bring the minor German states into your Customs Union and form the North German Federation.',
    midLateGame: 'The war against France to retake Alsace-Lorraine is the final test to form the German Empire. Once unified, the country has the largest coal and iron reserves in Europe. Industrialize furiously and build a Power Bloc. Eventually, you will need ports and African colonies to avoid falling behind in the race for rubber and oil.',
    relatedAchievements: ['Three Hurrahs', 'Blood and Iron', 'A Place in the Sun', 'A Tale of Two Cities', 'The Ego and His Own'],
    flagColor: 'bg-slate-700',
    icon: <Swords className="w-8 h-8 text-white" />
  },
  {
    id: 'ottoman',
    name: 'Ottoman Empire',
    focus: 'Race Against Time (Tanzimat), Modernization, Ethnic Tensions',
    difficulty: 'Hard',
    overview: 'Known as the "Sick Man of Europe", you start obsolete, bankrupt, and on a countdown. If you do not complete the Tanzimat reforms in 20 years, the Empire will be permanently downgraded to an unrecognized minor power.',
    earlyGame: 'It is stressful. Focus every State resource on fulfilling the Tanzimat Journal entries. Reform the army, reclaim Syria from Egypt in the first decade (get a strong European ally to help), and pass Education/Bureaucracy laws. Suppress constant revolts in the Balkans.',
    midLateGame: 'If you survive the Tanzimat, the reward is immense. You will control vast crude oil reserves in the Middle East and have a giant population. The game shifts from survival to retaliation. Expand into Persia, unify the Islamic world, and become the top global producer.',
    relatedAchievements: ['Tanzimat', 'The Healthy Man of Europe', 'The Sick Man of Europe', 'The Sick Man Recovers'],
    flagColor: 'bg-red-800',
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    id: 'russia',
    name: 'Russia',
    focus: 'Territorial Expansion, Abolition of Serfdom, The Great Game',
    difficulty: 'Medium',
    overview: 'Russia is a demographic and territorial colossus that starts with severe technological and social backwardness. The raw potential is unmatched, but modernizing the country without causing internal collapse is the real challenge.',
    earlyGame: 'Your first major hurdle is abolishing Serfdom. This will enrage the Landowners. Try to industrialize focusing on wood, iron, and tools to build a base for capitalists, slowly weakening the nobility. Expand into Central Asia and the Caucasus.',
    midLateGame: 'After freeing the serfs and passing education laws, your literacy and innovation will skyrocket. The "Great Game" against GB for dominance in Persia and Afghanistan will dictate your foreign policy. In the endgame, with mass conscription, your army will be unstoppable, but beware of communist revolutions (or embrace them for specific achievements).',
    relatedAchievements: ['The Great Game', 'The Russian Bear', 'Serf\'s Up', 'The Motherland Calls!'],
    flagColor: 'bg-yellow-700',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    id: 'austria',
    name: 'Austrian Empire',
    focus: 'German Hegemony, Multiethnic Management, Conservatism',
    difficulty: 'Medium',
    overview: 'Austria dominates Central Europe but is a powder keg of different cultures. Your main goal is to hold the empire together while preventing Prussia from unifying Germany under their wing.',
    earlyGame: 'Suppress any radical movement and strengthen your alliance with the southern German nations. The clash with Prussia for German Leadership is inevitable; ensure you have a modern army and ideally ally with Russia or France to crush Prussian ambitions and take Silesia.',
    midLateGame: 'Dealing with the Spring of Nations and internal nationalisms (especially Hungarians and Italians) will require juggling citizenship laws (Multiculturalism) or a brutal police force. Industrialize Bohemia and Austria at your core, and dominate the Balkans region as the Ottoman Empire retreats.',
    relatedAchievements: ['Habsburg Resurgence', 'Hegemon', 'Oath of Fealty'],
    flagColor: 'bg-stone-600',
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    id: 'japan',
    name: 'Japan',
    focus: 'Isolationism to Superpower, Meiji Restoration, Asian Expansion',
    difficulty: 'Medium to Hard',
    overview: 'Starts completely isolated from the global market and ruled by the backward Shogunate. Japan\'s campaign is one of the most rewarding: going from feudalism to an industrial and military superpower in a few decades.',
    earlyGame: 'Patience is key. Foster Industrialists and Intelligentsia to diminish the Shogun\'s power. When forced to open the market by Western powers (or doing so voluntarily), use the turmoil to trigger or peacefully force the Meiji Restoration.',
    midLateGame: 'After the Restoration, your goal is frantic modernization. Build universities and copy Western industries. Create a modern army and turn your eyes to Korea and Manchuria. You will have to face Qing China (and possibly Russia) to establish your Pacific empire.',
    relatedAchievements: ['Meiji Restoration', 'Ruler of the East', 'Serf\'s Up'],
    flagColor: 'bg-red-800',
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    id: 'spain',
    name: 'Spain',
    focus: 'Empire Reconstruction, Carlist Wars, Economic Miracle',
    difficulty: 'Medium',
    overview: 'A former glory starting wounded, having lost most of its colonies and on the brink of civil war. It is an excellent nation to learn how to recover economies and handle internal politics.',
    earlyGame: 'The Carlist War will happen. Prepare militarily and try to keep the basic economy (clothes, furniture, tools) running. After defeating the rebels, stabilize the country and start literacy campaigns. Colonize the small African enclaves and try to regain influence in the Americas or the Philippines.',
    midLateGame: 'Focus on completing the "Economic Regeneration" missions. The Iberian Peninsula has excellent iron and coal resources in the north. Turn Spain into a liberal and industrial power to attract immigrants and, if ambitious, reclaim Great Power status by subjugating bankrupt neighbors or allies.',
    relatedAchievements: ['Bourbon for Everyone!', 'God, Country, King!', 'The Spanish Miracle'],
    flagColor: 'bg-yellow-500',
    icon: <Star className="w-8 h-8 text-white" />
  },
  {
    id: 'brazil',
    name: 'Empire of Brazil',
    focus: 'Abolition of Slavery, South American Hegemony, Magnanimous Diplomacy',
    difficulty: 'Easy to Medium',
    overview: 'The giant of South America. Starts dealing with regional revolts (Farrapos) and an economy heavily dependent on slave labor, but under the leadership of D. Pedro II has enormous potential for peaceful growth.',
    earlyGame: 'Crush the revolts in the south (Piratini) and north (Grão-Pará) immediately. Your biggest internal diplomatic challenge is abolishing slavery without causing a civil war that destroys the empire. Use Pedro II\'s immense popularity to empower the Intelligentsia and Industrialists.',
    midLateGame: 'After abolition, focus on attracting European immigrants by enacting Multiculturalism and Freedom of Religion. Expand your influence over the neighbors of Rio de la Plata and the Andes (either economically through your Customs Union or militarily). Industrialize the Southeast to replace European imports.',
    relatedAchievements: ['The Magnanimous', 'I Didn\'t Vote for Pedro', 'El Obrero', 'Devil\'s Work'],
    flagColor: 'bg-green-700',
    icon: <Landmark className="w-8 h-8 text-white" />
  }
];