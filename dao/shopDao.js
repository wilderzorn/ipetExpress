const mongoose = require("mongoose")

module.exports.getAllShopByPage = async ({ curPage, eachPage }) => {
  console.log(123123123);
  
  // console.log({ curPage, eachPage });
  let result = {
    curPage: Number(curPage),
    eachPage: Number(eachPage)
  }
  const shopModule = mongoose.model("shop");
  result.total = await shopModule.count();
  result.maxPage = Math.ceil(result.total / result.eachPage);
  result.rows = await shopModule
    .find()
    .skip((result.curPage - 1) * result.eachPage)
    .limit(result.eachPage)
    .sort({ _id: 1 })
  // .populate("classId")
  return result;
}