var express = require('express');
var router = express.Router();
const { getAllPetsByPage, addPet, updatePetById, updatePet, removePet } = require("../dao/petsDao.js")

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllPetsByPageAsync', async function (req, res, next) {
  res.send(await getAllPetsByPage(req.query))
})

//新增宠物
router.post('/addPetAsync', async function (req, res, next) {
  res.send(await addPet(req.body))
});

//修改页面显示
router.get('/updatePetByIdAsync', async function (req, res, next) {
  res.send(await updatePetById(req.query));
});

//修改
router.post('/updatePetAsync', async function (req, res, next) {
  res.send(await updatePet(req.body));
});

//删除
router.post('/removePetAsync', async function (req, res, next) {
  res.send(await removePet(req.body));
});

module.exports = router;  