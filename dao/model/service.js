var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 服务管理

var serviceSchema = new Schema({
  // 名称
  serviceName: {
    type: String
  },
  // 名称，服务类别（关联定义）
  serviceType: {
    type: String
  },
  // 排期,按时间段
  serviceSchedule: {
    type: String
  },
  // 适用规格,按体重范围等
  serviceCanFor: {
    type: String
  },
  // 服务规格,普修，精修等
  serviceDetial: {
    type: String
  },
  // 耗时
  serviceTime: {
    type: String
  },
  // 服务员等级，普通，高级价格不同
  serviceLevel: {
    type: String
  },
  // 价格,基准价格，会员价和活动价都以它为基准
  servicePrice: {
    type: String
  },
  // 服务
  serviceImg: [
    { bigImg: '', smallImg: '' }
  ]
});

mongoose.model("service", serviceSchema, "service");