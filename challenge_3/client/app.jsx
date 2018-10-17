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
            <div>
                <img src="https://images.unsplash.com/photo-1519397028973-5dbbdaecd2f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71af403f1fea800733284e2e0711d4f&auto=format&fit=crop&w=1950&q=80" alt=""/>
                <button id="checkout" className="big-btn" onClick={this.handleCheckout}>CHECKOUT</button>
            </div>
        );
    }
};

class Form1 extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextForm(e) {
        ReactDOM.render(<Form2 />, document.getElementById('app'));
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<App />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Sign In Here</h1>
                <form>
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="i.e. John Doe"/>
                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="i.e. johndoe@johndoe.com"/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" placeholder="i.e. #$^AFSDe23"/>
                    <button id="backtohome" className="big-btn" onClick={this.handlePreviousForm}>PREVIOUS</button>
                    <button id="forwardtoform2" className="big-btn" onClick={this.handleNextForm}>NEXT</button>
                </form>
            </div>
        );
    }
};

class Form2 extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextForm(e) {
        ReactDOM.render(<Form3 />, document.getElementById('app'));
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<Form1 />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <h1>Shipping Information Here</h1>
            <form>
                <label>Address</label>
                <input type="text" id="ad1" name="ad1" placeholder="i.e. 944 Market St"/>
                <label>Address Line 2</label>
                <input type="text" id="ad2" name="ad2" placeholder="optional.."/>
                <label>City</label>
                <input type="text" id="city" name="city" placeholder="i.e. San Francisco"/>
                <label>State</label>
                <input type="text" id="state" name="state" placeholder="i.e. CA"/>
                <label>Shipping Zip Code</label>
                <input type="text" id="szp" name="szp" placeholder="i.e. 94103"/>
                <label>Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="i.e. 555-555-5555"/>
                <button id="backtoform1" className="big-btn" onClick={this.handlePreviousForm}>PREVIOUS</button>
                <button id="forwardtoform3" className="big-btn" onClick={this.handleNextForm}>NEXT</button>
            </form>
        </div>
        );
    }
};

class Form3 extends React.Component {
    constructor(props) {
        super(props);
    }
    handleNextForm(e) {
        console.log('order submitted!');
        e.preventDefault();
    }

    handlePreviousForm(e) {
        ReactDOM.render(<Form2 />, document.getElementById('app'));
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <h1>Payment Information Here</h1>
            <form>
                <label>Credit Card Number</label>
                <input type="text" id="cc" name="cc" placeholder="i.e. 123456789123"/>
                <label>Expiration Date</label>
                <input type="date" id="ed" name="ed" placeholder="i.e. 2018/01/01"/>
                <label>CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="i.e. 123"/>
                <label>Billing Zip Code</label>
                <input type="text" id="bzp" name="bzp" placeholder="i.e. 94103"/>
                <button id="backtoform2" className="big-btn" onClick={this.handlePreviousForm}>PREVIOUS</button>
                <button id="placeorder" className="big-btn" onClick={this.handleNextForm}>PLACE ORDER</button>
            </form>
        </div>
        );
    }
};

window.addEventListener('load', e => {
    ReactDOM.render(<App />, document.getElementById('app'));
});
