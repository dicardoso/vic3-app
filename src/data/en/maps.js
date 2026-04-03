export const treasureMaps = [
  {
    id: 'usa_manifest_destiny',
    title: 'The American Colossus',
    country: 'United States',
    description: 'A step-by-step guide to dominating North America and becoming the world\'s greatest economic power in a single campaign with the USA.',
    themeBg: 'bg-blue-900/30',
    themeBorder: 'border-blue-500/50',
    iconColor: 'text-blue-400',
    steps: [
      {
        type: 'single',
        achievementId: 'go_west_young_man',
        context: 'Step 1 (1836 - 1850): Start by expanding your colonies westward and defeat Mexico as early as possible to secure California and Oregon.'
      },
      {
        type: 'branch',
        title: 'Focus Branch: Expansion vs. Consolidation',
        description: 'After forming the initial borders, decide whether to focus on dominating the continent or solving the slavery issue at home.',
        paths: [
          {
            achievementId: 'fifty_four_forty',
            context: 'Imperialist Path: Aggressively pressure Great Britain for the Northwest territories (Washington/British Columbia).'
          },
          {
            achievementId: 'notes_on_state_of_virginia',
            context: 'Abolitionist Path: Deliberately provoke the Civil War, defeat the Confederates, and economically boost Virginia.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'poor_huddled_masses',
        context: 'Step 3 (1870 - 1890): With borders secure and liberal laws passed, focus on increasing the Standard of Living. The massive immigration event will trigger naturally.'
      },
      {
        type: 'single',
        achievementId: 'robber_baron',
        context: 'Endgame (1890+): Pass Laissez-Faire and consolidate super profitable industries in New York to make your Capitalists incredibly rich, completing the domination.'
      }
    ]
  },
  {
    id: 'uk_global_empire',
    title: 'The British Century',
    country: 'United Kingdom',
    description: 'Paint the map red. A campaign route focused on dominating the global economy and maintaining peace at gunpoint with your naval cannons.',
    themeBg: 'bg-red-900/30',
    themeBorder: 'border-red-500/50',
    iconColor: 'text-red-400',
    steps: [
      {
        type: 'single',
        achievementId: 'poppydock',
        context: 'Step 1 (Early Game): Start by exporting Opium from India to China and use the inevitable Opium War to secure Hong Kong (Treaty Port).'
      },
      {
        type: 'single',
        achievementId: 'pound_sterling',
        context: 'Step 2 (Economic Expansion): Use your fleet to open markets or offer bankrolls to small nations in South America and Asia to bring them into your Customs Union.'
      },
      {
        type: 'branch',
        title: 'Branching: Africa vs European Peace',
        description: 'By mid-century, your vast bureaucracy needs to focus diplomatic efforts.',
        paths: [
          {
            achievementId: 'the_scramble_for_africa',
            context: 'Colonial Aggression: Unlock malaria prevention quickly and block France from dominating Africa.'
          },
          {
            achievementId: 'pax_britannica',
            context: 'Hegemonic Diplomacy: Intervene in any European war to force Great Powers to back down and maintain 20 years of peace.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'the_sun_never_sets',
        context: 'Final Step: Fill the gaps on the globe by conquering small ports until you have a state/port in every Strategic Region on Earth.'
      }
    ]
  },
  {
    id: 'egalitarian_utopia',
    title: 'The Utopian Dream',
    country: 'Any Democratic Nation (e.g., Sweden, Belgium)',
    description: 'The path of pacifism, education, and equality. A campaign focused on maximizing welfare and standard of living while abandoning old monarchies.',
    themeBg: 'bg-green-900/30',
    themeBorder: 'border-green-500/50',
    iconColor: 'text-green-400',
    steps: [
      {
        type: 'single',
        achievementId: 'reading_campaign',
        context: 'Step 1 (Social Foundation): Embrace Public Schools quickly and maximize institutional funding to achieve illiteracy eradication.'
      },
      {
        type: 'branch',
        title: 'Political and Class Reforms',
        description: 'To break the power of the old aristocrats, you need to empower different social movements simultaneously.',
        paths: [
          {
            achievementId: 'deeds_not_words',
            context: 'Civil Rights: Support the Intelligentsia, research Feminism, and fulfill the suffragette movement.'
          },
          {
            achievementId: 'bread_and_roses',
            context: 'Labor Rights: Support Trade Unions, pass Pension laws, and increase the Standard of Living above 20.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'cosmopolitan',
        context: 'Step 3 (Inclusion): Passing Multiculturalism laws will cause your rich and free country to attract all types of immigrants from secondary cultures.'
      },
      {
        type: 'single',
        achievementId: 'no_gods_no_masters',
        context: 'Final Step: Capitalize on the established popular power and make the final transition from a Republic to a sustainable Anarchy, leading the SoL ranking.'
      }
    ]
  }
];
