let playerScore = 0;
let computerScore = 0;
const resultDisplay = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScore(result) {
    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    resultDisplay.textContent = result;
    updateScore(result);
    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function announceWinner() {
    if (playerScore > computerScore) {
        resultDisplay.textContent = "Congratulations! You win the game!";
    } else if (playerScore < computerScore) {
        resultDisplay.textContent = "Sorry, you lost the game.";
    } else {
        resultDisplay.textContent = "It's a tie!";
    }
}

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));
