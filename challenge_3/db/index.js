var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'alice',
    password: 'aliceisawesome',
    database: 'checkout'
});

module.exports = connection;