var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports= mongoose.model('users', userSchema)
