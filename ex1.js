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

const getHumanChoice = {
    humanChoice: ""
}

const humanScoreDisp = document.querySelector("#playerScore");
const compScoreDisp = document.querySelector("#compScore");
function updateScore(){
    humanScoreDisp.textContent = humanScore;
    compScoreDisp.textContent = computerScore;
}

const resultDisp =  document.querySelector(".result");
function resultText(msg){
    resultDisp.textContent = msg;
}

const playBtn = document.querySelector(".options");
playBtn.addEventListener("click", (newEvent) =>{
    let target = newEvent.target;
    if (target.tagName === "BUTTON"){
        switch(target.id){
            case "rock":
                
                getHumanChoice.humanChoice = "rock";
                break;

            case "paper":
                
                getHumanChoice.humanChoice = "paper";
                break;
            case "scissors":
                
                getHumanChoice.humanChoice = "scissors";
                break;    
        }
        playRound(getHumanChoice.humanChoice);
    }
});


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    console.log(`Player : ${humanChoice} | Computer : ${computerChoice}`);

    if (humanChoice == computerChoice){
        resultText("its a tie");
        
    }
    else if(humanChoice == "rock" && computerChoice == "scissors" || 
            humanChoice == "paper" && computerChoice == "rock" || 
            humanChoice == "scissors" && computerChoice == "paper"){
        resultText("Player wins this round");
        humanScore++;
        
    }
    else{
        resultText("Computer wins this round");
        computerScore++;
        
    }
    console.log(`So far the score is Player : ${humanScore},  Computer : ${computerScore}.`);

    updateScore();
    if(humanScore + computerScore === 5){
        playStop();
    }
    
}



function playStop(){
    // if(getHumanChoice.humanChoice === ""){
    //     alert("Please select your move")
    //     return;
    // }
    // const result = document.querySelector(".results");
    // const para = document.querySelector("p");
    // para.textContent = `${humanScore}`
    // result.appendChild(para);

    if(humanScore == computerScore){
        resultText("The Scores are Tied");
        
    }
    else if(humanScore > computerScore){
        resultText("Player Wins,  Congratulations");
        
    }
    else{
        resultText("Computer Wins, Congratulations");
        
    }

    console.log(`The Final Score is Player: ${humanScore} , Computer: ${computerScore} . `);


    

    humanScore = 0;
    computerScore = 0;
    getHumanChoice.humanChoice = "";
    
    alert ("Game over, play again")
}

