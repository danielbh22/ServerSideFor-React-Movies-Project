const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    name : String,
    image : String,
    genres : [String],
    premiered : Date
});



module.exports = mongoose.model('movies',movieSchema);
