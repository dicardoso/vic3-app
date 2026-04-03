export const treasureMaps = [
  {
    id: 'usa_manifest_destiny',
    title: 'O Colosso Americano',
    country: 'Estados Unidos',
    description: 'Um guia passo a passo para dominar a América do Norte e se tornar a maior potência econômica do mundo em uma única campanha com os EUA.',
    themeBg: 'bg-blue-900/30',
    themeBorder: 'border-blue-500/50',
    iconColor: 'text-blue-400',
    steps: [
      {
        type: 'single',
        achievementId: 'go_west_young_man',
        context: 'Passo 1 (1836 - 1850): Inicie expandindo suas colônias em direção ao oeste e derrote o México o mais cedo possível para garantir a Califórnia e o Oregon.'
      },
      {
        type: 'branch',
        title: 'Bifurcação de Foco: Expansão vs. Consolidação',
        description: 'Após formar as bordas iniciais, decida se quer focar em dominar o continente ou resolver o problema da escravidão em casa.',
        paths: [
          {
            achievementId: 'fifty_four_forty',
            context: 'Caminho Imperialista: Pressione a Grã-Bretanha pelas colônias do Noroeste (Washington/Colúmbia Britânica) agressivamente.'
          },
          {
            achievementId: 'notes_on_state_of_virginia',
            context: 'Caminho Abolicionista: Provoque a Guerra Civil deliberadamente, derrote os Confederados e impulsione a Virgínia economicamente.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'poor_huddled_masses',
        context: 'Passo 3 (1870 - 1890): Com as fronteiras seguras e leis liberais aprovadas, foque em aumentar o Padrão de Vida. O evento de imigração massiva será ativado naturalmente.'
      },
      {
        type: 'single',
        achievementId: 'robber_baron',
        context: 'Fim de Jogo (1890+): Aprove Laissez-Faire e consolide indústrias super lucrativas em Nova Iorque para deixar os seus Capitalistas incrivelmente ricos, completando o domínio.'
      }
    ]
  },
  {
    id: 'uk_global_empire',
    title: 'O Século Britânico',
    country: 'Reino Unido',
    description: 'Transforme o mapa de vermelho. Uma rota de campanha focada em dominar a economia global e manter a paz sob a mira dos seus canhões navais.',
    themeBg: 'bg-red-900/30',
    themeBorder: 'border-red-500/50',
    iconColor: 'text-red-400',
    steps: [
      {
        type: 'single',
        achievementId: 'poppycock',
        context: 'Passo 1 (Early Game): Inicie exportando Ópio da Índia para a China e use a inevitável Guerra do Ópio para garantir Hong Kong (Porto do Tratado).'
      },
      {
        type: 'single',
        achievementId: 'pound_sterling',
        context: 'Passo 2 (Expansão Econômica): Use sua frota para abrir mercados ou oferecer dinheiro para nações pequenas na América do Sul e Ásia para entrarem na sua União Aduaneira.'
      },
      {
        type: 'branch',
        title: 'Bifurcação: África vs Paz Europeia',
        description: 'No meio do século, a sua vasta burocracia precisa focar os esforços diplomáticos.',
        paths: [
          {
            achievementId: 'the_scramble_for_africa',
            context: 'Agressão Colonial: Desbloqueie prevenção contra malária rapidamente e bloqueie a França de dominar a África.'
          },
          {
            achievementId: 'pax_britannica',
            context: 'Diplomacia Hegemônica: Intervenha em qualquer guerra europeia para forçar as Grandes Potências a recuar e manter 20 anos de paz.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'the_sun_never_sets',
        context: 'Passo Final: Preencha as lacunas no globo conquistando pequenos portos até ter um estado/porto em todas as Regiões Estratégicas da Terra.'
      }
    ]
  },
  {
    id: 'egalitarian_utopia',
    title: 'O Sonho da Utopía',
    country: 'Qualquer Nação Democrática (ex: Suécia, Bélgica)',
    description: 'O caminho do pacifismo, educação e igualdade. Uma campanha focada em maximizar o bem-estar e o padrão de vida abandonando velhas monarquias.',
    themeBg: 'bg-green-900/30',
    themeBorder: 'border-green-500/50',
    iconColor: 'text-green-400',
    steps: [
      {
        type: 'single',
        achievementId: 'reading_campaign',
        context: 'Passo 1 (Base Social): Abrace as Escolas Públicas rapidamente e maximize os fundos da instituição para atingir a erradicação do analfabetismo.'
      },
      {
        type: 'branch',
        title: 'Reformas Políticas e de Classe',
        description: 'Para quebrar o poder dos antigos aristocratas, você precisa empoderar diferentes movimentos sociais simultaneamente.',
        paths: [
          {
            achievementId: 'deeds_not_words',
            context: 'Direitos Civis: Fomente a Inteligência, pesquise Feminismo e atenda ao movimento sufragista.'
          },
          {
            achievementId: 'bread_and_roses',
            context: 'Direitos Trabalhistas: Apoie os Sindicatos, passe leis de Pensão e aumente o Padrão de Vida acima de 20.'
          }
        ]
      },
      {
        type: 'single',
        achievementId: 'cosmopolitan',
        context: 'Passo 3 (Inclusão): Aprovar leis de Multiculturalismo fará com que seu país rico e livre atraia todos os tipos de imigrantes de culturas secundárias.'
      },
      {
        type: 'single',
        achievementId: 'no_gods_no_masters',
        context: 'Passo Final: Aproveite o poder popular construído e faça a transição final de uma República para uma Anarquia sustentável, liderando o ranking de SoL.'
      }
    ]
  }
];
