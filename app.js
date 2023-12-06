const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((buttonElement) => {
  buttonElement.addEventListener("click", handleClick);
});

let computerDisplay;
let userDisplay;
let resultsDisplay;

function handleClick(e) {
  userDisplay = e.target.id;
  userChoice.innerHTML = userDisplay;
  generateComputerChoice();
  getResults();
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerDisplay = "rock";
  }

  if (randomNumber === 2) {
    computerDisplay = "paper";
  }

  if (randomNumber === 3) {
    computerDisplay = "scissors";
  }

  computerChoice.innerHTML = computerDisplay;
}

function getResults() {
  if (computerDisplay === userDisplay) {
    resultsDisplay = "its a draw";
  }
  if (computerDisplay === "rock" && userDisplay === "paper") {
    resultsDisplay = "you win";
  }
  if (computerDisplay === "rock" && userDisplay === "scissors") {
    resultsDisplay = "you lost";
  }
  if (computerDisplay === "paper" && userDisplay === "scissors") {
    resultsDisplay = "you win";
  }
  if (computerDisplay === "paper" && userDisplay === "rock") {
    resultsDisplay = "you lost";
  }
  if (computerDisplay === "scissors" && userDisplay === "paper") {
    resultsDisplay = "you lost";
  }
  if (computerDisplay === "scissors" && userDisplay === "rock") {
    resultsDisplay = "you win";
  }
  result.innerHTML = resultsDisplay;
}

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3) + 1;

//   if (randomNumber === 1) {
//     computerChoice.innerHTML = "rock";
//   }

//   if (randomNumber === 2) {
//     computerChoice.innerHTML = "paper";
//   }

//   if (randomNumber === 3) {
//     computerChoice.innerHTML = "scissors";
//   }
// }
