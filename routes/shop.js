var express = require('express');
var router = express.Router();
var { getAllShopByPage } = require('../dao/shopDao.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 所有门店
router.get('/getAllShopByPageAsync', async function (req, res, next) {
  console.log(req.query);
  res.send(await getAllShopByPage(req.query))
});

module.exports = router;
