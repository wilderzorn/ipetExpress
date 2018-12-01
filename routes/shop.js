var express = require('express');
var router = express.Router();
var { getAllShopByPage, addShop, setShopByIdAsync } = require('../dao/shopDao.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 所有门店
// router.get('/getAllShopByPageAsync', async function (req, res, next) {
//   res.send(await getAllShopByPage(req.query))
// });

//  增加门店
router.get('/addShopAsync', async function (req, res, next) {
  res.send(await addShop(req.query))
});
// 通过ID找门店
router.get('/setShopByIdAsync', async function (req, res, next) {
  res.send(await setShopByIdAsync(req.query))
});

module.exports = router;
