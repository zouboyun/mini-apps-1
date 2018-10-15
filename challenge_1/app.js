var squares = document.getElementsByClassName('square');
var currentPlayer = document.getElementById('player');
var resetBtn = document.getElementById('reset');
var clickHandler = event => {
    event.target.textContent = currentPlayer.textContent;
    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
};

Array.from(squares).forEach(square => {
    square.addEventListener('click', clickHandler);
})

resetBtn.addEventListener('click', event => {
    window.location.reload();
});