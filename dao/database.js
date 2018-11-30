var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// require("./model/shop.js")
require('./model/landers.js')

var dbURI = 'mongodb://localhost/ipet';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});