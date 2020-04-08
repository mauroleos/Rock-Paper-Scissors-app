let computerChoice
let userChoice
var results = finalResults()
const displayResults = document.getElementById("results");
const computerAnswer = document.getElementById("computer-choice");
const randomNumber = Math.floor(Math.random() * 4);
const userAnswer = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
var score = 0;

//Creating a scoreboard 
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

// Get userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    randomComputerChoice();
    finalResults();
    computerAnswer.innerHTML = computerChoice
    userAnswer.innerHTML = userChoice
    displayResults.innerHTML = results
    setTimeout (restartGame, 3000);
}))

let restartGame = () =>{
    location.reload();
}
//or on click restart?

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
        return results = 'You lost'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        return results = 'You win!'
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