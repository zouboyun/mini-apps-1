class SelectBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var children = document.getElementsByClassName('row-' + e.target.id);
        for (var i = children.length - 1; i >= 0; i--) {
            if(!children[i].classList.contains('checked')) {
                children[i].classList.add('checked');
                var currentPlayer = this.props.parentState.currentPlayer;
                var currentMoves = this.props.parentState.currentMoves;
                if (currentPlayer === 'red') {
                    children[i].classList.add('red');
                    currentMoves[i][e.target.id] = 'red';
                    if (this.props.checkForWinner(i, Number(e.target.id), currentMoves, currentPlayer)) {
                        document.getElementById('winner').textContent = currentPlayer + ' is the winner!';
                    }
                    currentPlayer = 'black';
                } else {
                    children[i].classList.add('black');
                    currentMoves[i][e.target.id] = 'black';
                    if (this.props.checkForWinner(i, Number(e.target.id), currentMoves, currentPlayer)) {
                        document.getElementById('winner').textContent = currentPlayer + ' is the winner!';
                    }
                    currentPlayer = 'red';
                }
                this.props.changeParenState({ currentPlayer, currentMoves });
                break;
            }
        }
    }

    render () {
        return (
            <div className="row">
                <div className="select-bar" id="0" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="1" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="2" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="3" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="4" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="5" onClick={this.handleClick}>DROP!</div>
                <div className="select-bar" id="6" onClick={this.handleClick}>DROP!</div>
            </div>
        )
    }
}

export default SelectBar;