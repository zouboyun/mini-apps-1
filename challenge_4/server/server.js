/*********************** require packages ***********************/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*********************** configure app ***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*********************** serve up static assets ***********************/
app.use(express.static('public'));


/*********************** start server ***********************/
app.listen(3000, () => {
    console.log('app is listening at port 3000');
});