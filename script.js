function getComputerChoice(c1, c2, c3) {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 1) {
        return c1;
    } else if (randomNumber == 2) {
        return c2;
    } else {
        return c3;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("ROCK, PAPER, OR SCISSORS!");
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    } else {
        console.log("Invalid choice");
        return null; // Return null if the choice is invalid
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice1, computerChoice1) {
    if (humanChoice1 == computerChoice1) {
        console.log("It's a tie");
    } else if (humanChoice1 == "rock" && computerChoice1 == "scissors") {
        console.log("You win! Rock beats scissors");
        humanScore++;
    } else if (humanChoice1 == "paper" && computerChoice1 == "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
    } else if (humanChoice1 == "scissors" && computerChoice1 == "paper") {
        console.log("You win! Scissors beat paper");
        humanScore++;
    } else {
        console.log("You lose");
        computerScore++;
    }
}

function playgame() {  
    let round = 0;
    while (round < 5) {
        round++;
        const humanChoice = getHumanChoice();
        if (!humanChoice) {
            round--; // If invalid choice, don't count this round
            continue;
        }
        const computerChoice = getComputerChoice("rock", "paper", "scissors");
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You win the game");
    } else if (humanScore < computerScore) {
        console.log("You lose the game");
    } else {
        console.log("It's a tie");
    }
}

// Start the game
playgame();
console.log(humanScore)
console.log(computerScore)
