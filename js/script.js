//==================================================
//Game Variables
//==================================================

let currentPlayer = 'X'
const board = document.querySelector('.board')
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
            console.log(p1);   
            checkForWinner()
        }
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
            console.log(p2);
            checkForWinner()
        }
    } 
})

// WHO WINS ?
const checkForWinner = () => {
    if (p1 === winningCombinations) {
        console.log('winner');
    }
}

// hyperBitcoinization.addEventListener('click', (event) => {
//     if (event.target) {
        
//     }

// })