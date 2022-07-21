window.onload=function() {
    var playerSelection = "";
    var rock = document.querySelector(".rock");
    var paper = document.querySelector(".paper");
    var scissors = document.querySelector(".scissors");

    rock.addEventListener("click", rockSelection);
    rock.addEventListener("click", game);
    paper.addEventListener("click", paperSelection);
    paper.addEventListener("click", game);
    scissors.addEventListener("click", scissorsSelection);
    scissors.addEventListener("click", game);

        // takes player input
    function rockSelection() {
        playerSelection = "rock";
    };
    function paperSelection() {
        playerSelection = "paper";
    };
    function scissorsSelection() {
        playerSelection = "scissors";
    };
    
    function game() {
        let win = 0;
        let loss = 0;
        let tie = 0;


    //      for (let i = 0; i < 5; i++) { 
            function gameLogic() {


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

                let pSL = playerSelection;
                let gCC = getComputerChoiceVar;
                if ((pSL == "rock" && gCC == "scissors") || (pSL == "paper" && gCC == "rock") || (pSL == "scissors" && gCC == "paper")) {
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
    //      };
        
        // figures results of the game
    /*
        if (win > loss) {
            return "You Won! Wins: " + win + " Losses: " + loss + " Ties: " + tie;
        } else if (win === loss) {
            return "You tied. Wins: " + win + " Losses: " + loss + " Ties: " + tie;
        } else {
            return "You lost. Wins: " + win + " Losses: " + loss + " Ties: " + tie;
        } */
    };
};