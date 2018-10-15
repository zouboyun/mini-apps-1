var squares = document.getElementsByClassName('square');
var clickHandler = event => {
    event.target.textContent = 'X';
};

Array.from(squares).forEach(square => {
    console.log(square);
    square.addEventListener('click', clickHandler);
})