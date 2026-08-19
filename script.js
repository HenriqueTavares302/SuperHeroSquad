/* =========================================================
   SUPER HERO SQUAD — script principal
   ---------------------------------------------------------
   Para usar suas próprias imagens: preencha o campo "imagem"
   de um herói com o caminho do arquivo, ex.:
   imagem: "imagens/homem-aranha.jpg"
   Se ficar vazio, o card usa o selo de tinta gerado em CSS.
   ========================================================= */

const HEROIS = [
  /* ---------------- MARVEL ---------------- */
  {
    nome: "Homem-Aranha",
    iniciais: "HA",
    identidade: "Peter Parker",
    universo: "Marvel",
    cor: "#D6202B",
    imagem: "imagens/homem-aranha.jpg",
    resumo: "Um estudante comum que aprendeu do jeito mais duro o preço de não agir.",
    origem: "Peter Parker era um adolescente tímido e bom em ciências quando foi picado por uma aranha alterada em laboratório durante uma feira científica. Ganhou força, aderência e um sentido de perigo que avisa antes do golpe chegar. No começo usou tudo isso para ganhar dinheiro na televisão e ignorou um assalto que não era problema dele — até descobrir que o mesmo ladrão havia matado seu tio Ben. Desde então carrega a ideia de que quem pode agir e não age também responde pelo resultado.",
    poderes: ["Força ampliada", "Aderência", "Sentido aranha", "Teias mecânicas"],
    estreia: "Amazing Fantasy #15 (1962)",
    base: "Nova York",
    equipe: "Vingadores"
  },
  {
    nome: "Homem de Ferro",
    iniciais: "HF",
    identidade: "Tony Stark",
    universo: "Marvel",
    cor: "#E0A020",
    imagem: "imagens/homem-de-ferro.jpg",
    resumo: "Vendeu armas por anos, até levar um tiro do próprio catálogo.",
    origem: "Tony Stark herdou uma indústria bilionária de armamentos e vivia disso sem perguntar muito para onde iam as encomendas. Numa demonstração em zona de guerra foi ferido por estilhaços e sequestrado, obrigado a montar um míssil para os captores. Em vez disso, montou uma armadura: primeiro para manter o coração batendo, depois para sair de lá. Voltou como Homem de Ferro decidido a desmontar o estrago que ajudou a espalhar pelo mundo.",
    poderes: ["Armadura blindada", "Voo", "Raios repulsores", "Gênio em engenharia"],
    estreia: "Tales of Suspense #39 (1963)",
    base: "Nova York",
    equipe: "Vingadores"
  },
  {
    nome: "Capitão América",
    iniciais: "CA",
    identidade: "Steve Rogers",
    universo: "Marvel",
    cor: "#2A4C9B",
    imagem: "imagens/capitao-america.jpg",
    resumo: "Foi escolhido justamente por ser fraco e insistir mesmo assim.",
    origem: "Steve Rogers era magro, doente e reprovado várias vezes no alistamento durante a Segunda Guerra. Foi aceito como voluntário do Projeto Renascimento porque os cientistas queriam alguém que soubesse o que é ser pequeno. O soro do supersoldado levou o corpo dele ao limite humano, e o programa morreu junto com seu criador logo depois. Anos mais tarde, uma missão terminou com Rogers congelado no Ártico — e ele acordou décadas depois num mundo que já tinha seguido sem ele.",
    poderes: ["Físico no limite humano", "Escudo de vibranium", "Estrategista", "Liderança"],
    estreia: "Captain America Comics #1 (1941)",
    base: "Nova York",
    equipe: "Vingadores"
  },
  {
    nome: "Thor",
    iniciais: "TH",
    identidade: "Thor Odinson",
    universo: "Marvel",
    cor: "#4A7FB5",
    imagem: "imagens/thor.jpg",
    resumo: "Um príncipe arrogante mandado para a Terra até aprender a merecer o martelo.",
    origem: "Herdeiro do trono de Asgard, Thor era poderoso e impaciente na mesma medida. Odin o baniu para a Terra sem memória nem força, com o Mjolnir preso a um encantamento: só levanta o martelo quem for digno dele. Vivendo como humano, precisou descobrir na marra o que é responsabilidade por outras pessoas. Quando finalmente conseguiu erguer a arma de novo, o poder tinha virado escolha, não herança.",
    poderes: ["Força asgardiana", "Domínio do trovão", "Mjolnir", "Longevidade"],
    estreia: "Journey into Mystery #83 (1962)",
    base: "Asgard",
    equipe: "Vingadores"
  },
  {
    nome: "Hulk",
    iniciais: "HK",
    identidade: "Bruce Banner",
    universo: "Marvel",
    cor: "#4E9B3E",
    imagem: "imagens/hulk.jpg",
    resumo: "O acidente aconteceu porque ele parou para salvar alguém.",
    origem: "Bruce Banner era um físico responsável por um teste de bomba gama no deserto. Ao ver um adolescente dentro da área de detonação, correu para tirá-lo de lá e recebeu a radiação em cheio. Sobreviveu, mas passou a se transformar num gigante de força quase sem limite toda vez que perde o controle emocional. A tragédia dele não é o monstro: é que quanto mais tenta se conter, mais o monstro cresce.",
    poderes: ["Força ilimitada pela fúria", "Regeneração", "Resistência extrema", "Mente científica"],
    estreia: "The Incredible Hulk #1 (1962)",
    base: "Itinerante",
    equipe: "Vingadores"
  },
  {
    nome: "Pantera Negra",
    iniciais: "PN",
    identidade: "T'Challa",
    universo: "Marvel",
    cor: "#6B3FA0",
    imagem: "",
    resumo: "Rei por herança, Pantera por prova.",
    origem: "T'Challa assumiu o trono de Wakanda depois da morte do pai, mas o título de Pantera Negra não vem só de sangue: é preciso vencer o desafio ritual e receber a erva em forma de coração, que amplia sentidos, força e reflexos. Governa a nação mais avançada do mundo, sentada sobre a maior reserva de vibranium do planeta, e passou a vida decidindo até onde Wakanda deve se abrir para fora. Protege o país como rei e o mundo como herói — nem sempre nessa ordem.",
    poderes: ["Sentidos ampliados", "Traje de vibranium", "Artes marciais", "Recursos de Wakanda"],
    estreia: "Fantastic Four #52 (1966)",
    base: "Wakanda",
    equipe: "Vingadores"
  },
  {
    nome: "Viúva Negra",
    iniciais: "VN",
    identidade: "Natasha Romanoff",
    universo: "Marvel",
    cor: "#8C1C2B",
    imagem: "",
    resumo: "Foi treinada para ser arma antes de poder escolher qualquer coisa.",
    origem: "Natasha Romanoff foi criada dentro da Sala Vermelha, um programa soviético que transformava crianças em espiãs e assassinas de elite. Recebeu treinamento militar, condicionamento e melhorias que retardam o envelhecimento. Enviada ao Ocidente em missão, acabou desertando e passou a trabalhar para o outro lado. Não tem superpoder nenhum, e é exatamente por isso que a ficha dela pesa: cada coisa que fez, fez por conta própria.",
    poderes: ["Espionagem", "Combate corpo a corpo", "Manipulação", "Bastões de choque"],
    estreia: "Tales of Suspense #52 (1964)",
    base: "Itinerante",
    equipe: "Vingadores"
  },
  {
    nome: "Doutor Estranho",
    iniciais: "DE",
    identidade: "Stephen Strange",
    universo: "Marvel",
    cor: "#B03030",
    imagem: "",
    resumo: "Perdeu as mãos de cirurgião e teve que aprender outra coisa.",
    origem: "Stephen Strange era um neurocirurgião brilhante, rico e insuportável. Um acidente de carro destruiu os nervos das mãos dele e acabou com a carreira. Depois de gastar tudo atrás de uma cura, chegou ao Himalaia procurando o Ancião — que não curou as mãos, mas ofereceu treinamento nas artes místicas. Strange virou aprendiz por orgulho e ficou por convicção, assumindo o posto de Mago Supremo, responsável por segurar as ameaças que vêm de outras dimensões.",
    poderes: ["Magia", "Projeção astral", "Portais", "Manto da Levitação"],
    estreia: "Strange Tales #110 (1963)",
    base: "Sancta Sanctorum, Nova York",
    equipe: "Vingadores"
  },

  /* ---------------- DC ---------------- */
  {
    nome: "Superman",
    iniciais: "SM",
    identidade: "Kal-El / Clark Kent",
    universo: "DC",
    cor: "#1E6FD9",
    imagem: "imagens/superman.jpg",
    resumo: "O último filho de um planeta que ninguém conseguiu salvar.",
    origem: "Krypton estava condenado e o cientista Jor-El não conseguiu convencer ninguém a tempo. Colocou o filho recém-nascido numa nave e o lançou para a Terra pouco antes do planeta explodir. O bebê caiu no Kansas e foi criado por Jonathan e Martha Kent como Clark. Sob a luz de um sol amarelo, o corpo kryptoniano ganha força, voo e resistência — mas foi a criação numa fazenda do interior que definiu o que ele faria com isso.",
    poderes: ["Força e voo", "Visão de calor", "Superaudição", "Invulnerabilidade"],
    estreia: "Action Comics #1 (1938)",
    base: "Metrópolis",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Batman",
    iniciais: "BM",
    identidade: "Bruce Wayne",
    universo: "DC",
    cor: "#2B2F45",
    imagem: "imagens/batman.jpg",
    resumo: "Nenhum poder. Só uma promessa feita aos oito anos.",
    origem: "Bruce Wayne tinha oito anos quando viu os pais serem baleados num beco de Gotham depois de uma ida ao cinema. Herdou uma fortuna e um vazio, e prometeu que ninguém mais passaria por aquilo na cidade dele. Passou anos fora do país treinando combate, criminologia, disfarce e escapismo com os melhores especialistas que o dinheiro alcançava. Voltou para transformar o próprio medo em ferramenta — e escolheu o morcego justamente porque era o que mais o assustava quando criança.",
    poderes: ["Detetive", "Artes marciais", "Tecnologia", "Estratégia"],
    estreia: "Detective Comics #27 (1939)",
    base: "Gotham City",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Mulher-Maravilha",
    iniciais: "MM",
    identidade: "Diana de Themyscira",
    universo: "DC",
    cor: "#C8102E",
    imagem: "",
    resumo: "Saiu de uma ilha escondida para devolver um piloto e nunca mais voltou de vez.",
    origem: "Diana cresceu em Themyscira, ilha das amazonas, escondida do mundo dos homens e treinada como guerreira desde criança. Quando o piloto Steve Trevor caiu no mar perto da ilha e contou que havia uma guerra lá fora, Diana disputou o direito de ser a enviada das amazonas. Chegou ao mundo exterior carregando o Laço da Verdade, as manoplas e uma ideia que soava ingênua ali: que as pessoas merecem a chance de fazer melhor.",
    poderes: ["Força divina", "Laço da Verdade", "Manoplas indestrutíveis", "Combate amazona"],
    estreia: "All Star Comics #8 (1941)",
    base: "Themyscira / Washington",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Flash",
    iniciais: "FL",
    identidade: "Barry Allen",
    universo: "DC",
    cor: "#D93A22",
    imagem: "imagens/flash.jpg",
    resumo: "O cara mais lento do laboratório virou o homem mais rápido vivo.",
    origem: "Barry Allen era perito forense da polícia de Central City e vivia atrasado para tudo. Uma noite, um raio atingiu a prateleira de produtos químicos ao lado da bancada dele e o banhou com a mistura. Em vez de matá-lo, o acidente o conectou à Força de Aceleração, o campo de energia que é a fonte da velocidade. Ele corre, pensa e cura mais rápido que qualquer pessoa — e a parte difícil virou justamente decidir onde chegar primeiro.",
    poderes: ["Supervelocidade", "Vibração molecular", "Regeneração acelerada", "Raciocínio veloz"],
    estreia: "Showcase #4 (1956)",
    base: "Central City",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Aquaman",
    iniciais: "AQ",
    identidade: "Arthur Curry",
    universo: "DC",
    cor: "#0F8F8F",
    imagem: "",
    resumo: "Filho de dois mundos que passaram a vida se ignorando.",
    origem: "Arthur Curry é filho de um faroleiro humano com uma rainha de Atlântida. Cresceu na superfície descobrindo aos poucos que respirava embaixo d'água, enxergava no escuro do fundo do mar e conseguia se comunicar com a vida marinha. A herança atlante o coloca como rei de um reino que desconfia da superfície, enquanto a superfície ri de um herói que 'fala com peixe'. Governar os dois lados sem trair nenhum é o trabalho de verdade dele.",
    poderes: ["Força anfíbia", "Telepatia marinha", "Natação em alta velocidade", "Tridente"],
    estreia: "More Fun Comics #73 (1941)",
    base: "Atlântida",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Lanterna Verde",
    iniciais: "LV",
    identidade: "Hal Jordan",
    universo: "DC",
    cor: "#2E9E4F",
    imagem: "imagens/lanterna-verde.jpg",
    resumo: "Escolhido por um anel que procurava alguém sem medo.",
    origem: "Hal Jordan era piloto de testes, imprudente no ar e teimoso no chão. Quando a nave do lanterna alienígena Abin Sur caiu na Terra, o anel de poder procurou sozinho um substituto capaz de superar o próprio medo — e escolheu Hal. O anel constrói qualquer coisa que a vontade do portador conseguir imaginar, alimentado por uma bateria em forma de lanterna. Com ele veio o cargo: proteger um setor inteiro do espaço em nome da Tropa dos Lanternas Verdes.",
    poderes: ["Construtos de energia", "Voo espacial", "Campo de força", "Força de vontade"],
    estreia: "Showcase #22 (1959)",
    base: "Coast City / Setor 2814",
    equipe: "Liga da Justiça"
  },
  {
    nome: "Ciborgue",
    iniciais: "CB",
    identidade: "Victor Stone",
    universo: "DC",
    cor: "#8A8F98",
    imagem: "",
    resumo: "O pai salvou a vida dele com a tecnologia que ele odiava.",
    origem: "Victor Stone era atleta e vivia brigando com o pai, um cientista que queria o filho no laboratório e não na quadra. Um acidente durante um experimento destruiu boa parte do corpo de Victor, e o pai o reconstruiu com próteses e sistemas experimentais para não perdê-lo. Victor acordou metade humano, metade máquina, sem ter escolhido nada disso. Levou tempo para parar de se ver como sobra do acidente e passar a se ver como alguém inteiro, só que diferente.",
    poderes: ["Corpo biônico", "Interface com sistemas", "Canhão sônico", "Força ampliada"],
    estreia: "DC Comics Presents #26 (1980)",
    base: "Detroit",
    equipe: "Liga da Justiça / Titãs"
  },
  {
    nome: "Shazam",
    iniciais: "SZ",
    identidade: "Billy Batson",
    universo: "DC",
    cor: "#E4B024",
    imagem: "",
    resumo: "Uma criança de rua com o poder de seis figuras da mitologia.",
    origem: "Billy Batson era um garoto órfão vivendo por conta própria quando foi levado até um velho mago em uma câmara escondida. O mago procurava alguém de coração puro para herdar seu poder e escolheu Billy. Ao dizer a palavra mágica, um raio o transforma num adulto com dons emprestados de seis figuras lendárias: sabedoria, força, resistência, poder, coragem e velocidade. Por dentro continua sendo um garoto — o que às vezes é o problema e às vezes é exatamente a solução.",
    poderes: ["Força e voo", "Raio mágico", "Sabedoria de Salomão", "Invulnerabilidade"],
    estreia: "Whiz Comics #2 (1940)",
    base: "Fawcett City",
    equipe: "Liga da Justiça"
  }
];

/* =========================================================
   PERGUNTAS DO QUIZ
   ========================================================= */

const PERGUNTAS = [
  {
    pergunta: "O que deu poderes ao Peter Parker?",
    alternativas: ["Um soro militar", "A picada de uma aranha alterada", "Um anel alienígena", "Radiação gama"],
    certa: 1,
    explicacao: "A picada aconteceu numa feira científica — o soro é do Capitão América e os raios gama são do Hulk."
  },
  {
    pergunta: "Bruce Banner virou o Hulk porque...",
    alternativas: [
      "Testou o soro em si mesmo",
      "Foi atingido por um raio no laboratório",
      "Correu para salvar um adolescente numa área de teste gama",
      "Recebeu uma maldição mística"
    ],
    certa: 2,
    explicacao: "Ele entrou na zona de detonação para tirar o garoto de lá e tomou a radiação em cheio."
  },
  {
    pergunta: "Quem enviou Kal-El para a Terra?",
    alternativas: ["Jonathan Kent", "Jor-El, seu pai biológico", "O Conselho de Krypton", "Lara sozinha, em segredo"],
    certa: 1,
    explicacao: "Jor-El previu a destruição de Krypton, não foi ouvido, e lançou a nave com o filho a tempo."
  },
  {
    pergunta: "O que Batman tem de poder sobre-humano?",
    alternativas: ["Reflexos ampliados", "Força de nível olímpico", "Nada — só treino, mente e recursos", "Visão noturna natural"],
    certa: 2,
    explicacao: "É justamente esse o ponto do personagem: tudo nele foi construído, nada foi ganho."
  },
  {
    pergunta: "Como Hal Jordan virou Lanterna Verde?",
    alternativas: [
      "Construiu o anel na oficina",
      "O anel do lanterna Abin Sur o escolheu",
      "Foi recrutado pela Liga da Justiça",
      "Herdou o posto do pai"
    ],
    certa: 1,
    explicacao: "O anel procura sozinho um portador capaz de superar o medo — e apontou para Hal."
  },
  {
    pergunta: "O que aconteceu com Steve Rogers depois da Segunda Guerra?",
    alternativas: [
      "Assumiu o comando da S.H.I.E.L.D.",
      "Ficou congelado e acordou décadas depois",
      "Perdeu os poderes e se aposentou",
      "Voltou a ser cientista"
    ],
    certa: 1,
    explicacao: "O congelamento no Ártico é o que faz dele um homem fora do próprio tempo."
  },
  {
    pergunta: "O que impede alguém de erguer o Mjolnir?",
    alternativas: ["O peso absurdo", "Um encantamento de dignidade", "A temperatura do metal", "Um código de acesso asgardiano"],
    certa: 1,
    explicacao: "Odin encantou o martelo: só ergue quem for digno. Foi assim que Thor teve que reconquistá-lo."
  },
  {
    pergunta: "Qual é a origem da velocidade do Flash?",
    alternativas: [
      "Um implante cibernético",
      "Treinamento amazona",
      "A Força de Aceleração, após um acidente com raio e produtos químicos",
      "Um traje experimental da polícia"
    ],
    certa: 2,
    explicacao: "O raio que atingiu a prateleira química conectou Barry Allen à Força de Aceleração."
  },
  {
    pergunta: "Por que Diana deixou Themyscira?",
    alternativas: [
      "Foi exilada pela rainha",
      "Para levar Steve Trevor de volta e enfrentar a guerra no mundo dos homens",
      "Para procurar o pai",
      "A ilha foi destruída"
    ],
    certa: 1,
    explicacao: "Ela venceu a disputa entre as amazonas pelo direito de ser a enviada ao mundo exterior."
  },
  {
    pergunta: "O que Stephen Strange perdeu antes de virar Doutor Estranho?",
    alternativas: [
      "A memória",
      "O controle das mãos, num acidente de carro",
      "A visão",
      "A família, num incêndio"
    ],
    certa: 1,
    explicacao: "O dano nos nervos acabou com a carreira de cirurgião e o empurrou até o Ancião, no Himalaia."
  }
];

const PATENTES = [
  { minimo: 9, titulo: "Lenda da Era de Ouro", texto: "Você não leu essas histórias hoje. Você já sabia." },
  { minimo: 7, titulo: "Herói titular",        texto: "Ficha limpa e capa própria. Poucos erros, nenhum grave." },
  { minimo: 4, titulo: "Vigilante de bairro",  texto: "Você resolve o problema, mas ainda quebra alguma coisa no caminho." },
  { minimo: 0, titulo: "Civil bem-intencionado", texto: "Volta lá nos painéis e lê as origens com calma. A gente espera." }
];

/* =========================================================
   ARTE DO CARD
   ========================================================= */

function selo(heroi) {
  return `<span class="chapas" aria-hidden="true">
            <span class="chapa--c">${heroi.iniciais}</span>
            <span class="chapa--m">${heroi.iniciais}</span>
            <span class="chapa--y">${heroi.iniciais}</span>
            <span class="chapa--k">${heroi.iniciais}</span>
          </span>`;
}

function conteudoArte(heroi) {
  if (heroi.imagem) {
    return `<img src="${heroi.imagem}" alt="Ilustração de ${heroi.nome}" data-heroi="${heroi.nome}">`;
  }
  return selo(heroi);
}

/* Se a imagem não carregar (arquivo ausente ou nome errado),
   o card volta para o selo de tinta em vez de quebrar. */
function ligarFallbackDeImagem(escopo) {
  escopo.querySelectorAll("img[data-heroi]").forEach((img) => {
    img.addEventListener("error", () => {
      const heroi = HEROIS.find((h) => h.nome === img.dataset.heroi);
      if (heroi) img.parentElement.innerHTML = selo(heroi);
    }, { once: true });
  });
}

function montarArte(heroi, classe) {
  return `<span class="${classe}" style="--cor-heroi:${heroi.cor}">
            ${conteudoArte(heroi)}
          </span>`;
}

/* =========================================================
   GRADE DE HERÓIS
   ========================================================= */

const grade        = document.getElementById("gradeHerois");
const mensagemVazia = document.getElementById("mensagemVazia");
const contagem     = document.getElementById("resultadoContagem");
const campoBusca   = document.getElementById("campoBusca");
const botoesFiltro = document.querySelectorAll(".filtro");

let universoAtivo = "todos";
let termoBusca = "";

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("aparecer");
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });

function heroisFiltrados() {
  const termo = termoBusca.trim().toLowerCase();
  return HEROIS.filter((h) => {
    const passaUniverso = universoAtivo === "todos" || h.universo === universoAtivo;
    const passaBusca = !termo
      || h.nome.toLowerCase().includes(termo)
      || h.identidade.toLowerCase().includes(termo);
    return passaUniverso && passaBusca;
  });
}

function renderizarGrade() {
  const lista = heroisFiltrados();

  grade.innerHTML = lista.map((heroi) => `
    <button class="painel" type="button" data-nome="${heroi.nome}">
      ${montarArte(heroi, "arte")}
      <span class="arte__universo">${heroi.universo}</span>
      <span class="painel__corpo">
        <span class="painel__nome">${heroi.nome}</span>
        <span class="painel__identidade">${heroi.identidade}</span>
        <span class="painel__resumo">${heroi.resumo}</span>
        <span class="painel__abrir">Abrir ficha &rarr;</span>
      </span>
    </button>
  `).join("");

  mensagemVazia.hidden = lista.length > 0;
  contagem.textContent = lista.length === 1
    ? "1 herói no arquivo"
    : `${lista.length} heróis no arquivo`;

  ligarFallbackDeImagem(grade);

  grade.querySelectorAll(".painel").forEach((painel) => {
    observador.observe(painel);
    painel.addEventListener("click", () => abrirFicha(painel.dataset.nome));
  });
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach((b) => b.classList.remove("filtro--ativo"));
    botao.classList.add("filtro--ativo");
    universoAtivo = botao.dataset.universo;
    renderizarGrade();
  });
});

campoBusca.addEventListener("input", (evento) => {
  termoBusca = evento.target.value;
  renderizarGrade();
});

document.querySelector("[data-limpar]").addEventListener("click", () => {
  campoBusca.value = "";
  termoBusca = "";
  universoAtivo = "todos";
  botoesFiltro.forEach((b) => b.classList.toggle("filtro--ativo", b.dataset.universo === "todos"));
  renderizarGrade();
});

/* =========================================================
   FICHA (MODAL)
   ========================================================= */

const ficha = document.getElementById("ficha");
let elementoAnterior = null;

function abrirFicha(nome) {
  const heroi = HEROIS.find((h) => h.nome === nome);
  if (!heroi) return;

  elementoAnterior = document.activeElement;

  const arte = document.getElementById("fichaArte");
  arte.style.setProperty("--cor-heroi", heroi.cor);
  arte.innerHTML = conteudoArte(heroi);
  ligarFallbackDeImagem(arte);

  document.getElementById("fichaUniverso").textContent  = `${heroi.universo} • ${heroi.equipe}`;
  document.getElementById("fichaNome").textContent      = heroi.nome;
  document.getElementById("fichaIdentidade").textContent = heroi.identidade;
  document.getElementById("fichaOrigem").textContent    = heroi.origem;
  document.getElementById("fichaEstreia").textContent   = heroi.estreia;
  document.getElementById("fichaBase").textContent      = heroi.base;
  document.getElementById("fichaEquipe").textContent    = heroi.equipe;
  document.getElementById("fichaPoderes").innerHTML     =
    heroi.poderes.map((p) => `<li>${p}</li>`).join("");

  ficha.hidden = false;
  document.body.classList.add("travado");
  ficha.querySelector(".ficha__fechar").focus();
}

function fecharFicha() {
  ficha.hidden = true;
  document.body.classList.remove("travado");
  if (elementoAnterior) elementoAnterior.focus();
}

ficha.addEventListener("click", (evento) => {
  if (evento.target.hasAttribute("data-fechar")) fecharFicha();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !ficha.hidden) fecharFicha();
});

/* =========================================================
   QUIZ
   ========================================================= */

const telaInicio   = document.getElementById("quizInicio");
const telaJogo     = document.getElementById("quizJogo");
const telaFim      = document.getElementById("quizFim");
const elContador   = document.getElementById("quizContador");
const elPlacar     = document.getElementById("quizPlacar");
const elBarra      = document.getElementById("medidorBarra");
const elPergunta   = document.getElementById("quizPergunta");
const elAlternativas = document.getElementById("quizAlternativas");
const elRetorno    = document.getElementById("quizRetorno");
const btnProxima   = document.getElementById("btnProxima");
const medidor      = document.querySelector(".medidor");

const LETRAS = ["A", "B", "C", "D"];

let indiceAtual = 0;
let acertos = 0;

function iniciarQuiz() {
  indiceAtual = 0;
  acertos = 0;
  telaInicio.hidden = true;
  telaFim.hidden = true;
  telaJogo.hidden = false;
  mostrarPergunta();
}

function mostrarPergunta() {
  const item = PERGUNTAS[indiceAtual];

  elContador.textContent = `Pergunta ${indiceAtual + 1} de ${PERGUNTAS.length}`;
  elPlacar.textContent = acertos === 1 ? "1 acerto" : `${acertos} acertos`;
  elPergunta.textContent = item.pergunta;
  elRetorno.hidden = true;
  btnProxima.hidden = true;

  const progresso = (indiceAtual / PERGUNTAS.length) * 100;
  elBarra.style.width = `${progresso}%`;
  medidor.setAttribute("aria-valuenow", indiceAtual);

  elAlternativas.innerHTML = item.alternativas.map((texto, i) => `
    <button class="alternativa" type="button" data-indice="${i}">
      <span class="alternativa__letra">${LETRAS[i]}</span>
      <span>${texto}</span>
    </button>
  `).join("");

  elAlternativas.querySelectorAll(".alternativa").forEach((botao) => {
    botao.addEventListener("click", () => responder(Number(botao.dataset.indice)));
  });
}

function responder(escolha) {
  const item = PERGUNTAS[indiceAtual];
  const botoes = elAlternativas.querySelectorAll(".alternativa");
  const acertou = escolha === item.certa;

  if (acertou) acertos++;

  botoes.forEach((botao, i) => {
    botao.disabled = true;
    if (i === item.certa) botao.classList.add("alternativa--certa");
    else if (i === escolha) botao.classList.add("alternativa--errada");
    else botao.classList.add("alternativa--apagada");
  });

  elPlacar.textContent = acertos === 1 ? "1 acerto" : `${acertos} acertos`;
  elRetorno.textContent = (acertou ? "Isso aí. " : "Não foi dessa vez. ") + item.explicacao;
  elRetorno.hidden = false;

  btnProxima.textContent = indiceAtual === PERGUNTAS.length - 1 ? "Ver resultado" : "Próxima";
  btnProxima.hidden = false;
  btnProxima.focus();
}

function avancar() {
  if (indiceAtual < PERGUNTAS.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    finalizar();
  }
}

function finalizar() {
  telaJogo.hidden = true;
  telaFim.hidden = false;

  const patente = PATENTES.find((p) => acertos >= p.minimo);

  document.getElementById("quizNota").textContent      = acertos;
  document.getElementById("quizPatente").textContent   = patente.titulo;
  document.getElementById("quizComentario").textContent = patente.texto;

  telaFim.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.getElementById("btnComecar").addEventListener("click", iniciarQuiz);
document.getElementById("btnRefazer").addEventListener("click", iniciarQuiz);
btnProxima.addEventListener("click", avancar);

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.getElementById("contadorHerois").textContent = HEROIS.length;
renderizarGrade();