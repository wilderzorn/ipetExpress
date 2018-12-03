const mongoose = require("mongoose")

<<<<<<< HEAD
=======

module.exports.getAllgoods = async ({ curPage, eachPage }) => {
    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    };

    const goodsModel = mongoose.model("goods");
    result.total = await goodsModel.count();//总条数
    result.maxPage = Math.ceil(result.total / result.eachPage);//最大页数
    result.rows = await goodsModel
        .find()
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({
            _id: 1
        })
    return result;
}
module.exports.getAddtodo = async ({ goodsName, goodsType, goodsMaterial, goodsCanFor, goodsOnlyFor, goodsSize, goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsIntro, goodsPrice }) => {
    let result = { goodsName, goodsType, goodsMaterial, goodsCanFor, goodsOnlyFor, goodsSize, goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsIntro, goodsPrice: Number(goodsPrice) }
    // console.log(result);
    return await mongoose.model("goods").create(result);
}
module.exports.updateGoods = async (updateId) => {
    // console.log(updateId)
    return await mongoose.model("goods").find({ _id: updateId.updateId });//find里面是找寻条件，找到键是—id值是传过来的id，就找到了对应的数据
}

module.exports.storeGoods = async ({
    _id, goodsName, goodsType, goodsMaterial, goodsCanFor, goodsOnlyFor, goodsSize, goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsIntro, goodsPrice
}) => {
    return await mongoose
        .model("goods")
        .update({
            _id
        }, {
                $set: {
                    goodsName, goodsType, goodsMaterial, goodsCanFor, goodsOnlyFor, goodsSize, goodsTaste, goodsSpecial, goodsRegion, goodsDate, goodsTime, goodsSupplier, goodsIntro, goodsPrice
                }
            });
}
module.exports.removeGoods = async (removeId) => {
    // console.log(removeId)
    return await mongoose.model("goods").remove({ _id: removeId.removeId });//根据id删除相应的数据
}
>>>>>>> be4bd7c3f75b7822c12dc497d0b4f76cfb3f2bcf
