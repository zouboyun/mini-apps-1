/************************ select DOM nodes ************************/
var squares = Array.from(document.getElementsByClassName('square'));
var board = document.getElementById('board');
var currentPlayer = document.getElementById('player');
var resetBtn = document.getElementById('reset');
var result = document.getElementById('msg');
var xWinTime = document.getElementById('xhaswon');
var oWinTime = document.getElementById('ohaswon');
var pwinner = document.getElementById('pwinner');
var playerOne = Array.from(document.getElementsByClassName('player1'));
var playerTwo = Array.from(document.getElementsByClassName('player2'));

/************************ define data storage for state management ************************/
var player1 = prompt('Player one please enter your name here...');
var player2 = prompt('Player two please enter your name here...');
var squareList = Array(9).fill(null);
var isNextMoveX = true;
var previousWinner = '';
var nextPlayer = player1;
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
        nextPlayer = isNextMoveX ? player2 : player1;
        isNextMoveX = !isNextMoveX;
        clickedCount++;
    }
    // check if there is a win or tie
    var winner = calculateWinner();
    if (winner !== null) {
        winner === 'X' ? winner = player1 : winner = player2;
        msg = 'winner is ' + winner + '!!!';
        previousWinner = winner;
        winner === player1 ? xHasWon++ : oHasWon++;
    } else if (clickedCount === 9) {
        msg = 'you tied!!!';
    }
};

var resetGame = event => {
    nextPlayer = previousWinner;
    isNextMoveX = nextPlayer === player1 ? true : false;
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
    playerOne.forEach(player => {
        player.textContent = player1;
    });
    playerTwo.forEach(player => {
        player.textContent = player2;
    });
};

/************************ initial rendering & add event handlers to nodes ************************/
renderPage();

board.addEventListener('click', (e) => {
    clickHandler(e.target.id);
    renderPage();
});

resetBtn.addEventListener('click', resetGame);