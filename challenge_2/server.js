/*********************** require express ***********************/
var express = require('express');
var bodyParser = require('body-parser');
// var CSVGenerator = require('./models.js');
var app = express();

/*********************** configure app ***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/*********************** serve up static assets ***********************/
app.use(express.static(__dirname + '/client'));

/*********************** configure routes ***********************/
app.get('/upload_json', (req, res) => {
    res.render('index');
});

app.post('/upload_json', (req, res) => {
    // var csv = CSVGenerator(JSON.parse(req.body.data));
    res.render('index');
});

/*********************** start server ***********************/
app.listen(1337, () => {
    console.log('app is listening at port 1337');
});