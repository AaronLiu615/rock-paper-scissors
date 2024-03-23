function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "tie";
    }
    
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "win";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "win";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "win";
    }
    else{
        return "lose";
    }
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choices = ["paper","rock" ,"scissors"];
    return choices[getRandomInt(2)];
}

function playGame(element){
    let computerChoice, playerChoice, textBox;
    computerChoice = getComputerChoice();
    playerChoice = element.innerText;
    textBox = document.getElementById("results");
    result = playRound(playerChoice,computerChoice);
    if(result==="win"){
        textBox.innerHTML += "Player wins! <br />";
    }
    else if(result==="lose"){
        textBox.innerHTML += "Player loses! <br />";
    }
    else{
        textBox.innerHTML += "It a tie! <br />";
    }

}


