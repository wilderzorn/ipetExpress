var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 商品管理
var goodSchema = new Schema({
  // 名称，商品品牌名、推广标题；
  goodsName: {
    type: String
  },
  // 品类，狗粮、猫粮、猫砂、玩具等；（关联定义）
  goodsType: {
    type: String
  },
  // 材质或制作方法，材质（玩具等用品）、制作方法（粮食的烘培、膨化等）；（关联定义）
  goodsMaterial: {
    type: String
  },
  // 适用规格，适用幼犬、成犬、幼猫等；（关联定义）
  goodsCanFor: {
    type: String
  },
  // 专属规格，贵宾专用、比熊专用等；（关联定义）
  goodsOnlyFor: {
    type: String
  },
  // 包装规格，1kg，5kg 等；
  goodsSize: {
    type: String
  },
  // 口味，鸡肉味、牛肉味
  goodsTaste: {
    type: String
  },
  // 特殊功用，美毛、去泪痕
  goodsSpecial: {
    type: String
  },
  // 产地，国产 广州、加拿大、美国等
  goodsRegion: {
    type: String
  },
  // 出厂日期
  goodsDate: {
    type: String
  },
  // 保质期，12月（保质期设定会应景起效，如会员价）
  goodsTime: {
    type: String
  },
  // 供应商
  goodsSupplier: {
    type: String
  },
  // 特色说明
  goodsIntro: {
    type: String
  },
  // 价格，基准价格
  goodsPrice: {
    type: Number
  },
  // 商品分类：0：食品，1：玩具，2.衣物，3.房子，4.洗护，5.药品，6.户外
  goodsClassify: {
    type: Number
  },
  // 图片，小图、大图
  goodsImg: {
    type: String
  }
});

mongoose.model("goods", goodSchema, "goods");