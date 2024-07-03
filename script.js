function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    
}}



let humanScore =0
let computerScore =0

function playRound(humanChoice)
{
   
    let computerChoice = getComputerChoice();
    let resultMessage = '';
            if(humanChoice === "rock" && computerChoice === "rock")
        {
            resultMessage = "It's a tie!";
                }
        else if(humanChoice === "rock" && computerChoice === "scissors")
            {
            humanScore++
            resultMessage = "You win!";
            }
        else if(humanChoice === "rock" && computerChoice === "paper")
            {
            computerScore++
            resultMessage = "Computer wins!";
            }
        else if(humanChoice === "paper" && computerChoice === "rock")
            {
            humanScore++
            resultMessage = "You win!";
            }
        else if(humanChoice === "paper" && computerChoice === "scissors")
            {
            computerScore++
            resultMessage = "Computer wins!";
            }
        else if(humanChoice === "paper" && computerChoice === "paper")
            {
                resultMessage = "It's a tie!";
            }
        else if(humanChoice === "scissors" && computerChoice === "rock")
            {
            computerScore++
            resultMessage = "Computer wins!";
            }
        else if(humanChoice === "scissors" && computerChoice === "paper")
            {
            humanScore++
            resultMessage = "You win!";
            }
        else if(humanChoice === "scissors" && computerChoice === "scissors")
            {
                resultMessage = "It's a tie!";
            }
        else
        {
            console.log("Invalid choice. Please enter rock, paper, or scissors.")
            
        }
        document.getElementById('computerChoice').innerText = `Computer Choice = ${computerChoice}`;
        document.getElementById('HumanChoice').innerText = `Human Choice = ${humanChoice}`;

document.getElementById('result').innerText ='Result IS =' + resultMessage 
document.getElementById('score').innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
}
