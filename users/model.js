var http = require('http');
var mongoose = require('mongoose');

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/mhd';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + uristring);
    }
});

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    points: Number
});

module.exports = mongoose.model('User', userSchema);