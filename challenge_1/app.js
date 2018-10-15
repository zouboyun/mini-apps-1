var squares = document.getElementsByClassName('square');
var currentPlayer = document.getElementById('player');
var clickHandler = event => {
    event.target.textContent = currentPlayer.textContent;
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
};

Array.from(squares).forEach(square => {
    console.log(square);
    square.addEventListener('click', clickHandler);
})