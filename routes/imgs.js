var express = require('express');
var router = express.Router();

const { uploadFile } = require("../util/upload.js")
var { upload } = require("../dao/imgsDao.js")

/* GET users listing. */
router.post('/addImg', async function (req, res, next) {
  const { success, data } = await uploadFile(req, res, {
    flieType: "ipet",
    path: "./public/images/"
  })
  res.send(await upload(data))
});

module.exports = router;
