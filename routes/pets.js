var express = require('express');
var router = express.Router();
const { getAllPetsByPage } = require("../dao/petsDao.js")

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getAllPetsByPageAsync', async function (req, res, next) {
    console.log(req.query);
    res.send(await getAllPetsByPage(req.query))
})


module.exports = router;  