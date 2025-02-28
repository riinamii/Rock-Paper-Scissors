
function getComputerChoice () {
    let random = Math.random();
    if (random < 0.34) {
        return 'rock'
    } else if (random < 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice () {
    let choice = prompt("What's your choice: rock, paper or scissors?");
    choice = choice.toLowerCase().trim();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert ("Invalid choice! Please choose 'rock', 'paper' or 'scissors'.");
        return getHumanChoice();
    }
    
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound (humanChoise, computerChoice) {
    if (humanChoise === computerChoice) {
        console.log ("Ugh, a tie! That's no fun.");
    } else if (humanChoise === "rock") {
        if (computerChoice === "paper") {
            console.log ("You lost. Paper beats rock.");
            computerScore = (computerScore + 1);
        } else {
            console.log("Well played! Rock beats scissors. You win! ");
            humanScore = (humanScore + 1);
        }
    } else if (humanChoise === "paper") {
        if (computerChoice === "scissors") {
            console.log ("You lost. Scissors beats paper.");
            computerScore = (computerScore + 1);
        } else {
            console.log ("Well played! Paper beats rock. You win!");
            humanScore = (humanScore + 1);
        }
    } else if (humanChoise === "scissors") {
        if (computerChoice === "rock") {
            console.log ("You lost. Rock beats scissors.");
            computerScore = (computerScore + 1);
        } else {
            console.log ("Well played! Scissors beats paper. You win!");
            humanScore = (humanScore + 1);
        }
    }
    }
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1};`);
    playRound(humanSelection, computerSelection);
    console.log(`Current score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a tie game. Both played well!");
    }
    
}
playGame();