class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    componentDidMount() {
        if (this.props.x) {
            this.setState({ x: this.props.x });
        }
        if (this.props.y) {
            this.setState({ y: this.props.y });
        }
    }

    render() {
        return (
          <div className="square" onClick={() => alert('click')}>
              <div className="circle"></div>
          </div>
        )
    }
}

export default Square;