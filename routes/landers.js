var express = require('express');
var router = express.Router();

var { getAllID } = require("../dao/landesDao.js")
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAll', async function (req, res, next) {
  console.log(req.query);
  res.send(await getAllID(req.query))
});


module.exports = router;