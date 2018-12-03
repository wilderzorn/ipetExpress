//表现层
var express = require('express');
var router = express.Router();

const { getAllServicesByPage, addServices, upDateServices, upDateServicesById, removeServices, upload } = require("../dao/serviceDao.js")
var { uploadFile } = require("../util/upload.js");

/* GET users listing. */


//列表
// router.get('/getAllServices', async function (req, res, next) {
//   res.send(await getAllServices(req.query))
// });

//分页
router.get('/getAllServicesByPage', async function (req, res, next) {
  res.send(await getAllServicesByPage(req.query));
});

//新增
router.post('/addServices', async function (req, res, next) {
  res.send(await addServices(req.body))
});

//修改页面显示
router.get('/upDateServicesById', async function (req, res, next) {
  res.send(await upDateServicesById(req.query));
});

//修改
router.post('/upDateServices', async function (req, res, next) {
  res.send(await upDateServices(req.body));
});

//删除
router.post('/removeServices', async function (req, res, next) {
  res.send(await removeServices(req.body));
});

//上传图片
router.post('/upload', async function (req, res, next) {
  //上传文件事件
  const { success, data } = await uploadFile(req, res, {
    //目录
    fileType: "service",
    //路径
    path: "./public/images/"
  })
  console.log(data);

  res.send(await upload(data))
});

module.exports = router;
