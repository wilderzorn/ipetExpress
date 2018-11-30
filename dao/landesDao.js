const mongoose = require("mongoose")

module.exports.getAll=async()=>{
    console.log(123);
    let data=await mongoose.model("landers").find();
    return data;
}
