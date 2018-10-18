import Row from './row.jsx';
import SelectBar from './select.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCols: [5, 5, 5, 5, 5, 5],
            currentPlayer: 'red'
        }
        this.changeParenState = this.changeParenState.bind(this);
    }

    renderRow(y) {
        return <Row y={y} />;
    }

    changeParenState(newState) {
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <SelectBar changeParenState={this.changeParenState} parentState={this.state}/>
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
