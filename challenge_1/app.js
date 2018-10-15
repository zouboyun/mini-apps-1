/************************ select DOM nodes ************************/
var squares = Array.from(document.getElementsByClassName('square'));
var currentPlayer = document.getElementById('player');
var resetBtn = document.getElementById('reset');


/************************ define event handlers ************************/
var clickHandler = event => {
    event.target.textContent = currentPlayer.textContent;
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
    // check if there is a win or tie
    if (calculateWinner() !== null) {
        console.log('winner is ', calculateWinner());
    }
};
var resetGame = event => {
    currentPlayer.textContent = 'X';
    squares.forEach(square => {
        square.textContent = '';
    });
};

/************************ define helper functions ************************/
var calculateWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[b].textContent === squares[c].textContent) {
            return squares[a].textContent;
        }
    }
    return null;
};

/************************ add event handlers to nodes ************************/
squares.forEach(square => {
    square.addEventListener('click', clickHandler);
});

resetBtn.addEventListener('click', resetGame);