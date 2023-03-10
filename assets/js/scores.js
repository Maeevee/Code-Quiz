let initials = document.getElementById("initials");
let submitButton = document.getElementById("submit");
let highscores = document.getElementById("highscores");

// Retrieve values from local storage
let names = localStorage.getItem("name");
let points = localStorage.getItem("Current result");

// Retrieve arrays from local storage
let storedNamesArray = JSON.parse(localStorage.getItem("namesArray")) || [];
let storedResultScoresArray = JSON.parse(localStorage.getItem("resultScoresArray")) || [];

// Check if new values are already in arrays
let newData = true;
for (let i = 0; i < storedNamesArray.length; i++) {
    if (storedNamesArray[i] === names && storedResultScoresArray[i] === points) {
        newData = false;
        break;
    }
}

// Push new values to arrays
if (newData) {
    storedNamesArray.push(names);
    storedResultScoresArray.push(points);
}

// Filter out null values
const namesWithoutNulls = storedNamesArray.filter(item => item !== null);
const resultScoresWithoutNulls = storedResultScoresArray.filter(item => item !== null);

// Store arrays back in local storage
localStorage.setItem("namesArray", JSON.stringify(namesWithoutNulls));
localStorage.setItem("resultScoresArray", JSON.stringify(resultScoresWithoutNulls));

// Sort result scores in descending order
let indices = [...Array(resultScoresWithoutNulls.length).keys()].sort((a, b) => {
    return resultScoresWithoutNulls[b] - resultScoresWithoutNulls[a];
    });

// Display values in a list
for (let i = 0; i < namesWithoutNulls.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = namesWithoutNulls[indices[i]] + ": " + resultScoresWithoutNulls[indices[i]];
    highscores.appendChild(li);
    }

// Hide highscores if there are no values in local storage
// if (names === null) {
//     highscores.classList.add("hide");
// }

// Clear local storage
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    highscores.innerHTML = "";

});
