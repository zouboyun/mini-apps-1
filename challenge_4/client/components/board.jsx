import Row from './row.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRow(y) {
        return <Row y={y} />;
    }

    render() {
        return (
            <div className="board">
              {this.renderRow(0)}
              {this.renderRow(1)}
              {this.renderRow(2)}
              {this.renderRow(3)}
              {this.renderRow(4)}
              {this.renderRow(5)}
            </div>
        )
    }
};

export default Board;
