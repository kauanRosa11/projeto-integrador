const perguntas = [
  {
    texto: "Você tem alguma restrição para alguma atividade física?",
    opcoes: ["Nenhuma", "Lesão ou dor nas articulações", "Problemas na coluna ou postura", "Problema cardíaco ou respiratório"],
    valores: [3, 2, 1, 0],
    feedbacks: [
      "Excelente! Isso facilita muito nas práticas de atividades físicas",
      "Poxa! Vamos te recomendar alguns vídeos pra ajudar com essas condições",
      "Eita! Aqui estão algumas sugestões de alongamento pra corrigir esses problemas.",
      "Cuidado! Recomendamos você procurar um médico."
    ],

    videos: [
      null,
      "https://www.youtube.com/embed/sOuKeVuej9E",
      "https://www.youtube.com/embed/z_-tqr0Nfgo", 
      null
    ]
    },
    {
      texto: "Você tem preferência por alguma atividade física?",
      opcoes: ["Musculação / academia", "Caminhada ou corrida", "Yoga ou pilates", "Dança (zumba, fitdance, etc.)", "Esportes coletivos (futebol, vôlei, basquete…)", "Lutas e artes marciais (jiu-jítsu, muay thai, boxe, etc.)", "Natação ou hidroginástica", "Treinos funcionais ou crossfit", "Alongamento ou mobilidade", "Ainda não encontrei uma atividade que eu goste"],
      valores: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      feedbacks: [
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que nos sentimos dispostos a fazer é a melhor coisa!",
        "Poxa! Experimenta fazer um pouco de cada, até que você encontre alguma que você identifique."
      ]
    },
    {
        texto: "Como anda a qualidade do sono?",
        opcoes: ["Profundo e reparador (acordo com energia)", "Leve, mas suficiente", "Interrompido, com despertares frequentes", "Pouco reparador (acordo cansado(a))", "Insatisfatório (tenho insônia ou distúrbios do sono diagnosticados)"],
        valores: [4, 3, 2, 1, 0],
        feedbacks: [
          "Seu sono está muito bom e proporciona energia para o dia.",
          "Seu sono é adequado, mas pode se tornar ainda mais reparador.",
          "Seus despertares estão prejudicando a qualidade do descanso.",
          "Você dorme, mas não recupera bem as energias durante a noite.",
          "Seu sono está comprometido e merece atenção ou acompanhamento especializado."
        ],

    videos: [
      null,
      null,
      "https://www.youtube.com/embed/LxQToylvY9I", 
      "https://www.youtube.com/embed/jpSZJDl8p3A" 
    ]
      },
      {
        texto: "Quantas horas você dorme?",
        opcoes: ["Entre 7h e 9h (ideal)", "Entre 5h e 7h (bom)", "Mais de 9h (demais)", "Menos de 5h (insuficiente)" ],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "Perfeito! Você está dando ao seu corpo o descanso que ele merece!",
          "Você está quase lá, um tempinho extra de sono pode fazer maravilhas no seu dia!",
          "Uau, sono em dia e caprichado, talvez seu corpo esteja pedindo um cuidado extra!",
          "Parece que suas noites estão curtinhas, seu corpo pode gostar de um pouquinho mais de descanso!"
        ],

    videos: [
      null,
      null,
      null,
      "https://www.youtube.com/embed/maRBEvsp4nM" 
    ]
    },
       {
        texto: "Qual é o seu principal objetivo neste momento?",
        opcoes: ["Melhorar a saúde física", "Reduzir o estresse e a ansiedade", "Melhorar minha alimentação", "Ter mais energia e disposição", "Emagrecer ou ganhar massa", "Melhorar o equilíbrio entre corpo e mente"],
        valores: [5, 4, 3, 2, 1, 0],
        feedbacks: [
          "Ótimo objetivo, investir no seu corpo é investir em você!",
          "Priorizar sua paz é um passo lindo rumo ao bem-estar!",
          "Que escolha incrível, cada refeição pode ser um gesto de cuidado com você!",
          "Maravilha! Mais energia transforma o seu dia e tudo ao redor!",
          "Muito bom, seu corpo agradece cada esforço rumo à sua melhor versão!",
          "Perfeito, buscar harmonia interna é um presente poderoso para sua vida!",
        ]
    },
      {
        texto: "Como você descreveria sua rotina diária?",
        opcoes: ["Muito corrida, com pouco tempo para mim", "Equilibrada, consigo manter pausas e descanso", "Irregular, varia bastante de um dia para outro", "Tranquila, consigo controlar bem meus horários"],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "Sua rotina está puxada, você merece mais momentos só seus!",
          "Que ótimo, você está cuidando bem do seu ritmo diário!",
          "Sua rotina é imprevisível, mas pequenos ajustes podem trazer mais estabilidade!",
          "Maravilha, ter esse controle deixa o dia muito mais leve e fluido!"
        ]
    },
      {
        texto: "Como você avalia seu nível de estresse?",
        opcoes: ["Baixo — me sinto tranquilo(a) na maior parte do tempo", "Moderado — tenho momentos de tensão, mas consigo lidar", "Alto — me sinto frequentemente sobrecarregado(a)", "Muito alto — tenho dificuldade em relaxar ou dormir bem"],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "Que ótimo, manter essa serenidade é um super presente para você!",
          "Você lida bem com as tensões do dia, e pequenos respiros podem ajudar ainda mais!",
          "Você está carregando bastante coisa, merece cuidado e pausas de verdade!",
          "Seu corpo está pedindo descanso, acolher isso é um passo importante para se sentir melhor!"
        ],

    videos: [
      null,
      null,
      "https://www.youtube.com/embed/uzoYtmHck00", 
      "https://www.youtube.com/shorts/KvHLjpgQ-Ok" 
    ]
    },
      {
        texto: "O que mais ajuda você a relaxar ou recarregar as energias?",
        opcoes: ["Atividades físicas", "Meditação ou respiração", "Passar tempo com amigos ou família", "Momentos sozinho(a)", "Hobbies (leitura, música, arte, etc.)", "Terapia ou acompanhamento psicológico"],
        valores: [5, 4, 3, 2, 1, 0],
        feedbacks: [
          "Ótimo, seu corpo e sua mente realmente brilham quando você se movimenta!",
          "Maravilha, essas pausas profundas fazem toda a diferença no seu bem-estar!",
          "Que lindo, estar com quem você ama recarrega suas energias de um jeito único!",
          "Perfeito, seu silêncio e seu espaço são fontes poderosas de renovação!",
          "Incrível, seus hobbies nutrem sua criatividade e sua alma!",
          "Muito bom, buscar apoio é um gesto forte e cheio de cuidado com você!"
        ]
    },
   ];
  
  let indice = 0;
  let pontuacao = 0;
  
  const quiz = document.getElementById("quiz");
  const feedback = document.getElementById("feedback");
  const mensagem = document.getElementById("mensagem");
  const btnProxima = document.getElementById("proxima");
  const resultadoFinal = document.getElementById("resultado-final");
  const resultadoTexto = document.getElementById("resultado");
  const proxPerguntas = document.getElementById("proxPergunta");
   

  function mostrarPergunta() {
    feedback.classList.add("hidden");
    resultadoFinal.classList.add("hidden");
    quiz.classList.remove("hidden");
  
    const p = perguntas[indice];
    quiz.innerHTML = `
      <h2>${p.texto}</h2>
      ${p.opcoes.map((opcao, i) => `
        <div class="opcao" onclick="verificar(${i})">${opcao}</div>
      `).join("")}
    `;
  }
  
  function verificar(i) {
    const p = perguntas[indice];
    pontuacao += p.valores[i];
  
    quiz.classList.add("hidden");
    feedback.classList.remove("hidden");
    mensagem.innerHTML = `
    <p>${p.feedbacks[i]}</p>
    ${p.videos && p.videos[i] ? `
      <iframe 
        width="100%" 
        height="200" 
        style="border-radius: 10px; margin-top: 15px;"
        src="${p.videos[i]}" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
    ` : ""}
  `;  }
  
  btnProxima.addEventListener("click", () => {
    feedback.classList.add("hidden"); 
    indice++;
    if (indice < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  });
  
  
  function mostrarResultado() {
    feedback.classList.add("hidden");
    resultadoFinal.classList.remove("hidden");
    proxPerguntas.classList.add('hidden')
  
    let texto = "";
    if (pontuacao >= 25) {
      texto = "Parabéns! Sua rotina está muito saudável!";
    } else if (pontuacao >= 19 && pontuacao < 25) {
      texto = "Você está indo bem, mas dá pra melhorar alguns hábitos!";
    } else {
      texto = "Atenção: sua rotina pode estar afetando sua saúde. Que tal cuidar um pouco mais?";
    }
  
    resultadoTexto.textContent = texto;
  }
  
  function recomecar() {
    indice = 0;
    pontuacao = 0;
    mostrarPergunta();
  }
  
  mostrarPergunta();