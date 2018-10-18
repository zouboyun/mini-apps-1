import Square from './square.jsx';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y: null
        }
    }

    componentDidMount() {
        if (this.props.y) {
            this.setState({ y: this.props.y });
        }
    }

    renderSquare(x, y) {
        return <Square x={x} y={y} />;
    }

    render() {
        return (
            <div y={this.y} className="row">
                {this.renderSquare(0, this.y)}
                {this.renderSquare(1, this.y)}
                {this.renderSquare(2, this.y)}
                {this.renderSquare(3, this.y)}
                {this.renderSquare(4, this.y)}
                {this.renderSquare(5, this.y)}
                {this.renderSquare(6, this.y)}
            </div>
        )
    }
}

export default Row;