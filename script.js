function computerPlay() {
    let options = Array("ROCK", "SCISSORS", "PAPER");
    return options[Math.floor(Math.random() * options.length)];
}

let playerPoints = 0;
let computerPoints = 0;


function singleRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase();

    if (playerSelectionUpper == "ROCK" || playerSelectionUpper == "SCISSORS" || playerSelectionUpper == "PAPER") {

      if (playerSelectionUpper == computerSelection) {
        resultScore.innerHTML = "DRAW";
      }
      else if (playerSelectionUpper == "ROCK" && computerSelection == "PAPER") {
        computerPoints ++;
        resultScore.innerHTML = "YOU LOSE. Paper beats rock. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "SCISSORS" && computerSelection == "PAPER") {
        playerPoints ++;
        resultScore.innerHTML = "YOU WIN. Scissors beat paper. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "ROCK" && computerSelection == "SCISSORS") {
        playerPoints ++;
        resultScore.innerHTML = "YOU WIN. Rock beats scissors. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "SCISSORS" && computerSelection == "ROCK") {
        computerPoints ++;
        resultScore.innerHTML = "YOU LOSE. Rock beats scissors. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "PAPER" && computerSelection == "SCISSORS") {
        computerPoints ++;
        resultScore.innerHTML = "YOU LOSE. Scissors beat paper. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
      else if (playerSelectionUpper == "PAPER" && computerSelection == "ROCK") {
        playerPoints ++;
        resultScore.innerHTML = "YOU WON. Paper beats rock. " + "Player: " + playerPoints + " : " + computerPoints + " Computer";
      }
    }
    else {
        console.log("Wrong move");
    }
    if (roundsPlayed % 5 === 0) {
        gameResult();
        roundsPlayed = 0;
        playerPoints = 0;
        computerPoints = 0;
    }
    else {
        wholeGameResult.innerHTML = "";
    }
    
}

function gameResult() {
    if (playerPoints > computerPoints) {
        wholeGameResult.innerHTML = "You won the whole game";
    }
    else if (playerPoints < computerPoints) {
        wholeGameResult.innerHTML = "You lost the whole game";
    }
    else if (playerPoints == computerPoints) {
        wholeGameResult.innerHTML = "The whole game ended with a draw";
    }
  }  
  

let playerChoiceRock = document.getElementById("rock-button");
let playerChoicePaper = document.getElementById("paper-button");
let playerChoiceScissors = document.getElementById("scissors-button");
let resultScore = document.getElementById("round-result");
let wholeGameResult = document.getElementById("game-result");
let roundsPlayed = 0;


playerChoiceRock.addEventListener("click", function(){
    roundsPlayed++;
    console.log(roundsPlayed);
    let playerSelectionUpper = "ROCK";
    console.log(singleRound(playerSelectionUpper, computerPlay()));
    
});
playerChoicePaper.addEventListener("click", function(){
    roundsPlayed++;
    let playerSelectionUpper = "PAPER";
    console.log(singleRound(playerSelectionUpper, computerPlay()));


});
playerChoiceScissors.addEventListener("click", function(){
    roundsPlayed++;
    let playerSelectionUpper = "SCISSORS";
    console.log(singleRound(playerSelectionUpper, computerPlay()));

});

