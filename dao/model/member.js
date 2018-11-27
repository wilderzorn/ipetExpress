var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//会员管理
var memberSchema = new Schema({
  // 电话号码
  memberPhone: {
    type: String
  },
  // 昵称
  memberAcount: {
    type: String
  },
  // 真实姓名
  memberName: {
    type: String
  },
  // 会员卡
  menberCard: {
    type: String
  },
  // 头图
  memberImg: {
    type: String
  },
  // 送货地址
  memberAdd: {
    type: String
  },
  // 区域
  memberArea: {
    type: Number
  },
  /*
      拥有的宠物
      [{
        名字：
        品类：狗、猫
        种类：泰迪、比熊等
        颜色：
        出生日期：年月即可
        性格：温驯、狂野、攻击性
      }]
  */
  memberPet: [
    { petName: '', petBreed: '', petSpecies: '', petColour: '', petBirth: '', petCharacter: '' }
  ]
});

mongoose.model("member", memberSchema, "member");