// State variables for tracking scores
let playerScore = 0;
let computerScore = 0;

// Array of choices for the computer
const choices = ["rock", "paper", "scissors"];

// Helper function: Get computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Main Game Logic
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    // Determine Winner using conditional logic
    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        resultMessage = `You Win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        resultMessage = `Computer Wins! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }

    // Update the DOM elements
    updateDOM(playerChoice, computerChoice, resultMessage);
}

// DOM Update Function
function updateDOM(playerChoice, computerChoice, resultMessage) {
    document.getElementById("choice-text").textContent = 
        `You chose ${capitalize(playerChoice)} | Computer chose ${capitalize(computerChoice)}`;
    
    document.getElementById("winner-text").textContent = resultMessage;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Helper function to capitalize strings for presentation
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Reset Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("choice-text").textContent = "Game reset. Make your move!";
    document.getElementById("winner-text").textContent = "";
}