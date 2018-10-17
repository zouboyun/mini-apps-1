class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCheckout(e) {
        ReactDOM.render(<Form1 />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <img src="https://images.unsplash.com/photo-1519397028973-5dbbdaecd2f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71af403f1fea800733284e2e0711d4f&auto=format&fit=crop&w=1950&q=80" alt=""/>
                <button id="checkout" className="big-btn" onClick={this.handleCheckout}>CHECKOUT</button>
            </div>
        );
    }
};

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleNextForm(e) {
        ReactDOM.render(<Form2 states={this.state}/>, document.getElementById('app'));
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<App />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1>Sign In Here</h1>
                <form>
                    <label>Name</label>
                    <input type="text" id="name" value={this.state.name} placeholder="i.e. John Doe" onChange={this.handleInputChange}/>
                    <label>Email</label>
                    <input type="email" id="email" value={this.state.email} placeholder="i.e. johndoe@johndoe.com" onChange={this.handleInputChange}/>
                    <label>Password</label>
                    <input type="password" id="password" value={this.state.password} placeholder="i.e. #$^AFSDe23" onChange={this.handleInputChange}/>
                    <button id="backtohome" className="big-btn" onClick={this.handlePreviousForm.bind(this)}>PREVIOUS</button>
                    <button id="forwardtoform2" className="big-btn" onClick={this.handleNextForm.bind(this)}>NEXT</button>
                </form>
            </div>
        );
    }
};

class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.states;
        this.state.ad1 = '';
        this.state.ad2 = '';
        this.state.city = '';
        this.state.state = '';
        this.state.szp = '';
        this.state.phone = '';
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleNextForm(e) {
        ReactDOM.render(<Form3 states={this.state}/>, document.getElementById('app'));
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<Form1 />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
            <h1>Shipping Information Here</h1>
            <form>
                <label>Address</label>
                <input type="text" id="ad1" value={this.state.ad1} placeholder="i.e. 944 Market St" onChange={this.handleInputChange} />
                <label>Address Line 2</label>
                <input type="text" id="ad2" value={this.state.ad2} placeholder="optional.." onChange={this.handleInputChange} />
                <label>City</label>
                <input type="text" id="city" value={this.state.city} placeholder="i.e. San Francisco" onChange={this.handleInputChange} />
                <label>State</label>
                <input type="text" id="state" value={this.state.state} placeholder="i.e. CA" onChange={this.handleInputChange} />
                <label>Shipping Zip Code</label>
                <input type="text" id="szp" value={this.state.szp} placeholder="i.e. 94103" onChange={this.handleInputChange} />
                <label>Phone Number</label>
                <input type="tel" id="phone" value={this.state.phone} placeholder="i.e. 555-555-5555" onChange={this.handleInputChange} />
                <button id="backtoform1" className="big-btn" onClick={this.handlePreviousForm.bind(this)}>PREVIOUS</button>
                <button id="forwardtoform3" className="big-btn" onClick={this.handleNextForm.bind(this)}>NEXT</button>
            </form>
        </div>
        );
    }
};

class Form3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.states;
        this.state.cc = '';
        this.state.ed = '';
        this.state.cvv = '';
        this.state.bzp = '';
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.id]: e.target.value});
        console.log('target id', e.target.id, 'target value', e.target.value);
        console.log('current state', this.state);
    }


    handlePlaceOrder(e) {
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<Form2 />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
            <h1>Payment Information Here</h1>
            <form>
                <label>Credit Card Number</label>
                <input type="text" id="cc" value={this.state.cc} placeholder="i.e. 123456789123"  onChange={this.handleInputChange}/>
                <label>Expiration Date</label>
                <input type="date" id="ed" value={this.state.ed} placeholder="i.e. 2018/01/01"  onChange={this.handleInputChange}/>
                <label>CVV</label>
                <input type="text" id="cvv" value={this.state.cvv} placeholder="i.e. 123"  onChange={this.handleInputChange}/>
                <label>Billing Zip Code</label>
                <input type="text" id="bzp" value={this.state.bzp} placeholder="i.e. 94103"  onChange={this.handleInputChange}/>
                <button id="backtoform2" className="big-btn" onClick={this.handlePreviousForm.bind(this)}>PREVIOUS</button>
                <button id="placeorder" className="big-btn" onClick={this.handlePlaceOrder.bind(this)}>PLACE ORDER</button>
            </form>
        </div>
        );
    }
};

window.addEventListener('load', e => {
    ReactDOM.render(<App />, document.getElementById('app'));
});
