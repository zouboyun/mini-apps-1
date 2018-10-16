/*********************** require express ***********************/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*********************** configure body parser ***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*********************** serve up static assets ***********************/
app.use(express.static(__dirname + '/client'));

/*********************** configure routes ***********************/
app.post('/upload_json', (req, res) => {
    console.log(typeof req.body, req.body);
    res.status(201).end();
});

/*********************** start server ***********************/
app.listen(1337, () => {
    console.log('app is listening at port 1337');
});