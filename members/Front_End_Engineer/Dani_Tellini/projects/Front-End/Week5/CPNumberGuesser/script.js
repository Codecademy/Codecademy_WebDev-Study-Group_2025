let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9) + 1;

function compareGuesses(human, computer, secret) {
  if (human === computer) {
    return true;
  }
  if (Math.abs(secret - human) < Math.abs(secret - computer)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

const advanceRound = () => (currentRoundNumber += 1);
