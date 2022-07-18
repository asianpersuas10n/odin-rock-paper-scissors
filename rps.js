let playerSelection = prompt("Chose Rock, Paper, or Scissors: ");

let playerSelectionLower = playerSelection.toLowerCase();

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * (3 - 1) + 1);
    if (randNum === 1) {
        return "Rock";
    } else if (randNum === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
};
