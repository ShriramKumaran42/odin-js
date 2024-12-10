function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)
    if(computerChoice == 0){
        computerChoice = "rock";
    }
    else if(computerChoice == 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = String(prompt("Player pleas insert your input Rock , Paper , Scissors.")).toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        alert("its a tie");
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        alert("Player wins");
        humanScore++;
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
        
    }
    else{
        alert("Computer wins");
        computerScore++;
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
    }

}

function playGame(){
    for(let count = 1; count < 6 ; count++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore == computerScore){
        alert("The Scores are Tied");
        console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);
    }
    else if(humanScore > computerScore){
        alert("Player Wins");
        console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);
    }
    else{
        alert("Computer Wins");
        console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);
    }
}
playGame();