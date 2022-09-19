//==================================================
//Game Variables
//==================================================

let currentPlayer = 'X'
const board = document.querySelector('.board')
let p1 = []
let p2 = []


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
    } else {
        event.target.textContent = 'O'
        currentPlayer = 'X'
        // console.log(currentPlayer);
        const num = Number(event.target.dataset.index);
        // console.log(num);
        p2.push(num)
        // console.log(p2);
    } 
})

// WHO WINS ?

for (i = 0; i < p1.length; i++) {
    console.log(p1);

}


// hyperBitcoinization.addEventListener('click', (event) => {
//     if (event.target) {
        
//     }

// })