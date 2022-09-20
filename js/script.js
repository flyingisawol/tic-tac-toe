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

const hyperBitcoinization = document.querySelector('.btc-mode')

//==================================================
//Game Functions
//==================================================

// event listener identifies where grid is clicked

board.addEventListener('click', (event) => {
    if (event.target.textContent) {
        alert('choose a different square');
    } else if (currentPlayer === 'X') {
        event.target.textContent = 'X'
        currentPlayer = 'O'
        // console.log(currentPlayer);
        const num = Number(event.target.dataset.index);
        // console.log(num);
        p1.push(num)
        // console.log(p1);
        for (i = 0; i < p1.length; i++) {
            p1.includes(i) // fix this.
        }
        checkForWinner()
        // console.log('player 1 array ',p1);   
    } else {
        event.target.textContent = 'O'
        currentPlayer = 'X'
        // console.log(currentPlayer);
        const num = Number(event.target.dataset.index);
        // console.log(num);
        p2.push(num)
        // console.log(p2);
        for (i = 0; i < p1.length; i++) {
            p2.includes(i)
        }
        checkForWinner()
        // console.log('player 2 array ', p2);
    } 
})

// CHECK TO FIND OUT WHO WINS ?
const checkForWinner = () => {
    winningCombinations.forEach(function(subArray) {
        if (subArray.every(function(e) {
            return p1.includes(e)
        })) {  
            console.log('winner');
            endGame()
        } else {
            console.log('x')
        }
    })
}

// END GAME. ANNOUNCE RESULT
const endGame = (draw) => {
    if (draw) {
        initGame()
    } else {
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
    restartButton.addEventListener('click', (event) => {
        squares.textContent = ''
        winningMessageOverlay.style.zIndex = -1;
        winningMessageOverlay.style.opacity = 0;
        winningText.style.zIndex = -1;
        winningText.style.opacity = 0;
        restartButton.style.opacity = 0;
        restartButton.style.zIndex = -1;
        endGameOverlay.style.zIndex = -1;
    }) 

// Keep Score
const score = () => {

}

// so now. need to add to checkForWinner function so that when someone wins, splash screen is displayed.


// hyperBitcoinization.addEventListener('click', (event) => {
//     if (event.target) {
        
//     }

// })