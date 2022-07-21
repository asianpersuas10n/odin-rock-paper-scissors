
    // takes player input

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

    function rockSelection() {
        playerSelection = "rock";
    };
    function paperSelection() {
        playerSelection = "paper";
    };
    function scissorsSelection() {
        playerSelection = "scissors";
    };
    
    // keeps track of results

    let win = 0;
    let loss = 0;
    let tie = 0;

    function scoreUI() {
        let resultsScore = document.querySelector(".resultsScore");
        document.querySelector(".resultsScore").style.cssText = "font-size: 24px;"
        let score = "Wins: " + win + " Losses: " + loss + " Ties: " + tie;
        if ((win || loss) === 5) {
            if (win > loss) {
                score = "You Won! Wins: " + win + " Losses: " + loss + " Ties: " + tie;
            } else {
                score = "You lost... Wins: " + win + " Losses: " + loss + " Ties: " + tie;
            };
            let buttonContainer = document.querySelector(".buttonContainer");
            while (buttonContainer.firstChild) {
                buttonContainer.removeChild(buttonContainer.firstChild)
            };
            let retry = document.createElement("button");
            retry.textContent = "Retry?";
            retry.addEventListener("click", refresh);
            buttonContainer.append(retry);
        };
        resultsScore.textContent = score;
    };

    // the retry button
    
    function refresh() {
        window.location.reload();
    };

    function game() {
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
                    scoreUI();
                    return "You win " + pSL + " beats " + gCC + "!";
                } else if (pSL === gCC) {
                    tie += 1;
                    scoreUI();
                    return "You tied. Both chose " + pSL;
                } else {
                    loss += 1;
                    scoreUI();
                    return "You lose! " + gCC + " beats " + pSL + ".";
                }
            };
            console.log(gameLogic());
    };