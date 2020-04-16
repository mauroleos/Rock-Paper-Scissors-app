let userScore = 0;
let computerScore = 0;

// Get userChoice
const possibleChoices = document.querySelectorAll(".choices");
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    const computerChoice = randomComputerChoice();

    displayResults(computerChoice, userChoice);
    displayScore(computerChoice, userChoice);

    const computerAnswer = document.getElementById("computer-choice");
    computerAnswer.innerHTML = computerChoice;

    const userAnswer = document.getElementById("user-choice");
    userAnswer.innerHTML = userChoice;
}))

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

function displayResults(computerChoice, userChoice) {
    const displayResults = document.getElementById("results");

    const gameIsATie = computerChoice == userChoice;
    if (gameIsATie) {
        displayResults.innerHTML = "It's a tie!";
        return;
    }

    const paperBeatsRock = computerChoice === 'rock' && userChoice === 'paper';
    const scissorsBeatsPaper = computerChoice === 'paper' && userChoice === 'scissors';
    const rockBeatsScissors = computerChoice === 'scissors' && userChoice === 'rock';
    if (paperBeatsRock || scissorsBeatsPaper || rockBeatsScissors) {
        displayResults.innerHTML = 'You Win!'
        userScore++;
    }

    const scissorsLosesRock = computerChoice === 'rock' && userChoice === 'scissors';
    const paperLosesScissors = computerChoice === 'scissors' && userChoice === 'paper';
    const rockLosesPaper = computerChoice === 'paper' && userChoice === 'rock'
    if (scissorsLosesRock || paperLosesScissors || rockLosesPaper) {
        displayResults.innerHTML = 'You lost'
        computerScore++;
    }
}

let displayScore = () => {
    document.getElementById("computer-score").innerHTML = "Computer Score: " + computerScore;
    document.getElementById("user-score").innerHTML = "Your Score: " + userScore;
}