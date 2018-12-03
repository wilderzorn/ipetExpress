var express = require('express');
var router = express.Router();
const { getAllPetsByPage, addPet } = require("../dao/petsDao.js")

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getAllPetsByPageAsync', async function (req, res, next) {
    console.log(req.query);
    res.send(await getAllPetsByPage(req.query))
})

//新增宠物
router.post('/addPetAsync', async function (req, res, next) {
    console.log(req.body);
    res.send(await addPet(req.body))
});

module.exports = router;  