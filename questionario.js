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
      ],
      feedbackVideos: [
        "https://www.youtube.com/embed/F1iejoRbRts",
        "https://www.youtube.com/embed/a52XdHEdei0",
        "https://www.youtube.com/embed/F1iejoRbRts",
        "https://www.youtube.com/embed/a52XdHEdei0"
      ]          
    }
    ,
  {
    texto: "Qual seu nível de atividade física?",
    opcoes: ["Sedentário(a) — quase não pratico atividades físicas", "Levemente ativo(a)", "Moderadamente ativo(a)", "Ativo(a)", "Atleta / alta performance"],
    valores: [4, 3, 2, 1, 0],
    feedbacks: [
      "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
      "Importante se movimentar um pouco mais 🚶‍♂️",
      "Legal, tente aumentar a frequência!",
      "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
      "Sem comentários!! Só se cuida pra não se lesionar e desejamos um boa sorte na sua carreira!"
    ],
    feedbackVideos: [null, null, null, null, null]
  },
  {
    texto: "Você tem preferência por alguma atividade física?",
    opcoes: ["Musculação / academia", "Caminhada ou corrida", "Yoga ou pilates", "Dança", "Esportes coletivos", "Lutas", "Natação", "Treinos funcionais", "Alongamento", "Ainda não encontrei"],
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
      "Poxa! Experimenta fazer um pouco de cada..."
    ],
    feedbackVideos: Array(10).fill(null)
  },
  {
    texto: "Como anda a qualidade do sono?",
    opcoes: ["Profundo", "Leve", "Interrompido", "Pouco reparador", "Insatisfatório"],
    valores: [4, 3, 2, 1, 0],
    feedbacks: [
      "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
      "Importante se movimentar um pouco mais 🚶‍♂️",
      "Legal, tente aumentar a frequência!",
      "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões",
      "Sem comentários!! Só se cuida pra não se lesionar e desejamos um boa sorte na sua carreira!"
    ],
    feedbackVideos: [null, null, null, null, null]
  },
  {
    texto: "Quantas horas você dorme?",
    opcoes: ["Menos de 5h", "Entre 5h e 7h", "Entre 7h e 9h", "Mais de 9h"],
    valores: [3, 2, 1, 0],
    feedbacks: [
      "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
      "Importante se movimentar um pouco mais 🚶‍♂️",
      "Legal, tente aumentar a frequência!",
      "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões"
    ],
    feedbackVideos: [null, null, null, null]
  },
  {
    texto: "Qual é o seu principal objetivo neste momento?",
    opcoes: ["Melhorar a saúde física", "Reduzir estresse", "Melhorar alimentação", "Ter mais energia", "Emagrecer / ganhar massa", "Equilíbrio corpo e mente"],
    valores: [5, 4, 3, 2, 1, 0],
    feedbacks: [
      "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
      "Importante se movimentar um pouco mais 🚶‍♂️",
      "Legal, tente aumentar a frequência!",
      "teste",
      "teste2",
      "EXCELENTE! Mas aqui vão alguns cuidados a mais pra evitar lesões"
    ],
    feedbackVideos: [null, null, null, null, null, null]
  },
  {
    texto: "Como você descreveria sua rotina diária?",
    opcoes: ["Muito corrida", "Equilibrada", "Irregular", "Tranquila"],
    valores: [3, 2, 1, 0],
    feedbacks: [
      "Aí não, campeão! Mas tudo bem, vamos começar a ajeitar essa rotina aos poucos.",
      "Importante se movimentar um pouco mais 🚶‍♂️",
      "Legal, tente aumentar a frequência!",
      "teste"
    ],
    feedbackVideos: [null, null, null, null]
  },
  {
    texto: "Como você avalia seu nível de estresse?",
    opcoes: ["Baixo", "Moderado", "Alto", "Muito alto"],
    valores: [3, 2, 1, 0],
    feedbacks: ["top", "bacana", "eita", "calma"],
    feedbackVideos: [null, null, null, null]
  },
  {
    texto: "O que mais ajuda você a relaxar?",
    opcoes: ["Atividades físicas", "Meditação", "Família/amigos", "Momentos sozinho", "Hobbies", "Terapia"],
    valores: [5, 4, 3, 2, 1, 0],
    feedbacks: ["top", "bacana", "eita", "calma", "TESTE", "TESTEE"],
    feedbackVideos: [null, null, null, null, null, null]
  }
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

mensagem.innerHTML = p.feedbacks[i];

if (p.feedbackVideos[i]) {
  mensagem.innerHTML += `
  <br><br>
  <iframe 
      width="300" 
      height="200" 
      src="${p.feedbackVideos[i]}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
  ></iframe>
`;
}
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

if (pontuacao >= 20) {
  texto = "🎉 Parabéns! Sua rotina está muito saudável!";
} else if (pontuacao >= 12) {
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