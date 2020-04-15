const possibleChoices = document.querySelectorAll(".choices");
const restartBtn = document.getElementById("restart-button");
let userScore = 0;
let computerScore = 0;

// Get userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    const computerChoice = randomComputerChoice();
    const results = finalResults(computerChoice, userChoice);
  
    getScore(computerChoice, userChoice);
  
    const computerAnswer = document.getElementById("computer-choice");
    computerAnswer.innerHTML = computerChoice;
   
    const userAnswer = document.getElementById("user-choice");
    userAnswer.innerHTML = userChoice;
   
    const displayResults = document.getElementById("results");
    displayResults.innerHTML = results;
}))

//Get a random computerChoice number
let randomComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get results
function finalResults(computerChoice, userChoice) {
    if (computerChoice == userChoice) {
        return "It's a tie!"
    } else if (computerChoice === 'rock' && userChoice === 'paper') {
        return 'You Win!'
    } else if (computerChoice === 'rock' && userChoice === 'scissors') {
        return 'You lost'
    } else if (computerChoice === 'paper' && userChoice === 'rock') {
        return 'You lost'
    } else if (computerChoice === 'paper' && userChoice === 'scissors') {
        return 'You win!'
    } else if (computerChoice === 'scissors' && userChoice === 'rock') {
        return 'You win!'
    } else if (computerChoice === 'scissors' && userChoice === 'paper') {
        return 'You lost'
    }
}

//Get Scoreboard
let getScore = (computerChoice, userChoice) => {
    if (computerChoice === 'rock' && userChoice === 'paper') {
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