const mongoose = require("mongoose")


module.exports.getAllPets = async () => {
    return await mongoose.model("pets").find();
}