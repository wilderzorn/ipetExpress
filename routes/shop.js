var express = require('express');
var router = express.Router();
var { addGoodsForShop, getAllShopByPage, addShop, setShopByIdAsync, addOneEmployeeById, updataShopById } = require('../dao/shopDao.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 所有门店
router.get('/getAllShopByPageAsync', async function (req, res, next) {
  res.send(await getAllShopByPage(req.query))
});

//  增加门店
router.get('/addShopAsync', async function (req, res, next) {
  res.send(await addShop(req.query))
});
// 通过ID找门店
router.get('/setShopByIdAsync', async function (req, res, next) {
  res.send(await setShopByIdAsync(req.query))
});
// 通过ID增加店员
router.post('/addOneEmployeeByIdAsync', async function (req, res, next) {
  res.send(await addOneEmployeeById(req.body))
});
// 通过ID修改门店
router.post('/updataShopByIdAsync', async function (req, res, next) {
  res.send(await updataShopById(req.body))
});
// 通过ID修改门店
router.post('/addGoodsForShopAsync', async function (req, res, next) {
  res.send(await addGoodsForShop(req.body))
});


module.exports = router;
