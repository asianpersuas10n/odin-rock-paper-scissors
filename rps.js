 function game() {
    let win = 0;
    let loss = 0;
    let tie = 0;

      for (let i = 0; i < 5; i++) { 
        function gameLogic() {

            // takes player input

            let playerSelection = prompt("Chose Rock, Paper, or Scissors: ");

            var playerSelectionLower = playerSelection.toLowerCase();
            
            // takes computer input

            function getComputerChoice() {
                let randNum = Math.floor(Math.random() * (3 - 1) + 1);
                if (randNum === 1) {
                    return "rock";
                } else if (randNum === 2) {
                    return "paper";
                } else {
                    return "scissors";
                }
            };
    
            var getComputerChoiceVar = getComputerChoice();

            // plays the game

            let pSL = playerSelectionLower;
            let gCC = getComputerChoiceVar;
            if ((pSL == "rock" && gCC == "scissors") || (pSL == "paper" && gcc == "rock") || (pSL == "scissors" && gCC == "paper")) {
                win += 1;
                return "You win " + pSL + " beats " + gCC + "!";
            } else if (pSL === gCC) {
                tie += 1;
                return "You tied. Both chose " + pSL;
            } else {
                loss += 1;
                return "You lose! " + gCC + " beats " + pSL + ".";
            }
        };
        console.log(gameLogic());
      };
    
    // figures results of the game

    if (win > loss) {
        return "You Won! Wins: " + win + " Losses: " + loss + " Ties: " + tie;
    } else if (win === loss) {
        return "You tied. Wins: " + win + " Losses: " + loss + " Ties: " + tie;
    } else {
        return "You lost. Wins: " + win + " Losses: " + loss + " Ties: " + tie;
    }
 };

 console.log(game());