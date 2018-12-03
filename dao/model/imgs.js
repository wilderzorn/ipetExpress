var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 商品管理
var imgSchema = new Schema({
  // 名称，商品品牌名、推广标题；
  url: {
    type: String
  }
});

mongoose.model("imgs", imgSchema, "imgs");