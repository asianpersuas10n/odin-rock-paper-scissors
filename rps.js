let playerSelection = prompt("Chose Rock, Paper, or Scissors: ");

let playerSelectionLower = playerSelection.toLowerCase();

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * (3 - 1) + 1);
    if (randNum === 1) {
        return "rock";
    } else if (randNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

function gameLogic(playerSelectionLower, getComputerChoice) {
    let pSL = playerSelectionLower;
    let gCC = getComputerChoice;
    if ((pSL == "rock" && gCC == "scissors") || (pSL == "paper" && gcc == "rock") || (pSL == "scissors" && gCC == "paper")) {
        return "You win " + pSL + " beats " + gCC + "!";
    } else if (pSL === gCC) {

        return "You tied. Both chose " + pSL;
    } else {
        return "You lose! " + gCC + " beats " + pSL + ".";
    }
};