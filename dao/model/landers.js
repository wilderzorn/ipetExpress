var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//外部人员登录注册，登录
var landersSchema = new Schema({

    //昵称
    landersAcount: {
        type: String
    },
    //密码
    landersPwd: {
        type: String
    },
    //电话号码
    landersPhone: {
        type: String
    },
    //邮箱
    landersMail: {
        type: String
    },
    //真实姓名
    landersName: {
        type: String
    }
})
mongoose.model("landers", landersSchema, "landers");