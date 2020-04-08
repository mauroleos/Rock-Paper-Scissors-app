let computerChoice
let userChoice
var results = finalResults()
const displayResults = document.getElementById("results");
const computerAnswer = document.getElementById("computer-choice");
const randomNumber = Math.floor(Math.random() * 4);
const userAnswer = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
const restartBtn = document.getElementById("restart-button");

// Restart Game
restartBtn.addEventListener('click', () => {
    document.location.reload();
});

// Get userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    randomComputerChoice();
    finalResults();
    computerAnswer.innerHTML = computerChoice
    userAnswer.innerHTML = userChoice
    displayResults.innerHTML = results
    // setTimeout (restartGame, 3000);
}))

//Get a random computerChoice number
let randomComputerChoice = () => {
    if (randomNumber === 1) {
        return computerChoice = 'rock'
    } else if (randomNumber === 2) {
        return computerChoice = 'paper'
    } else if (randomNumber === 3) {
        return computerChoice = 'scissors'
    }
}

// Get results
function finalResults() {
    if (computerChoice == userChoice) {
        return results = "It's a tie!"
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        return results = 'You Win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        return results = 'You lost'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        return results = 'You lost'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        return results = 'You win!'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        return results = 'You win!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        return results = 'You lost'
    }
}