var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require("./model/user.js")
require("./model/service.js")
var dbURI = 'mongodb://localhost/ipet';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});