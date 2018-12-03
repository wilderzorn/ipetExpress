const mongoose = require("mongoose")

module.exports.upload = async (url) => {
  return await mongoose.model("imgs").create(url);
} 