var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// 商品管理
var petSchema = new Schema({
    // 宠物名称；
    petsName: {
        type: String
    },
    //种类(物种：猫、够)
    petsSpecies: {
        type: String
    },
    // 宠物品种：金毛、柯基、柴犬、哈士奇等
    petsType: {
        type: String
    },
    // 宠物性别
    petsGender: {
        type: String
    },
    // 宠物价格
    petsPrice: {
        type: Number
    },
    // 图片，小图、大图
    petsImg: [
        { bigImg: '', smallImg: '' }
    ],
    //颜色
    petsColor: {
        type: String
    }
    ,
    //出生年月
    petsBirthday: {
        type: String
    },

    //性格
    petsCharacter: {
        type: String
    }
});

mongoose.model("pets", petSchema, "pets");