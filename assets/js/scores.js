let initials = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let highscores = document.getElementById("highscores");

// Retrieve values from local storage
let names = localStorage.getItem("name");
let points = localStorage.getItem("Current result");

// Retrieve arrays from local storage
let storedNamesArray = JSON.parse(localStorage.getItem("namesArray")) || [];
let storedResultScoresArray = JSON.parse(localStorage.getItem("resultScoresArray")) || [];

// Push new values to arrays
storedNamesArray.push(names);
storedResultScoresArray.push(points);

// Store arrays back in local storage
localStorage.setItem("namesArray", JSON.stringify(storedNamesArray));
localStorage.setItem("resultScoresArray", JSON.stringify(storedResultScoresArray));


// Hide highscores if there are no values in local storage
if (names === null) {
    highscores.classList.add("hide");
}

// Clear local storage
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    highscores.innerHTML = "";

});
