var express = require('express');
var router = express.Router();
const { getAllPets } = require("../dao/petsDao.js")

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/getAllPets', async function (req, res, next) {
    res.send(await getAllPets());
});


module.exports = router;  