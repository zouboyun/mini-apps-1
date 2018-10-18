class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null
        }
    }

    componentDidMount() {
        if (this.props.x !== null) {
            this.setState({ x: this.props.x });
        }
        if (this.props.y !== null) {
            this.setState({ y: this.props.y });
        }
    }

    render() {
        return (
          <div className="square">
              <div className="circle">
                  {this.state.x},
                  {this.state.y}
              </div>
          </div>
        )
    }
}

export default Square;