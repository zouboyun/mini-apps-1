var express = require('express')
var app = express();

app.use(express.static(__dirname + '/client'));
app.listen(1337, () => {
    console.log('app is listening at port 1337');
});
