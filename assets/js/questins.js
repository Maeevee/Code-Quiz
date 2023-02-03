let startQuize = document.getElementById("start");
let timer = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let questionsScreen = document.getElementById("questions");
let resultsScreen = document.getElementById("end-screen");
let questions = ['Inside which HTML element do we put the JavaScript?', 'Where is the correct place to insert a JavaScript?', 'What is the correct syntax for referring to an external script called "xxx.js"?']
let answers = [['<script>', '<scripting>', '<js>', '<javascript>'], ['The <head> section', 'The <body> section', 'Both the <head> section and the <body> section are correct', 'None of the above'], ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">', 'None of the above']]

startQuize.addEventListener("click", function (event) {
    event.preventDefault();

    let countdown = 30;

    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    
    let interval = setInterval(function () {
        timer.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            questionsScreen.classList.add("hide");
            resultsScreen.classList.remove("hide");
        }
    }, 1000);
});










