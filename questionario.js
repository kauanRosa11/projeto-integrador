const perguntas = [
    {
      texto: "Você tem alguma restrição para alguma atividade física?",
      opcoes: ["Nenhuma", "Lesão ou dor nas articulações", "Problemas na coluna ou postura", "Problema cárdiaco ou respiratório"],
      valores: [3, 2, 1, 0],
      feedbacks: [
        "Excelente! Isso facilita muito na práticas de atividades físicas",
        "Poxa! Vamos te recomendar alguns vídeos pra ajudar com essas condições",
        "Putsss! Aqui estão algumas sugestões de alongamento pra corrigir esses problemas: link do videos rs",
        "Cuidado! Recomendamos você a procurar um médicos, pois esses problemas podem ser muito graves."
      ]
    },
    {
      texto: "Qual seu nível de atividade física?",
      opcoes: ["Sedentário(a) — quase não pratico atividades físicas", "Levemente ativo(a) — caminho ou me movimento durante o dia", "Moderadamente ativo(a) — pratico exercícios leves 2–3x por semana", "Ativo(a) — treino 4–5x por semana", "Atleta / alta performance"],
      valores: [4, 3, 2, 1, 0],
      feedbacks: [
        "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
        "Importante se movimentar um pouco mais 🚶‍♂️",
        "Legal, tente aumentar a frequência!",
        "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
        "Sem comentários!! Só se cuida pra não se lesionar e desejamos um boa sorte na sua carreira!"
      ]
    },
    {
      texto: "Você tem preferência por alguma atividade física?",
      opcoes: ["Musculação / academia", "Caminhada ou corrida", "Yoga ou pilates", "Dança (zumba, fitdance, etc.)", "Esportes coletivos (futebol, vôlei, basquete…)", "Lutas e artes marciais (jiu-jítsu, muay thai, boxe, etc.)", "Natação ou hidroginástica", "Treinos funcionais ou crossfit", "Alongamento ou mobilidade", "Ainda não encontrei uma atividade que eu goste"],
      valores: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      feedbacks: [
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Legall! Fazer o que se sentimos dispostos a fazer é a melhor coisa!",
        "Poxa! Experimenta fazer um pouco de cada, até que você encontre alguma que você identifique"
      ]
    },
    {
        texto: "Como anda a qualidade do sono?",
        opcoes: ["Profundo e reparador (acordo com energia)", "Leve, mas suficiente", "Interrompido, com despertares frequentes", "Pouco reparador (acordo cansado(a))", "Insatisfatório (tenho insônia ou distúrbios do sono diagnosticados)"],
        valores: [4, 3, 2, 1, 0],
        feedbacks: [
          "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
          "Importante se movimentar um pouco mais 🚶‍♂️",
          "Legal, tente aumentar a frequência!",
          "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
          "Sem comentários!! Só se cuida pra não se lesionar e desejamos um boa sorte na sua carreira!"
        ]
      },
      {
        texto: "Quantas horas você dorme?",
        opcoes: ["Menos de 5h", "Entre 5h e 7h", "Entre 7h e 9h", "Mais de 9h"],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
          "Importante se movimentar um pouco mais 🚶‍♂️",
          "Legal, tente aumentar a frequência!",
          "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
        ]
      },
      {
        texto: "Qual é o seu principal objetivo neste momento?",
        opcoes: ["Melhorar a saúde física", "Reduzir o estresse e a ansiedade", "Melhorar minha alimentação", "Ter mais energia e disposição", "Emagrecer ou ganhar massa", "Melhorar o equilíbrio entre corpo e mente"],
        valores: [5, 4, 3, 2, 1, 0],
        feedbacks: [
          "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
          "Importante se movimentar um pouco mais 🚶‍♂️",
          "Legal, tente aumentar a frequência!",
          "teste",
          "teste2",
          "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
        ]
      },
      {
        texto: "Como você descreveria sua rotina diária?",
        opcoes: ["Muito corrida, com pouco tempo para mim", "Equilibrada, consigo manter pausas e descanso", "Irregular, varia bastante de um dia para outro", "Tranquila, consigo controlar bem meus horários"],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
          "Importante se movimentar um pouco mais 🚶‍♂️",
          "Legal, tente aumentar a frequência!",
          "teste"
        ]
      },
      {
        texto: "Como você avalia seu nível  de estresse?",
        opcoes: ["Baixo — me sinto tranquilo(a) na maior parte do tempo", "Moderado — tenho momentos de tensão, mas consigo lidar", "Alto — me sinto frequentemente sobrecarregado(a)", "Muito alto — tenho dificuldade em relaxar ou dormir bem"],
        valores: [3, 2, 1, 0],
        feedbacks: [
          "top",
          "bacana",
          "eita",
          "calma"
        ]
      },
      {
        texto: "O que mais ajuda você a relaxar ou recarregar as energias?",
        opcoes: ["Atividades físicas", "Meditação ou respiração", "Passar tempo com amigos ou família", "Momentos sozinho(a)", "Hobbies (leitura, música, arte, etc.)", "Terapia ou acompanhamento psicológico"],
        valores: [5, 4, 3, 2, 1, 0],
        feedbacks: [
          "top",
          "bacana",
          "eita",
          "calma",
          "TESTE",
          "TESTEE"
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
    mensagem.textContent = p.feedbacks[i];
  }
  
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
  
    let texto = "";
    if (pontuacao >= 8) {
      texto = "🎉 Parabéns! Sua rotina está muito saudável!";
    } else if (pontuacao >= 5 && pontuacao < 8) {
      texto = "🙂 Você está indo bem, mas dá pra melhorar alguns hábitos!";
    } else {
      texto = "⚠️ Atenção: sua rotina pode estar afetando sua saúde. Que tal cuidar um pouco mais?";
    }
  
    resultadoTexto.textContent = texto;
  }
  
  function recomecar() {
    indice = 0;
    pontuacao = 0;
    mostrarPergunta();
  }
  
  mostrarPergunta();