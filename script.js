const cells = document.querySelectorAll('[data-cell]'); 
const restartBtn = document.querySelector('.restart-btn'); 

const winningCombinations = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

let currentPlayer = 'X';

startGame();

function startGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        cell.addEventListener('click', handleClick, { once: true }); 
    });
    restartBtn.addEventListener('click', startGame);
}

function handleClick(e) {
    const cell = e.target;
    cell.innerText = currentPlayer;
    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        startGame();
    } else if (isDraw()) {
        alert("Draw!");
        startGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].innerText === player;
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.innerText === 'X' || cell.innerText === 'O';
    });
}
