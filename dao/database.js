var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

require("./model/pets.js")
require("./model/goods.js")
require("./model/user.js")
require("./model/service.js")
require("./model/shop.js")

var dbURI = 'mongodb://localhost/ipet';

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});