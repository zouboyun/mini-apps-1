/*********************** require packages ***********************/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db/index.js');
var models = require('./models/index.js');

/*********************** configure app ***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/*********************** serve up static assets ***********************/
app.use(express.static(__dirname + '/public'));


/*********************** configure routes ***********************/
app.post('/checkout', (req, res) => {
    var arr = [req.body.data.ad1, req.body.data.ad2, req.body.data.city, req.body.data.state, req.body.data.szp];
    var address = arr.join(' ');
    var userData = {
        name: req.body.data.name,
        email: req.body.data.email,
        address: address
    };
    var paymentData = {
        ccNumber: req.body.data.cc,
        cvv: req.body.data.cvv,
        billingZip: req.body.data.bzp,
        expirationDate: req.body.data.ed
    };
    // asyncly call user creation, payment creation and order creation
    models.users.post(userData, (err, result) => {
        if (err) {
            res.status(500).end();
        } else {
            var userId = result.insertId;
            models.payments.post(paymentData, userId, (err, result) => {
                if (err) {
                    res.status(500).end();
                } else {
                    var paymentId = result.insertId;
                    models.orders.post({}, userId, paymentId, (err, result) => {
                        res.status(201).end();
                    });
                }
            });
        }
    });
    console.log(typeof req.body.data, req.body.data);
});


/*********************** start server ***********************/
app.listen(8090, () => {
    console.log('app is listening at port 8090');
});
