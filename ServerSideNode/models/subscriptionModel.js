const mongoose = require('mongoose');


let subscriptionSchema = new mongoose.Schema({
    movieid : String,
    memberid : String,
    date : Date
});

module.exports = mongoose.model('subscriptions',subscriptionSchema);
