class SelectBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e.target.id);
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