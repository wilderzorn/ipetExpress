var express = require('express');
var router = express.Router();
const { login, reg, usersListByPage, upDateUsers, removeUsers, flatLogin, authorizerByPage, authorizerUsers } = require("../dao/userDao.js")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//门店登陆
router.post('/login', async function (req, res, next) {
  let { userName, userPwd, } = req.body;
  res.send(await login({ userName, userPwd }));
});
//平台登陆
router.post('/flatLogin', async function (req, res, next) {
  let { userName, userPwd } = req.body;
  res.send(await flatLogin({ userName, userPwd }));
});
//注册
router.post('/reg', async function (req, res, next) {
  let { userName, userPwd, userType, userStatus, userAcount, userPhone, userMail } = req.body;
  res.send(await reg({ userName, userPwd, userType, userStatus, userAcount, userPhone, userMail }));
});
//门店管理员列表
router.get('/usersListByPage', async function (req, res, next) {
  res.send(await usersListByPage(req.query));
});
//门店授权列表
router.get('/authorizerByPage', async function (req, res, next) {
  res.send(await authorizerByPage(req.query));
});
//修改
router.post('/upDateUsers', async function (req, res, next) {
  res.send(await upDateUsers(req.body));
});
//门店授权
router.post('/authorizerUsers', async function (req, res, next) {
  res.send(await authorizerUsers(req.body));
});
//删除
router.post('/removeUsers', async function (req, res, next) {
  res.send(await removeUsers(req.body));
});
module.exports = router;