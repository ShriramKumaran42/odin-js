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
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
    }
    else{
        alert("Computer wins");
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
    }

}
