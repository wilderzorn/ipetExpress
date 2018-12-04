var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//门店管理
var shopSchema = new Schema({
  // 名称
  shopName: {
    type: String
  },
  // 营业执照号码
  shopLicenceNum: {
    type: String
  },
  // 营业执照图片
  shopLicenceImg: {
    type: String
  },
  // 营业地址
  shopAdd: {
    type: String
  },
  // 定位
  shopLocation: {
    type: String
  },
  // 法人
  shopCorporate: {
    type: String
  },
  // 联系电话
  shopTel: {
    type: String
  },
  // 头图
  shopImg: {
    type: String
  },
  // 特色
  shopFeature: {
    type: String
  },
  // 佣金比例
  shopCommission: {
    type: Number
  },
  // 店员属性, [{姓名：'',职级：'',联系电话：''}]
  shopEmployee: [
    { empName: '', empLevel: '', empPhone: '' }
  ],
  // 关联商品ID
  goodsId: [{
    type: Schema.Types.ObjectId,
    ref: "goods"
  }],
  // 关联服务ID
  serviceId: [{
    type: Schema.Types.ObjectId,
    ref: "service"
  }],
  // 关联宠物
  petId: [{
    type: Schema.Types.ObjectId,
    ref: "pets"
  }]
});

mongoose.model("shop", shopSchema, "shop");