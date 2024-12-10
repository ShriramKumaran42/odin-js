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
    let humanChoice;
    while(true){
        humanChoice = String(prompt("Player enter your choice below Rock , Paper , Scissors.")).toLowerCase();
        if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"){
            break;
        }
        else{
            alert("invalid choice, try agin");
            console.log("Wrong input by player");
        }
    }
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
        alert("Player wins this round");
        humanScore++;
        console.log(`So far the score is Player: ${humanScore} , Computer: ${computerScore} .`);
        
    }
    else{
        alert("Computer wins this round");
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
        alert("Player Wins,  Congratulations");
        console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);
    }
    else{
        alert("Computer Wins, Congratulations");
        console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);
    }
}
playGame();