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

console.log(getHumanChoice());