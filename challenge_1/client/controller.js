// var Board = require('./Model.js'); // does not work for browser
var player1 = prompt('Player one please enter your name here...');
var player2 = prompt('Player two please enter your name here...');

var calculateWinner = (arr) => {
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
        if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
            return arr[a];
        }
    }
    return null;

};

class Board {
    constructor() {
        this.squareList = Array(9).fill(null);
        this.isNextMoveX = true;
        this.previousWinner = '';
        this.msg = '';
        this.nextPlayer = player1;
        this.player1 = player1;
        this.player2 = player2;
        this.clickCount = 0;
        this.player1WinCount = 0;
        this.player2WinCount = 0;
    }

    clickHandler(index) {
        var squares = this.squareList.slice();
        if (squares[index] === null) {
            squares[index] = this.isNextMoveX ? 'X' : 'O';
            this.squareList = squares;
            this.nextPlayer = this.isNextMoveX ? this.player2 : this.player1;
            this.isNextMoveX = !this.isNextMoveX;
            this.clickCount++;
            this.previousWinner = calculateWinner(this.squareList);
        }
        if (this.previousWinner !== null) {
            this.previousWinner === 'X' ? this.previousWinner = this.player1 : this.previousWinner = this.player2;
            this.previousWinner === this.player1 ? this.player1WinCount++ : this.player2WinCount++;
            this.msg = 'winner is ' + this.previousWinner + '!!!';
        } else if (this.clickCount === 9) {
            this.msg = 'you tied!!!';
        }
    }

    resetGame() {
        this.nextPlayer = this.previousWinner;
        this.isNextMoveX = this.nextPlayer === this.player1 ? true : false;
        this.squareList = Array(9).fill(null);
        this.msg = '';
        this.clickCount = 0;
    }
};



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
// var player1 = prompt('Player one please enter your name here...');
// var player2 = prompt('Player two please enter your name here...');

var newBoard = new Board();
var render = () => {
    currentPlayer.textContent = newBoard.nextPlayer;
    result.textContent = newBoard.msg;
    xWinTime.textContent = newBoard.player1WinCount;
    oWinTime.textContent = newBoard.player2WinCount;
    pwinner.textContent = newBoard.previousWinner;
    squares.forEach((square, index) => {
        square.textContent = newBoard.squareList[index];
    });
    playerOne.forEach(player => {
        player.textContent = newBoard.player1;
    });
    playerTwo.forEach(player => {
        player.textContent = newBoard.player2;
    });
};

render();
board.addEventListener('click', e => {
    newBoard.clickHandler(e.target.id);
    render();
});

resetBtn.addEventListener('click', e => {
    newBoard.resetGame();
    render();
});