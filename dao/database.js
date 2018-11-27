var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require("./model/user.js")
var dbURI = 'mongodb://localhost/ipet';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});