//==================================================
//Game Variables
//==================================================

let currentPlayer = 'X'
const board = document.querySelector('.board')
const squares = document.querySelectorAll('.square')
const winningText = document.querySelector('.winning-text')
const winningMessageOverlay = document.querySelector('.winning-message-overlay')
const mainContent = document.querySelector('main')
const restartButton = document.querySelector('#restart-button')
const endGameOverlay = document.querySelector('.end-game')
// const cantTouchThis = new Audio("audio/cant-touch-this.mp3")
// const replaySound = new Audio("audio/restart1.mp3")
// const endSound = new Audio("audio/restart.mp3")
const coin = new Audio("audio/coin.mp3")

const hyperBitcoinization = document.querySelector('.btc-mode')
const bitcoin = document.querySelector('#btc')

let p1 = []
let p2 = []

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
]


//==================================================
//Game Functions
//==================================================

// event listener identifies where grid is clicked

board.addEventListener('click', (event) => {
    if (event.target.textContent) {
        // cantTouchThis.play()
        alert('choose a different square');
    } else if (currentPlayer === 'X') {
        event.target.textContent = 'X'
        currentPlayer = 'O'
        const num = Number(event.target.dataset.index);
        p1.push(num)
        checkForWinner()
    } else {
        event.target.textContent = 'O'
        currentPlayer = 'X'
        const num = Number(event.target.dataset.index);
        p2.push(num)
        checkForWinner()
    } 
})

// CHECK WHO WINS ?
const checkForWinner = () => {
    winningCombinations.forEach(function(subArray) {
        //checks winningCombinations variable forEach subArray contained within
        if (subArray.every(function(e) {
            //if every element within the subArray
            return p1.includes(e)
            //add selected square number to array .. ?
        })) {  
            console.log(`X's Win`);
            score()
            endGame()
        } else 
            if (subArray.every(function(e) {
                return p2.includes(e)
            })) {  
                console.log(`O's Win`);
                score()
                endGame()
        } 
    })
}

// END GAME. ANNOUNCE RESULT
const endGame = (draw) => {
    if (draw) {
        initGame()
    } else {
        // endSound.play()
        winningText.innerHTML = "You Win!!"
        winningMessageOverlay.style.zIndex = 1
        winningMessageOverlay.style.opacity = .8;
        winningText.style.zIndex = 2;
        winningText.style.opacity = 1;
        restartButton.style.opacity = 1;
        restartButton.style.zIndex = 2;
        endGameOverlay.style.zIndex = 0;
    }
}

// Function to initialise game 
const initGame = () => {
}


// Reset Button - Play Again!
restartButton.addEventListener('click', () => {
    // replaySound.play()
    winningMessageOverlay.style.zIndex = -1;
    winningMessageOverlay.style.opacity = 0;
    winningText.style.zIndex = -1;
    winningText.style.opacity = 0;
    restartButton.style.opacity = 0;
    restartButton.style.zIndex = -1;
    endGameOverlay.style.zIndex = -1;

    for (let square of squares) {
        square.textContent = ''
    }
    p1 = []
    p2 = []
    currentPlayer = 'X'
}) 

// Score Keeper
let p1Score = 0
let p2Score = 0

const score = () => {
    if (currentPlayer !== 'X') {
        p1Score = p1Score + 1
        } else if (currentPlayer === 'X') {
            p2Score = p2Score + 1
            console.log(p2Score);
        }
}

bitcoin.addEventListener('click', () => {
    coin.play()
})


// so now. need to add to checkForWinner function so that when someone wins, splash screen is displayed.


// hyperBitcoinization.addEventListener('click', (event) => {
//     if (event.target) {
        
//     }

// })