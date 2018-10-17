/*********************** require express ***********************/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


/*********************** configure app ***********************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/*********************** serve up static assets ***********************/
app.use(express.static(__dirname + '/public'));


/*********************** configure routes ***********************/
app.get('/', (req, res) => {
    res.render('index');
});


/*********************** start server ***********************/
app.listen(8090, () => {
    console.log('app is listening at port 8090');
});
