//==================================================
//Game Variables
//==================================================

let p1 = [];
let p2 = [];
let arr = [];
let p1Score = 0;
let p2Score = 0;
let currentPlayer = "X";
const board = document.querySelector(".board");
const squares = document.querySelectorAll(".square");
const winningText = document.querySelector(".winning-text");
const winningMessageOverlay = document.querySelector(
  ".winning-message-overlay"
);
const mainContent = document.querySelector("main");
const restartButton = document.querySelector("#restart-button");
const endGameOverlay = document.querySelector(".end-game");
const cantTouchThis = new Audio("audio/cant-touch-this.mp3");
const replaySound = new Audio("audio/restart1.mp3");
const endSound = new Audio("audio/restart.mp3");
const coin = new Audio("audio/coin.mp3");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

const hyperBitcoinization = document.querySelector(".btc-mode");
const bitcoin = document.querySelector("#btc");

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

//==================================================
//Game Functions
//==================================================

// event listener identifies where grid is clicked

board.addEventListener("click", (event) => {
  const num = Number(event.target.dataset.index);
  if (event.target.textContent) {
    // cantTouchThis.play()
    alert("choose a different square");
  } else if (currentPlayer === "X") {
    event.target.textContent = "X";
    currentPlayer = "O";
    p1.push(num);
    arr.push(num);
    // console.log(arr);
    checkForWinner();
  } else if (currentPlayer !== "X") {
    event.target.textContent = "O";
    currentPlayer = "X";
    p2.push(num);
    arr.push(num);
    // console.log(arr);
    checkForWinner();
  }
});

// CHECK WHO WINS ?
const checkForWinner = () => {
  winningCombinations.forEach(function (subArray) {
    if (
      subArray.every(function (e) {
        drawCheck();
        return p1.includes(e);
      })
    ) {
      score();
      endGame();
    } else if (
      subArray.every(function (e) {
        return p2.includes(e);
      })
    ) {
      score();
      endGame();
    }
  });
};

// CHECK FOR A DRAW
const drawCheck = () => {
  if (arr.length > 8) {
    endGame();
  }
};

// END GAME. ANNOUNCE RESULT
const endGame = (draw) => {
  if (arr.length > 8) {
    currentPlayer = `It's a draw!`
    // endSound.play()
    winningText.innerHTML = `${currentPlayer}`;
    winningMessageOverlay.style.zIndex = 1;
    winningMessageOverlay.style.opacity = 0.8;
    winningText.style.zIndex = 2;
    winningText.style.opacity = 1;
    restartButton.style.opacity = 1;
    restartButton.style.zIndex = 2;
    endGameOverlay.style.zIndex = 0;
  } else if (currentPlayer === "X") {
    currentPlayer = "O";
    // endSound.play()
    winningText.innerHTML = `${currentPlayer}'s Win!`;
    winningMessageOverlay.style.zIndex = 1;
    winningMessageOverlay.style.opacity = 0.8;
    winningText.style.zIndex = 2;
    winningText.style.opacity = 1;
    restartButton.style.opacity = 1;
    restartButton.style.zIndex = 2;
    endGameOverlay.style.zIndex = 0;
  } else if (currentPlayer === "O") {
    currentPlayer = "X";
    // endSound.play()
    winningText.innerHTML = `${currentPlayer}'s Win!`;
    winningMessageOverlay.style.zIndex = 1;
    winningMessageOverlay.style.opacity = 0.8;
    winningText.style.zIndex = 2;
    winningText.style.opacity = 1;
    restartButton.style.opacity = 1;
    restartButton.style.zIndex = 2;
    endGameOverlay.style.zIndex = 0;
  }
}

// Function to initialise game
const initGame = () => {
  // replaySound.play()
  winningMessageOverlay.style.zIndex = -1;
  winningMessageOverlay.style.opacity = 0;
  winningText.style.zIndex = -1;
  winningText.style.opacity = 0;
  restartButton.style.opacity = 0;
  restartButton.style.zIndex = -1;
  endGameOverlay.style.zIndex = -1;

  for (let square of squares) {
    square.textContent = "";
  }
  p1 = [];
  p2 = [];
  currentPlayer = "X";
  arr = [];
};

// Reset Button - Play Again!
restartButton.addEventListener("click", () => {
  // replaySound.play()
  winningMessageOverlay.style.zIndex = -1;
  winningMessageOverlay.style.opacity = 0;
  winningText.style.zIndex = -1;
  winningText.style.opacity = 0;
  restartButton.style.opacity = 0;
  restartButton.style.zIndex = -1;
  endGameOverlay.style.zIndex = -1;

  for (let square of squares) {
    square.textContent = "";
  }
  p1 = [];
  p2 = [];
  currentPlayer = "X";
  arr = [];
});

// Score Keeper

const score = () => {
  if (currentPlayer !== "X") {
    p1Score = p1Score + 1;
    // score1.append(p1Score)
  } else if (currentPlayer === "X") {
    p2Score = p2Score + 1;
    // score1.append(p1Score)
  }
};

bitcoin.addEventListener("click", () => {
  coin.play();
});

// so now. need to add to checkForWinner function so that when someone wins, splash screen is displayed.

// hyperBitcoinization.addEventListener('click', (event) => {
//     if (event.target) {

//     }

// })
