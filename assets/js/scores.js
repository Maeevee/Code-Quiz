let initials = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let highscores = document.getElementById("highscores");

// Retrieve values from local storage
let names = localStorage.getItem("name");
let points = localStorage.getItem("Current result");

// Hide highscores if there are no values in local storage
if (names === null) {
    highscores.classList.add("hide");
}

// Clear local storage
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    highscores.innerHTML = "";

});
