// Set variables
let startQuize = document.getElementById("start");
let timer = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionsScreen = document.getElementById("questions");
let resultsScreen = document.getElementById("end-screen");
let questionContainer = document.getElementById("questions");
let questionElement = document.getElementById("question-title");
let answerButtonsElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let finalScore = document.getElementById("final-score");
let initials = document.getElementById("initials");
const quiz = [
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: "<script>", correct: true },
        { text: "<scripting>", correct: false },
        { text: "<js>", correct: false },
        { text: "<javascript>", correct: false }
    ]
    },
    {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
        { text: "The <head> section", correct: false },
        { text: "The <body> section", correct: true },
        { text: "Both", correct: false },
        { text: "None of the above", correct: false }
    ]
    },
    {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
        { text: "<script href='xxx.js'>", correct: false },
        { text: "<script src='xxx.js'>", correct: true },
        { text: "<script name='xxx.js'>", correct: false },
        { text: "None of the above", correct: false }
    ]
    }
];
let currentQuestion = 0;
let score = 0;
let countdown = 30;
let resultScore;

// Timer
let interval = function() {
        timer.textContent = countdown;
        countdown--;    

    // When the time is up, go to the end-screen
    if (countdown === -1) {
        clearInterval(interval);
        questionsScreen.classList.add("hide");
        resultsScreen.classList.remove("hide");
    }
};

// Adding an event listener for the start button
startQuize.addEventListener("click", function (event) {
    event.preventDefault();

    // Hiding the start page and launching questions
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");

    interval = setInterval(interval, 1000);
});

// Showing the questions
function showQuestion() {
    const currentQuiz = quiz[currentQuestion];
    questionElement.innerText = currentQuiz.question;
    answerButtonsElement.innerHTML = "";
    currentQuiz.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
        button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

//  Checking the answers
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        score += 10;

    } else {
        countdown -= 5;
    }
    if (quiz.length > currentQuestion + 1) {
        currentQuestion++;
        showQuestion();
    } else {
        resultScore = score + countdown;
        clearInterval(interval);
        timer.innerText = 0;
        questionsScreen.classList.add("hide");
        resultsScreen.classList.remove("hide");
        finalScore.innerText = resultScore;
    }
    localStorage.setItem("Current result", resultScore);
}

// Setting the status of the answer
function setStatusClass(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

showQuestion();