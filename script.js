const quizData = [
    {
        question: "O que é batismo?",
        answer: "É deixar a velha natureza e ter nascido de novo. É morte, mas também é ressurreição."
    },
    {
        question: "O que significa a palavra batismo?",
        answer: "A palavra batismo no grego 'Baptismo', significando imergir, mergulhar, submergir."
    },
    {
        question: "Quem pode ser batizado?",
        answer: "Todo aquele que nasceu de novo."
    },
    {
        question: "Porque ser batizado?",
        answer: "Para cumprir uma ordenança."
    },
    {
        question: "Como ser batizado?",
        answer: "Crendo, obedecendo, sendo examinado, descendo às águas do Batismo."
    },
    {
        question: "O que é a ceia do Senhor?",
        answer: "É o símbolo do corpo de Cristo (pão) e o vinho. É um memorial, marco da nova aliança, é a anunciação da morte até que Ele venha."
    },
    {
        question: "O que é comunhão vertical e Horizontal?",
        answer: "Vertical com Deus e horizontal com os irmãos."
    },
    {
        question: "Quais são as duas Ordenanças?",
        answer: "Batismo e Ceia."
    },
    {
        question: "Por que tomar a Ceia do Senhor?",
        answer: "Para cumprimos sua ordem manifestando assim a nossa comunhão com Ele e com nossos irmãos."
    },
    {
        question: "Quem pode tomar a ceia do Senhor?",
        answer: "Os que cumpriram a primeira ordenança, os que andam na mesma fé, e os que estão em comunhão vertical e horizontal."
    },
    {
        question: "Quantos livros tem na biblia?",
        answer: "66"
    },
    {
        question: "Fale o que você sabe sobre Jesus",
        answer: "Filho de Deus, é Deus que se fez carne para revelar Deus aos homens, é meu salvador."
    },
    {
        question: "Você tem certeza de sua salvação? Por quê?",
        answer: "Sim, pois aceitei Jesus Cristo com meu unico salvador e acredito que Ele é filho de Deus, versiculo: oão 1.12: Porém alguns creram nele e o receberam. e a estes ele deu o direito de se tornarem filhos de Deus."
    },
    {
        question: "O que é a igreja?",
        answer: "É o corpo de Cristo, onde a cabeça é Jesus e os membros são os que verdadeiramente receberam Cristo plea Fé"
    },
    {
        question: "O batismo salva? Prove!",
        answer: "Não, somente Jesus salva. Um exemplo é o ladrão da Cruz, que não foi batizado, mas foi salvo."
    },
    {
        question: "Como será o arrebatamento?",
        answer: "É o momento onde os mortos em cristo ressuscitarão em corpos glorificados e os salvos, também transformados serão levados para o céu"
    },
    {
        question: "Explique a trindade",
        answer: "São 3 seres destintos onde cada um é plenamente e igualmente Deus, são totalmente dignos de nossa adoração. São, Deus Pai, Deus Filho e Deus Espirito Santo"
    }
];

let shuffledIndices = [];       
let currentOrderIndex = 0;      
let wronglyAnsweredIndices = [];
let isReviewSession = false;    

// 3. ELEMENTOS DO DOM:
const answerWrapperElement = document.getElementById('answer-wrapper');
const questionTextElement = document.getElementById('question-text');
const answerTextElement = document.getElementById('answer-text');
const questionCounterElement = document.getElementById('question-counter');
const reviewStatusElement = document.getElementById('review-status');
const userAnswerInputElement = document.getElementById('user-answer-input');

const showAnswerBtn = document.getElementById('show-answer-btn');
const correctBtn = document.getElementById('correct-btn');
const wrongBtn = document.getElementById('wrong-btn');


// 4. FUNÇÕES

/**
 * Prepara uma nova rodada (principal ou de revisão)
 */
function setupRound() {
    let indicesToShuffle;

    if (isReviewSession && wronglyAnsweredIndices.length > 0) {
        indicesToShuffle = [...wronglyAnsweredIndices];
        reviewStatusElement.textContent = "REVISANDO ENIGMAS"; // TEXTO DO TEMA
    } else {
        indicesToShuffle = Array.from(quizData.keys());
        isReviewSession = false;
        reviewStatusElement.textContent = "PERGAMINHO ABERTO"; // TEXTO DO TEMA
    }
    
    wronglyAnsweredIndices = [];
    currentOrderIndex = 0;

    for (let i = indicesToShuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indicesToShuffle[i], indicesToShuffle[j]] = [indicesToShuffle[j], indicesToShuffle[i]];
    }
    
    shuffledIndices = indicesToShuffle;
}

/**
 * Carrega a pergunta atual no HTML
 */
function loadQuestion() {
    const currentQuestionIndex = shuffledIndices[currentOrderIndex];
    const currentQuestion = quizData[currentQuestionIndex];
    
    questionTextElement.textContent = currentQuestion.question;
    answerTextElement.textContent = currentQuestion.answer;
    questionCounterElement.textContent = `PERGUNTA ${currentOrderIndex + 1} DE ${shuffledIndices.length}`;
    
    // Reseta o estado da interface
    userAnswerInputElement.value = "";
    answerWrapperElement.classList.add('hidden'); // Esconde a resposta
    
    // Controla a visibilidade dos botões
    showAnswerBtn.classList.remove('hidden');
    correctBtn.classList.add('hidden');
    wrongBtn.classList.add('hidden');
}

/**
 * Mostra a resposta e os botões Certo/Errado
 */
function showAnswer() {
    answerWrapperElement.classList.remove('hidden'); // Mostra a resposta
    
    // Inverte a visibilidade dos botões
    showAnswerBtn.classList.add('hidden');
    correctBtn.classList.remove('hidden');
    wrongBtn.classList.remove('hidden');
}

/**
 * Processa o resultado (Certo ou Errado) e avança
 */
function handleResult(wasCorrect) {
    if (!wasCorrect) {
        const currentQuestionIndex = shuffledIndices[currentOrderIndex];
        wronglyAnsweredIndices.push(currentQuestionIndex);
    }
    
    currentOrderIndex++;
    
    if (currentOrderIndex >= shuffledIndices.length) {
        if (wronglyAnsweredIndices.length > 0) {
            isReviewSession = true;
            // TEXTO DO TEMA
            alert(`Pergaminho completo. Vamos decifrar os ${wronglyAnsweredIndices.length} enigmas que você errou...`);
        } else {
            isReviewSession = false;
            // TEXTO DO TEMA
            alert("Pergaminho decifrado! Você provou seu conhecimento. Recomeçando o ciclo...");
        }
        setupRound();
    }
    
    loadQuestion();
}


// 5. EVENT LISTENERS:
showAnswerBtn.addEventListener('click', showAnswer);
correctBtn.addEventListener('click', () => handleResult(true));
wrongBtn.addEventListener('click', () => handleResult(false));

// 6. INICIALIZAÇÃO:
setupRound();
loadQuestion();