function getComputerChoice(aray) {
    const option = ["Rock", "Paper", "Scissors"]
    index = Math.floor(Math.random() * option.length);
    return option[index];
}



function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection[0].toUpperCase() + playerSelection.substring(1) === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection[0].toUpperCase() + playerSelection.substring(1) === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection[0].toUpperCase() + playerSelection.substring(1) === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}`;
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log("Game over!");
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();



