const mongoose = require("mongoose")

module.exports.getAllShopByPage = async ({ curPage, eachPage }) => {
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
    .populate("goodsId")
    .populate("petId")
    .populate("serviceId");
  return result;
}

module.exports.addShop = async ({ shopName, shopLicenceNum, shopLicenceImg, shopAdd, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopCommission }) => {
  let result = { shopName, shopLicenceNum, shopLicenceImg, shopAdd, shopLocation, shopCorporate, shopTel, shopImg, shopFeature, shopCommission: Number(shopCommission) }
  let obj = await mongoose.model("shop").create(result)
  let { _id } = obj
  console.log(_id);
  return { shopId: _id }
}

module.exports.setShopByIdAsync = async (result) => {
  return await mongoose.model("shop")
    .find(result)
    .populate("goodsId")
    .populate("petId")
    .populate("serviceId");
}

module.exports.addOneEmployeeById = async (result) => {
  let { shopId, shopEmployee } = result
  return await mongoose.model("shop").find({ _id: shopId }).update({ shopEmployee: shopEmployee })
}

module.exports.updataShopById = async (result) => {
  let { _id, shopName, shopLicenceNum, shopAdd, shopLocation, shopCorporate, shopTel, shopFeature, shopCommission } = result
  return await mongoose.model("shop").find({ _id }).update({ shopName, shopLicenceNum, shopAdd, shopLocation, shopCorporate, shopTel, shopFeature, shopCommission })
}

module.exports.addGoodsForShop = async (result) => {
  let { goodsId, _id } = result;
  return await mongoose.model("shop").updateOne({ _id }, { $push: { goodsId } })
}

module.exports.addServerForShop = async (result) => {
  let { serviceId, _id } = result;
  return await mongoose.model("shop").updateOne({ _id }, { $push: { serviceId } })
}

module.exports.addIpetForShop = async (result) => {
  let { petId, _id } = result;
  return await mongoose.model("shop").updateOne({ _id }, { $push: { petId } })
}