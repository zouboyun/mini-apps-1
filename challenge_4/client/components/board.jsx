import Row from './row.jsx';
import SelectBar from './select.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMoves: [],
            currentPlayer: 'red'
        }
        for (var i = 0; i < 6; i++) {
            this.state.currentMoves.push(Array(7).fill(null));
        }
        this.changeParenState = this.changeParenState.bind(this);
    }

    renderRow(y) {
        return <Row y={y} />;
    }

    changeParenState(newState) {
        this.setState(newState);
    }

    checkForWinner(x, y, currentMoves, currentPlayer) {
        var countDown = 1;
        var countLeftDown = 1;
        var countRightDown = 1;
        var countLeftUp = 1;
        var countRightUp = 1;
        var countLeft = 1;
        var countRight = 1;
        // check left, fix x
        for (var i = y; i >= 0; i--) {
            if (currentMoves[x][i] === currentPlayer && currentMoves[x][i - 1] === currentPlayer) {
                countLeft++;
            }
        }
        // check right, fix x
        for (var i = y; i < 6; i++) {
            if (currentMoves[x][i] === currentPlayer && currentMoves[x][i + 1] === currentPlayer) {
                countRight++;
            }
        }
        if (x <= 2) {
            // check downwards
            for (var i = x; i < 5; i++) {
                if (currentMoves[i][y] === currentPlayer && currentMoves[i + 1][y] === currentPlayer) {
                    countDown++;
                }
            }
            if (y >= 3) {
                // check left diagonal
                let tempY = y;
                for (var i = x; i < 5; i++) {
                    if (currentMoves[i][tempY] === currentPlayer && currentMoves[i + 1][tempY - 1] === currentPlayer) {
                        countLeftDown++;
                        tempY--;
                    }
                }
            }
            if (y <= 3) {
                // check right diagonal
                let tempY = y;
                for (var i = x; i < 5; i++) {
                    if (currentMoves[i][tempY] === currentPlayer && currentMoves[i + 1][tempY + 1] === currentPlayer) {
                        countRightDown++;
                        tempY++;
                    }
                }
            }
        } else if (x > 2) {
            if (y >= 3) {
                // check left diagonal
                let tempY = y;
                for (var i = x; i >= 0; i--) {
                    if (currentMoves[i][tempY] === currentPlayer && currentMoves[i - 1][tempY - 1] === currentPlayer) {
                        countLeftUp++;
                        tempY--;
                    }
                }
            }
            if (y <= 3) {
                // check right diagonal
                let tempY = y;
                for (var i = x; i >= 0; i--) {
                    if (currentMoves[i][tempY] === currentPlayer && currentMoves[i - 1][tempY + 1] === currentPlayer) {
                        countRightUp++;
                        tempY++;
                    }
                }
            }
        }
        return (countDown >= 4 || countLeftDown >= 4 || countRightDown >=4 || countLeftUp >=4 || countRightUp >= 4 || (countLeft + countRight) > 4);
    }

    render() {
        return (
            <div>
                <SelectBar changeParenState={this.changeParenState} parentState={this.state} checkForWinner={this.checkForWinner}/>
                <div className="board">
                    {this.renderRow(0)}
                    {this.renderRow(1)}
                    {this.renderRow(2)}
                    {this.renderRow(3)}
                    {this.renderRow(4)}
                    {this.renderRow(5)}
                </div>
            </div>
        )
    }
};

export default Board;
