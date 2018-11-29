const mongoose = require("mongoose")

module.exports.getAllPetsByPage = async ({ curPage, eachPage }) => {
    console.log(123123123);

    console.log({ curPage, eachPage });
    let result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    }
    const PetsModule = mongoose.model("pets");
    result.total = await PetsModule.count();
    result.maxPage = Math.ceil(result.total / result.eachPage);
    result.rows = await PetsModule
        .find()
        .skip((result.curPage - 1) * result.eachPage)
        .limit(result.eachPage)
        .sort({ _id: 1 })
    return result;
}

module.exports.addPetAsync = async () => {
    console.log("add")
}