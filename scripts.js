let computerChoice
let userChoice
var results = finalResults()
const displayResults = document.getElementById("results");
const computerAnswer = document.getElementById("computer-choice");
const userAnswer = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
const restartBtn = document.getElementById("restart-button");
let userScore = 0;
let computerScore = 0;

// Get userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    randomComputerChoice();
    finalResults();
    getScore();
    computerAnswer.innerHTML = computerChoice
    userAnswer.innerHTML = userChoice
    displayResults.innerHTML = results
}))

//Get a random computerChoice number
let randomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 1) {
        computerChoice = 'rock'
    } else if (randomNumber === 2) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
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

//Get Scoreboard
let getScore = () => {
    if (computerChoice == userChoice) {
        return results = "It's a tie!"
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        userScore++, computerScore + 0;
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        userScore + 0, computerScore++;
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        userScore + 0, computerScore++;
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        userScore++, computerScore + 0;
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        userScore++, computerScore + 0;
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        userScore + 0, computerScore++;
    }

    document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("user-score").innerHTML = "Your Score: " + userScore;
}