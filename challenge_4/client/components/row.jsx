import Square from './square.jsx';

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    renderSquare(x, y) {
        return <Square x={x} y={y} />;
    }

    render() {
        return (
            <div className="row">
                {this.renderSquare(0, this.props.y)}
                {this.renderSquare(1, this.props.y)}
                {this.renderSquare(2, this.props.y)}
                {this.renderSquare(3, this.props.y)}
                {this.renderSquare(4, this.props.y)}
                {this.renderSquare(5, this.props.y)}
                {this.renderSquare(6, this.props.y)}
            </div>
        )
    }
}

export default Row;