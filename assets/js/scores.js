let initials = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let highscores = document.getElementById("highscores");
// let names = [];
// let points = [];

var names = localStorage.getItem("name");
var points = localStorage.getItem("Current result");

var li = document.createElement("li");
li.innerHTML = names + " - " + points;
highscores.appendChild(li);

document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    highscores.innerHTML = "";

});
