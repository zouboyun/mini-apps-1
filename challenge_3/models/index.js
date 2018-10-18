var db = require('../db/index.js');

module.exports = {
    users: {
        get: null,
        post: ({ name, email, address }, callback) => {
            let queryStr = `insert into users (name, email, address) values (${db.escape(name)}, ${db.escape(email)}, ${db.escape(address)});`;
            db.query(queryStr, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result);
                }
            });
        }
    },

    payments: {
        get: null,
        post: ({ ccNumber, cvv, billingZip, expirationDate }, userId, callback) => {
            let queryStr = `insert into payments (ccNumber, cvv, billingZip, expirationDate, userId) values (${db.escape(ccNumber)}, ${db.escape(cvv)}, ${db.escape(billingZip)}, ${db.escape(expirationDate)}, ${db.escape(userId)});`;
            db.query(queryStr, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result);
                }
            });
        }
    },

    orders: {
        get: null,
        post: (orderData, userId, paymentId, callback) => {
            let queryStr = `insert into orders (userId, paymentId) values (${db.escape(userId)}, ${db.escape(paymentId)});`;
            db.query(queryStr, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null, result);
                }
            });
        }
    }
};