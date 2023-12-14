const questions = [
  {
    "question": "Qual é a origem histórica do Halloween?",
    "answers": [
      { "option": "Celebrações pagãs celtas.", "correct": true },
      { "option": "Festividades romanas.", "correct": false },
      { "option": "Tradições egípcias.", "correct": false },
      { "option": "Rituais vikings.", "correct": false },
      { "option": "Festas da Mesopotâmia.", "correct": false },
      { "option": "Rituais persas.", "correct": false }
    ]
  },
  {
    "question": "Qual é o nome do objeto esculpido e iluminado no Halloween?",
    "answers": [
      { "option": "Abóbora assombrada.", "correct": false },
      { "option": "Abóbora fantasma.", "correct": false },
      { "option": "Abóbora encantada.", "correct": false },
      { "option": "Jack-o'-lantern.", "correct": true },
      { "option": "Abóbora mística.", "correct": false },
      { "option": "Jack da Lanterna.", "correct": false }
    ]
  },
  {
    "question": "Por que as pessoas usam fantasias no Halloween?",
    "answers": [
      { "option": "Para imitar super-heróis.", "correct": false },
      { "option": "Para proteger-se de espíritos malignos.", "correct": true },
      { "option": "Para brincar de esconde-esconde.", "correct": false },
      { "option": "Para representar personagens assustadores.", "correct": false },
      { "option": "Por diversão.", "correct": false },
      { "option": "Para fazer um desfile.", "correct": false }
    ]
  },
  {
    "question": "Qual é a expressão usada para pedir doces durante o Halloween?",
    "answers": [
      { "option": "Doçura ou travessura!", "correct": false },
      { "option": "Doces ou sustos!", "correct": false },
      { "option": "Gostosuras ou travessuras!", "correct": true },
      { "option": "Balas ou bruxarias!", "correct": false },
      { "option": "Truque ou guloseima!", "correct": false },
      { "option": "Dulce ou desafio!", "correct": false }
    ]
  },
  {
    "question": "Qual é a famosa série animada de televisão que apresenta um episódio especial de Halloween a cada ano?",
    "answers": [
      { "option": "Os Simpsons.", "correct": true },
      { "option": "Scooby-Doo.", "correct": false },
      { "option": "Hora de Aventura.", "correct": false },
      { "option": "Bob Esponja.", "correct": false },
      { "option": "A Família Addams.", "correct": false },
      { "option": "Rick and Morty.", "correct": false }
    ]
  },
  {
    "question": "Em que dia é comemorado o Halloween?",
    "answers": [
      { "option": "31 de outubro.", "correct": true },
      { "option": "1º de novembro.", "correct": false },
      { "option": "30 de outubro.", "correct": false },
      { "option": "31 de dezembro.", "correct": false },
      { "option": "25 de outubro.", "correct": false },
      { "option": "5 de novembro.", "correct": false }
    ]
  },
  {
    "question": "Qual era a oferenda tradicional celta durante o Samhain, precursor do Halloween?",
    "answers": [
      { "option": "Velas acesas.", "correct": false },
      { "option": "Comida para os mortos.", "correct": true },
      { "option": "Poções mágicas.", "correct": false },
      { "option": "Flores frescas.", "correct": false },
      { "option": "Frutas silvestres.", "correct": false },
      { "option": "Água purificada.", "correct": false }
    ]
  },
  {
    "question": "Por que as pessoas costumavam usar máscaras durante o Halloween na antiguidade?",
    "answers": [
      { "option": "Para esconder sua identidade.", "correct": false },
      { "option": "Para assustar os vizinhos.", "correct": false },
      { "option": "Para afastar espíritos malignos.", "correct": true },
      { "option": "Por diversão.", "correct": false },
      { "option": "Para se protegerem do sol.", "correct": false },
      { "option": "Por tradição teatral.", "correct": false }
    ]
  },
  {
    "question": "Qual era a função das fogueiras durante as celebrações do Samhain?",
    "answers": [
      { "option": "Iluminar a noite escura.", "correct": true },
      { "option": "Cozinhar alimentos.", "correct": false },
      { "option": "Aquecer o ambiente.", "correct": false },
      { "option": "Espantar insetos.", "correct": false },
      { "option": "Criar uma atmosfera mística.", "correct": false },
      { "option": "Assar abóboras.", "correct": false }
    ]
  },
  {
    "question": "Qual festival cristão influenciou o Dia das Bruxas?",
    "answers": [
      { "option": "Dia de Todos os Santos.", "correct": true },
      { "option": "Natal.", "correct": false },
      { "option": "Páscoa.", "correct": false },
      { "option": "Dia de São Patrício.", "correct": false },
      { "option": "Corpus Christi.", "correct": false },
      { "option": "Quaresma.", "correct": false }
    ]
  },
  {
    "question": "Qual era a crença dos celtas sobre o Samhain, precursor do Halloween?",
    "answers": [
      { "option": "Porta para o mundo dos vivos.", "correct": false },
      { "option": "Fim do verão.", "correct": true },
      { "option": "Dia de colheita.", "correct": false },
      { "option": "Ano novo celta.", "correct": false },
      { "option": "Reunião de tribos.", "correct": false },
      { "option": "Início das guerras.", "correct": false }
    ]
  },
  {
    "question": "Qual é o nome da celebração cristã que ocorre no dia seguinte ao Halloween?",
    "answers": [
      { "option": "Dia de Finados.", "correct": true },
      { "option": "Natal.", "correct": false },
      { "option": "Quaresma.", "correct": false },
      { "option": "Páscoa.", "correct": false },
      { "option": "Dia de São Patrício.", "correct": false },
      { "option": "Carnaval.", "correct": false }
    ]
  },
  {
    "question": "Qual é o nome da lenda popular sobre um ser que vagueia no Halloween?",
    "answers": [
      { "option": "Jack, o Iluminado.", "correct": false },
      { "option": "Fantasma da Meia-Noite.", "correct": false },
      { "option": "Lenda do Cavaleiro sem Cabeça.", "correct": true },
      { "option": "Assombração da Noite.", "correct": false },
      { "option": "Espírito da Abóbora.", "correct": false },
      { "option": "Aparição da Escuridão.", "correct": false }
    ]
  },
  {
    "question": "O que as pessoas costumavam fazer para afastar os espíritos no Halloween?",
    "answers": [
      { "option": "Usar amuletos de proteção.", "correct": true },
      { "option": "Acender velas brancas.", "correct": false },
      { "option": "Recitar feitiços antigos.", "correct": false },
      { "option": "Dançar em círculos.", "correct": false },
      { "option": "Cantar músicas assustadoras.", "correct": false },
      { "option": "Preparar poções mágicas.", "correct": false }
    ]
  },
  {
    "question": "Qual é o nome do feriado mexicano que tem semelhanças com o Halloween?",
    "answers": [
      { "option": "Dia de los Muertos.", "correct": true },
      { "option": "Fiesta de las Almas.", "correct": false },
      { "option": "Noche de Brujas.", "correct": false },
      { "option": "Fiesta de los Fantasmas.", "correct": false },
      { "option": "Día de la Brujería.", "correct": false },
      { "option": "Celebración de las Calaveras.", "correct": false }
    ]
  },
  {
    "question": "O que as pessoas acreditavam que poderia acontecer se não oferecessem presentes aos espíritos no Halloween?",
    "answers": [
      { "option": "Perder a colheita.", "correct": false },
      { "option": "Atrair doenças.", "correct": false },
      { "option": "Sofrer azar por um ano.", "correct": true },
      { "option": "Chamar a ira dos deuses.", "correct": false },
      { "option": "Serem amaldiçoados.", "correct": false },
      { "option": "Perder a proteção espiritual.", "correct": false }
    ]
  }
]


function getRandomQuestions(questions, count) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

let currentIndex = 0;
let questionsCorrect = 0;
let selectedQuestions = getRandomQuestions(questions, 10);
let errorCount = 0;
const maxErrors = 3;
let errosDisplay = maxErrors

function loadQuestion() {
  const question = document.querySelector(".question");
  const answers = document.querySelector(".answers");
  const spnQtd = document.querySelector(".spnQtd");
  const scoreDisplay = document.querySelector(".score");
  const correctAnswersDisplay = document.querySelector(".correct-answers");
  const error = document.querySelector(".qtd-erro")
  error.innerHTML = `tentativas: ${errosDisplay}`

  spnQtd.innerHTML = `${currentIndex + 1}/${selectedQuestions.length}`;
  const item = selectedQuestions[currentIndex];
  question.innerHTML = item.question;
  answers.innerHTML = ""; // Limpa as respostas anteriores

  item.answers.forEach((answer, index) => {
    const div = document.createElement("div");
    const button = document.createElement("button");

    button.classList.add("answer");
    button.dataset.correct = answer.correct;
    button.textContent = answer.option;

    button.addEventListener("click", nextQuestion);
    div.appendChild(button);
    answers.appendChild(div);
  });

  // Atualiza o score e as respostas corretas
  scoreDisplay.innerHTML = `Score: ${questionsCorrect * 100}`;
  correctAnswersDisplay.innerHTML = `Respostas corretas: ${questionsCorrect}`;
}

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  } else {
    errorCount++;
    errosDisplay--; // Diminui as tentativas restantes
    const error = document.querySelector(".qtd-erro");
    error.innerHTML = `tentativas: ${errosDisplay}`; // Atualiza o texto na interface

    // Verifica se atingiu o limite de erros
    if (errorCount === maxErrors) {
      errorCount = 0;
      finish(); // Chama a função finish se excedeu o limite de erros
      return;
    }
  }

  if (currentIndex < selectedQuestions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  const textFinish = document.querySelector(".span-score");
  const contentFinish = document.querySelector(".finish");
  const scoreDisplay = document.querySelector(".score");
  const correctAnswersDisplay = document.querySelector(".correct-answers");
  const contentStatic = document.querySelector(".content-static")
  const mainGame = document.querySelector(".main-game")

  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${selectedQuestions.length}`;
  contentFinish.style.display = "flex";
  contentStatic.style.display = "none";
  mainGame.classList.add("finish-game")
  scoreDisplay.innerHTML = `Score final: ${questionsCorrect * 100}`;
  correctAnswersDisplay.innerHTML = `Total de respostas corretas: ${questionsCorrect}`;
  const userScore = questionsCorrect * 100
  fetch('/admin/game-finished', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ score: userScore }), // Envia a pontuação para o servidor
  })
    .then((response) => {
      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Faz algo se a pontuação for enviada com sucesso
        console.log(response)
      } else {
        // Lida com erros se a requisição falhar
      }
    })
    .catch((error) => {
      console.log(error)
      // Lida com erros de rede ou outros erros
    });
}


function initializeGame() {
  const content = document.querySelector(".content");
  const contentFinish = document.querySelector(".finish");
  const btnRestart = document.querySelector(".finish button");
  const mainGame = document.querySelector(".main-game");
  const contentStatic = document.querySelector(".content-static")

  btnRestart.onclick = () => {
    // Remova a classe que indica que o jogo foi concluído
    mainGame.classList.remove("finish-game");
    contentStatic.style.display = "block"
    content.style.display = "flex";
    contentFinish.style.display = "none";
    currentIndex = 0;
    questionsCorrect = 0;
    errosDisplay = 3
    // Obtenha novas perguntas
    selectedQuestions = getRandomQuestions(questions, 10);

    // Chame a função para carregar a próxima pergunta
    loadQuestion();
  };

  loadQuestion();
}


document.addEventListener("DOMContentLoaded", () => {
  const verPodioBtn = document.querySelector(".podiumBtn");

  verPodioBtn.addEventListener("click", () => {
    window.location.href = "/admin/podium";
  });
  initializeGame();
});