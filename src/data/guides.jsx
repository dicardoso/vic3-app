import { Landmark, Swords, Navigation, Globe, Target, Users, Shield, Star } from 'lucide-react';

export const countryGuides = [
  {
    id: 'usa',
    name: 'Estados Unidos',
    focus: 'Imigração em Massa, Expansão Territorial, Guerra Civil',
    difficulty: 'Fácil a Médio',
    overview: 'Os EUA possuem o maior potencial demográfico e econômico do jogo devido aos bônus naturais de atração de imigrantes e vastas reservas de recursos (incluindo Ouro e Petróleo no final do jogo).',
    earlyGame: 'Seu foco absoluto no início deve ser o Destino Manifesto. Colonize as planícies antes da Grã-Bretanha/México. Pressione o México via guerra para pegar o Texas, Califórnia e o Novo México. Mantenha relações cordiais com as potências europeias para que elas não intervenham nas suas guerras americanas.',
    midLateGame: 'A Guerra Civil é quase inevitável se você tentar abolir a Escravidão. Muitas vezes é melhor forçar a revolta cedo, vencer os Confederados, e unificar o país sob leis liberais (Multiculturalismo, Fronteiras Abertas). A partir de 1880, construa indústrias pesadas e aproveite o fluxo infinito de imigrantes europeus para inflar seu PIB até o topo global.',
    relatedAchievements: ['Bandeira Enxameada de Estrelas', 'Vá para o Oeste, Jovem!', 'Notas Sobre o Estado da Virgínia', 'Robber Baron', 'Destino Manifesto Mexicano (como oponente)'],
    flagColor: 'bg-blue-900',
    icon: <Landmark className="w-8 h-8 text-white" />
  },
  {
    id: 'uk',
    name: 'Reino Unido',
    focus: 'Hegemonia Naval, Imperialismo de Livre Comércio, Colonização Global',
    difficulty: 'Fácil',
    overview: 'A Grã-Bretanha começa como a maior superpotência econômica e naval do mundo em 1836. Seu jogo é de manutenção de poder e expansão de mercados em vez de formação de nação.',
    earlyGame: 'Utilize sua frota para abrir mercados vitais na Ásia (inicie a Guerra do Ópio rapidamente contra Qing para pegar Hong Kong e reparações). Mantenha a Companhia das Índias Orientais sob controle. Construa universidades em casa e portos nas colônias.',
    midLateGame: 'O desafio britânico é gerenciar o tamanho do império. Conduza a Partilha da África garantindo as rotas do Congo e do Níger. Evite guerras terrestres massivas na Europa; em vez disso, financie aliados (diplomacia do talão de cheques) e use bloqueios navais para esganar rivais como a França ou a Alemanha.',
    relatedAchievements: ['Pax Britannica', 'O Sol Nunca se Põe', 'Balela! (Poppycock)', 'Libra Esterlina', 'O Leão Britânico'],
    flagColor: 'bg-red-800',
    icon: <Navigation className="w-8 h-8 text-white" />
  },
  {
    id: 'france',
    name: 'França',
    focus: 'Demografia Estagnada, Potência Terrestre/Naval, Agitação Política',
    difficulty: 'Médio',
    overview: 'A França possui um exército formidável e uma economia rica, mas sofre historicamente com crescimento populacional lento e constantes revoluções (Monarquistas vs Bonapartistas vs Republicanos).',
    earlyGame: 'Assegure sua base de recursos na Argélia. A França começa forte o suficiente para desafiar a Prússia ou a Grã-Bretanha cedo. Tente impedir que a Prússia unifique a Alemanha ou roube a Renânia (Rhineland). Fomente alianças com a Áustria ou Rússia.',
    midLateGame: 'Aproveite seus bônus de Inovação para dominar a Belle Époque. Você enfrentará a Comuna de Paris e agitadores radicais. Decida se quer suprimir os socialistas ou abraçar a República de Conselhos. Use seu capital maciço para financiar a construção do Canal do Suez ou do Panamá e colonize a África Ocidental.',
    relatedAchievements: ['L\'Hexagone', 'Belle Époque', 'A Comuna de Paris', 'O 18 de Brumário', 'L\'Etat, c\'est moi'],
    flagColor: 'bg-blue-600',
    icon: <Globe className="w-8 h-8 text-white" />
  },
  {
    id: 'prussia',
    name: 'Prússia / Império Alemão',
    focus: 'Militarismo, Unificação, Rápida Industrialização',
    difficulty: 'Médio',
    overview: 'O clássico jogo militar terrestre de Victoria 3. Você começa forte militarmente, mas politicamente fragmentado. O objetivo central é unificar a Alemanha e dominar a Europa Continental.',
    earlyGame: 'Concentre-se nas tecnologias militares (Táticas de Infantaria). Melhore relações com a Rússia e a Grã-Bretanha para isolar a Áustria. Lance a Guerra de Liderança contra a Áustria cedo. Traga os menores estados alemães para sua União Aduaneira e forme a Confederação da Alemanha do Norte.',
    midLateGame: 'A guerra contra a França para retomar Alsácia-Lorena é o teste final para formar o Império Alemão. Uma vez unificado, o país tem as maiores reservas de carvão e ferro da Europa. Industrialize furiosamente e construa um Bloco de Poder. Eventualmente, você precisará de portos e colônias africanas para não ficar para trás na corrida por borracha e petróleo.',
    relatedAchievements: ['Três Vivas', 'Ferro e Sangue', 'A Place in the Sun', 'Um Conto de Duas Cidades', 'O Único e a Sua Propriedade'],
    flagColor: 'bg-slate-700',
    icon: <Swords className="w-8 h-8 text-white" />
  },
  {
    id: 'ottoman',
    name: 'Império Otomano',
    focus: 'Corridas contra o Tempo (Tanzimat), Modernização, Tensões Étnicas',
    difficulty: 'Difícil',
    overview: 'Conhecido como o "Homem Doente da Europa", você começa obsoleto, falido e com uma contagem regressiva. Se não completar as reformas do Tanzimat em 20 anos, o Império será rebaixado permanentemente a uma potência menor.',
    earlyGame: 'É estressante. Concentre cada recurso do Estado em cumprir as entradas do Diário do Tanzimat. Reforme o exército, recupere a Síria do Egito na primeira década (consiga um aliado europeu forte para ajudar) e passe a lei de Educação/Burocracia. Suprima as constantes revoltas nos Bálcãs.',
    midLateGame: 'Se você sobreviver ao Tanzimat, a recompensa é imensa. Você controlará vastas reservas de petróleo cru no Oriente Médio e terá uma população gigantesca. O jogo muda da sobrevivência para a retaliação. Expanda-se na Pérsia, unifique o mundo islâmico e torne-se o maior produtor global.',
    relatedAchievements: ['Tanzimat', 'O Homem Saudável da Europa', 'O Homem Doente da Europa', 'O Homem Doente Recupera-se'],
    flagColor: 'bg-red-800',
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    id: 'russia',
    name: 'Rússia',
    focus: 'Expansão Territorial, Abolição da Servidão, O Grande Jogo',
    difficulty: 'Médio',
    overview: 'A Rússia é um colosso demográfico e territorial que começa com um atraso tecnológico e social severo. O potencial bruto é incomparável, mas modernizar o país sem causar colapso interno é o verdadeiro desafio.',
    earlyGame: 'O seu primeiro grande obstáculo é abolir a Servidão. Isso enfurecerá os Latifundiários (Landowners). Tente industrializar focado em madeira, ferro e ferramentas para construir uma base para os capitalistas, enfraquecendo a nobreza lentamente. Expanda-se na Ásia Central e no Cáucaso.',
    midLateGame: 'Após libertar os servos e passar leis de educação, a sua literacia e inovação dispararão. O "Grande Jogo" contra a Grã-Bretanha pelo domínio da Pérsia e do Afeganistão ditará a sua política externa. No final do jogo, com o recrutamento em massa, o seu exército será imparável, mas cuidado com revoluções comunistas (ou abrace-as para conquistas específicas).',
    relatedAchievements: ['O Grande Jogo', 'O Urso Russo', 'Fim da Servidão', 'A Pátria Chama!'],
    flagColor: 'bg-yellow-700',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    id: 'austria',
    name: 'Império Austríaco',
    focus: 'Hegemonia Alemã, Gestão Multiétnica, Conservadorismo',
    difficulty: 'Médio',
    overview: 'A Áustria domina a Europa Central, mas é um barril de pólvora de culturas diferentes. O seu objetivo principal é manter o império unido enquanto impede a Prússia de unificar a Alemanha sob a sua alçada.',
    earlyGame: 'Suprima qualquer movimento radical e fortaleça a sua aliança com as nações do sul da Alemanha. O confronto com a Prússia pela Liderança Alemã é inevitável; certifique-se de que tem um exército moderno e idealmente alie-se à Rússia ou à França para esmagar as ambições prussianas e tomar a Silésia.',
    midLateGame: 'Lidar com a primavera dos povos e os nacionalismos internos (especialmente Húngaros e Italianos) exigirá jogo de cintura com as leis de cidadania (Multiculturalismo) ou uma força policial brutal. Industrialize a Boémia e a Áustria no seu núcleo, e domine a região dos Balcãs à medida que o Império Otomano recua.',
    relatedAchievements: ['Ressurgimento Habsburgo', 'Hegemônico', 'Juramento de Fidelidade'],
    flagColor: 'bg-stone-600',
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    id: 'japan',
    name: 'Japão',
    focus: 'Isolacionismo para Superpotência, Restauração Meiji, Expansão Asiática',
    difficulty: 'Médio a Difícil',
    overview: 'Começa totalmente isolado do mercado global e governado pelo retrógrado Xogunato. A campanha do Japão é uma das mais gratificantes: passar do feudalismo para uma superpotência industrial e militar em poucas décadas.',
    earlyGame: 'Paciência é a chave. Fomente os Industriais e a Inteligência para diminuir o poder do Xogum. Quando for forçado a abrir o mercado pelas potências ocidentais (ou fizer isso voluntariamente), use a turbulência para desencadear ou forçar pacificamente a Restauração Meiji.',
    midLateGame: 'Após a Restauração, o seu objetivo é a modernização frenética. Construa universidades e copie as indústrias ocidentais. Crie um exército moderno e volte os seus olhos para a Coreia e a Manchúria. Terá de enfrentar a China Qing (e possivelmente a Rússia) para estabelecer o seu império no Pacífico.',
    relatedAchievements: ['Restauração Meiji', 'Governante do Oriente', 'Fim da Servidão'],
    flagColor: 'bg-red-800',
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    id: 'spain',
    name: 'Espanha',
    focus: 'Reconstrução de Império, Guerras Carlistas, Milagre Económico',
    difficulty: 'Médio',
    overview: 'Uma antiga glória que começa ferida, tendo perdido a maioria das suas colónias e prestes a entrar numa guerra civil. É uma excelente nação para aprender a recuperar economias e lidar com a política interna.',
    earlyGame: 'A Guerra Carlista vai acontecer. Prepare-se militarmente e tente manter a economia básica (roupas, móveis, ferramentas) a funcionar. Após derrotar os rebeldes, estabilize o país e inicie a alfabetização da sua população. Colonize os pequenos enclaves africanos e tente recuperar influência nas Américas ou nas Filipinas.',
    midLateGame: 'Concentre-se em completar as missões de "Regeneração Económica". A Península Ibérica tem excelentes recursos de ferro e carvão no norte. Transforme a Espanha numa potência liberal e industrial para atrair imigrantes e, se for ambicioso, recupere o estatuto de Grande Potência subjugando vizinhos ou aliados falidos.',
    relatedAchievements: ['Bourbon para Todos!', 'Deus, Pátria, Rei!', 'O Milagre Espanhol'],
    flagColor: 'bg-yellow-500',
    icon: <Star className="w-8 h-8 text-white" />
  },
  {
    id: 'brazil',
    name: 'Império do Brasil',
    focus: 'Abolição da Escravatura, Hegemonia Sul-Americana, Diplomacia Magnânima',
    difficulty: 'Fácil a Médio',
    overview: 'O gigante da América do Sul. Começa a lidar com revoltas regionais (Farrapos) e uma economia fortemente dependente do trabalho escravo, mas sob a liderança de D. Pedro II tem um enorme potencial de crescimento pacífico.',
    earlyGame: 'Esmague as revoltas no sul (Piratini) e no norte (Grão-Pará) imediatamente. O seu maior desafio diplomático interno é abolir a escravatura sem causar uma guerra civil que destrua o império. Use a enorme popularidade de Pedro II para fortalecer a Inteligência e os Industriais.',
    midLateGame: 'Após a abolição, foque em atrair imigrantes europeus promulgando o Multiculturalismo e a Liberdade Religiosa. Expanda a sua influência sobre os vizinhos do Rio da Prata e dos Andes (seja economicamente através da sua União Aduaneira ou militarmente). Industrialize o Sudeste para substituir as importações europeias.',
    relatedAchievements: ['O Magnânimo', 'Eu Não Votei no Pedro', 'El Obrero', 'Trabalho do Diabo'],
    flagColor: 'bg-green-700',
    icon: <Landmark className="w-8 h-8 text-white" />
  }
];