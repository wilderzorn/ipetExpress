var express = require('express');
var router = express.Router();
const { getAllgoods, getAddtodo,updateGoods,storeGoods,removeGoods } = require("../dao/goodsDao.js")


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//所有商品
router.get('/getAllgoods', async function (req, res, next) {
  res.send(await getAllgoods(req.query))
});
//往数据库放数据
router.post('/getAddtodo', async function (req, res, next) {
  // console.log(req.body);
  res.send(await getAddtodo(req.body))

});
//找到修改id相应的数据
router.get('/updateGoods', async function (req, res, next) {
  res.send(await updateGoods(req.query))
  // console.log(req.query);
});
//把修改后的数据传到数据库
router.post('/storeGoods', async function (req, res, next) {
  res.send(await storeGoods(req.body))
  // console.log(req.body);
});
//删除
router.get('/removeGoods', async function (req, res, next) {
  res.send(await removeGoods(req.query))
  // console.log(req.body);
});

module.exports = router;

