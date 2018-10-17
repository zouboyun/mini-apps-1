class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1519397028973-5dbbdaecd2f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71af403f1fea800733284e2e0711d4f&auto=format&fit=crop&w=1950&q=80" alt=""/>
                <button id="checkout" className="big-btn">CHECKOUT>></button>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));