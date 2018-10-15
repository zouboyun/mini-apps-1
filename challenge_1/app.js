/************************ select DOM nodes ************************/
var squares = Array.from(document.getElementsByClassName('square'));
var board = document.getElementById('board');
var currentPlayer = document.getElementById('player');
var resetBtn = document.getElementById('reset');
var result = document.getElementById('msg');
var xWinTime = document.getElementById('xhaswon');
var oWinTime = document.getElementById('ohaswon');
var pwinner = document.getElementById('pwinner');

/************************ define data storage for state management ************************/
var squareList = Array(9).fill(null);
var isNextMoveX = true;
var previousWinner = '';
var nextPlayer = 'X';
var msg = '';
var clickedCount = 0;
var xHasWon = 0;
var oHasWon = 0;

/************************ define event handlers ************************/
var clickHandler = (index) => {
    var squares = squareList.slice();
    if (squares[index] === null) {
        squares[index] = isNextMoveX ? 'X' : 'O';
        squareList = squares;
        nextPlayer = isNextMoveX ? 'O' : 'X';
        isNextMoveX = !isNextMoveX;
        clickedCount++;
    }
    // check if there is a win or tie
    var winner = calculateWinner();
    if (winner !== null) {
        msg = 'winner is ' + winner + '!!!';
        previousWinner = winner;
        winner === 'X' ? xHasWon++ : oHasWon++;
    } else if (clickedCount === 9) {
        msg = 'you tied!!!';
    }
};

var resetGame = event => {
    nextPlayer = previousWinner;
    isNextMoveX = nextPlayer === 'X' ? true : false;
    squareList = Array(9).fill(null);
    msg = '';
    clickedCount = 0;
    renderPage();
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
        if (squareList[a] && squareList[a] === squareList[b] && squareList[b] === squareList[c]) {
            return squareList[a];
        }
    }
    return null;
};

var renderPage = () => {
    currentPlayer.textContent = nextPlayer;
    result.textContent = msg;
    xWinTime.textContent = xHasWon;
    oWinTime.textContent = oHasWon;
    pwinner.textContent = previousWinner;
    squares.forEach((square, index) => {
        // point dom value to our local object value
        square.textContent = squareList[index];
    });    
};

/************************ initial rendering & add event handlers to nodes ************************/
renderPage();

board.addEventListener('click', (e) => {
    clickHandler(e.target.id);
    renderPage();
});

resetBtn.addEventListener('click', resetGame);