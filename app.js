const getComputerMove = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * 3);
    let computerSelection = '';
    switch(computerChoice) {
        case 0:
            return choices[0];
            break;
        case 1:
            return choices[1];
            break;
        case 2:
            return choices[2];
            break;
    }
    
    console.log(computerSelection);
}

const getPlayerMove = () => {
    let playerSelection = prompt('Choose your weapon: rock, paper, or scissors?');
    return playerSelection;
}


const playRound = (playerSelection = getPlayerMove(), computerSelection = getComputerMove()) => {

    if(playerSelection === computerSelection){
        return "It's a tie!";
    }
    else if(playerSelection == 'rock') {
        if(computerSelection == 'scissors') {
            return "You win! Rock beats scissors!";
        }
        else if(computerSelection == 'paper') {
            return "You lose! Paper beats rock!";
        }
    } 
    else if(playerSelection == 'paper') {
        if(computerSelection == 'rock') {
            return "You win! Paper beats rock!";
        }
        else if(computerSelection == 'scissors') {
            return "You lose! Scissors beats paper!";
        }
    } 
    else if(playerSelection == 'scissors') {
        if(computerSelection == 'paper') {
            return "You win! Scissors beats paper!";
        }
        else if(computerSelection == 'paper') {
            return "You lose! Rock beats scissors!";
        }
    }
    
};


const game = () => {
    for(let i = 0; i <= 4; i++) {
        console.log(playRound());
    }

}



game();
