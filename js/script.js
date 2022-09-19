let currentPlayer = 'player1'
const board = document.querySelector('.board')

board.addEventListener('click', (event) => {
    if (event.target.textContent) {
        console.log('choose another square');
    } else if (currentPlayer === 'player1') {
        event.target.textContent = 'X'
        currentPlayer = 'player2'
    } else {
        event.target.textContent = 'O'
        currentPlayer = 'player1'
    } 
})