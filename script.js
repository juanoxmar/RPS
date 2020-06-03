let myScore = 0;
let compScore = 0;
let totalGames = 0;

function computerPlay(){
    let random = Math.floor( Math.random() * Math.floor(3) );
    if (random == 1)
        return 'r';
    else if (random == 2)
        return 'p';
    else
        return 's';
}

function playRound(playerSelection, computerSelection){
    switch(true){
        case (playerSelection == 'r' && computerSelection == 'r'):{
            return "Tie! Both have Rock";
            break;
        }
        case (playerSelection == 'r' && computerSelection == 'p'):{
            return "You Lose! Paper beats Rock";
            break;
        }
        case (playerSelection == 'r' && computerSelection == 's'):{
            return "You Win! Rock beats Scissors";
            break;
        }
        case (playerSelection == 's' && computerSelection == 'r'):{
            return "You Lose! Rock beats Scissors";
            break;
        }
        case (playerSelection == 's' && computerSelection == 'p'):{
            return "You Win! Scissors beats Paper";
            break;
        }
        case (playerSelection == 's' && computerSelection == 's'):{
            return "Tie! Both have Scissors";
            break;
        }
        case (playerSelection == 'p' && computerSelection == 'r'):{
            return "You Win! Paper beats Rock";
            break;
        }
        case (playerSelection == 'p' && computerSelection == 'p'):{
            return "Tie! Both have Paper";
            break;
        }
        case (playerSelection == 'p' && computerSelection == 's'):{
            return "You Lose! Scissors beats Paper";
            break;
        }
    }
}

function score(gamepoint){
    document.getElementById("round").innerHTML = gamepoint;
    switch(true){
       case (gamepoint.search('Win') != -1):{
            myScore++;
            break;
        }
        case (gamepoint.search('Lose') != -1):{
            compScore++;
            break;
        }
        case (gamepoint.search('Tie') != -1):{
            break;
        }
    }

    if ( myScore === 5 || compScore === 5 ) {
        if (myScore > compScore){
            document.getElementById("scores").innerHTML = 'You win the match ' + myScore + '-' + compScore;
            myScore = 0;
            compScore = 0;
        }
        else if (myScore < compScore){
            document.getElementById("scores").innerHTML = 'You lose the match ' + myScore + '-' + compScore;
            myScore = 0;
            compScore = 0;
        }
    }
    else{
        document.getElementById("scores").innerHTML = myScore + " - " + compScore;
    }
}

document.getElementById("rock").addEventListener('click', function(e){
    let playerSelection = 'r';
    let computerSelection = computerPlay();
    let gamepoint = playRound(playerSelection, computerSelection);
    score(gamepoint);
  });

document.getElementById("paper").addEventListener('click', function(e){
    let playerSelection = 'p';
    let computerSelection = computerPlay();
    let gamepoint = playRound(playerSelection, computerSelection);
    score(gamepoint);
  });

document.getElementById("scissor").addEventListener('click', function(e){
    let playerSelection = 's';
    let computerSelection = computerPlay();
    let gamepoint = playRound(playerSelection, computerSelection);
    score(gamepoint);
  });