const mongoose = require("mongoose")

module.exports.getAllPetsByPage = async ({ curPage, eachPage }) => {
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

module.exports.addPet = async (result) => {
  return await mongoose.model("pets").create(result);
}

//修改页面显示
module.exports.updatePetById = async (_id) => {
  return await mongoose
    .model("pets")
    .find(_id)
}

//修改
module.exports.updatePet = async ({ _id, petsName, petsSpecies, petsType, petsGender, petsPrice, petsImg, petsColor, petsBirthday, petsCharacter }) => {
  return await mongoose
    .model("pets")
    .update({
      _id
    }, {
        $set: { petsName, petsSpecies, petsType, petsGender, petsPrice: Number(petsPrice), petsImg, petsColor, petsBirthday, petsCharacter }
      });
}

//删除
module.exports.removePet = async (data) => {
  return await mongoose.model("pets").remove(data)
}