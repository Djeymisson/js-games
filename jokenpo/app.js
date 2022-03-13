const weight = {
    rock: [0, "102"],
    paper: [1, "210"],
    scissors: [2, "021"],
};

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((choice) =>
    choice.addEventListener("click", (e) => {
        userChoice = weight[e.target.id];
        userChoiceDisplay.innerHTML = e.target.id;
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const generatedChoice = possibleChoices[randomNumber].id;

    computerChoice = weight[generatedChoice];
    computerChoiceDisplay.innerHTML = generatedChoice;
}

function getResult() {
    result = userChoice[1][computerChoice[0]];

    switch (result) {
        case "0":
            resultDisplay.innerHTML = "Too bad! You lost!";
            break;
        case "1":
            resultDisplay.innerHTML = "Almost! It's a draw!";
            break;
        case "2":
            resultDisplay.innerHTML = "Very good! You won!";
            break;
    }
}
