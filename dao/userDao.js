const mongoose = require("mongoose")

//门店登陆
module.exports.login = async (users) => {
    const data = await mongoose.model("users").find({ userName: users.userName, userPwd: users.userPwd, userType: 1, userStatus: 1 });
    if (data.length) {
        return ({
            status: true
        });
    } else {
        return ({
            status: false
        });
    }
}
//平台登陆
module.exports.flatLogin = async (users) => {
    const data = await mongoose.model("users").find({ userName: users.userName, userPwd: users.userPwd, userType: 0 });
    if (data.length) {
        return ({
            status: true
        });
    } else {
        return ({
            status: false
        });
    }
}
//注册
module.exports.reg = async (users) => {
    const data = await mongoose.model("users").find({ userName: users.userName,userAcount:users.userAcount});
    if (data.length) {
        return ({
            status: false
        });
    } else {
        await mongoose.model("users").create(users);
        return ({
            status: true
        });
    }
}
//门店渲染列表

module.exports.usersListByPage = async ({ curPage, eachPage }) => {

    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    }
    const studentModel = mongoose.model("users").find({userType: 1,userStatus: 1 })

    result.total = await studentModel.count(); //统计总数
    result.maxPage = Math.ceil(result.total / result.eachPage); //总页数，ceil向下取整
    result.rows = await studentModel
        .find({ userType: 1, userStatus: 1 })
        .skip((result.curPage - 1) * result.eachPage) //跳转，从哪里开始查
        .limit(result.eachPage) //查询多少条
        .sort({
            _id: 1
        })

    return result;

}
//门店授权渲染列表

module.exports.authorizerByPage = async ({ curPage, eachPage }) => {

    const result = {
        curPage: Number(curPage),
        eachPage: Number(eachPage)
    }
    const studentModel = mongoose.model("users").find()
    result.total = await studentModel.count({userType: 1}); //统计总数
    result.maxPage = Math.ceil(result.total / result.eachPage); //总页数，ceil向下取整
    result.rows = await studentModel
        .find({ userType: 1 })
        .skip((result.curPage - 1) * result.eachPage) //跳转，从哪里开始查
        .limit(result.eachPage) //查询多少条
        .sort({
            _id: 1
        })

    return result;

}

//修改
module.exports.upDateUsers = async (obj) => {
    let { _id, usersLoginName, usersWord, usersPhone, usersEmail, usersName } = obj
    return await mongoose
        .model("users")
        .find({ _id })
        .update({
            userAcount: usersLoginName, userPwd: usersWord, userPhone: usersPhone, userMail: usersEmail, userName: usersName
        });
}
//门店授权
module.exports.authorizerUsers = async (obj) => {
    let { _id, userStatus } = obj
    return await mongoose
        .model("users")
        .find({ _id })
        .update({
            _id, userStatus
        });
}
//删除
module.exports.removeUsers = async (data) => {
    return await mongoose.model("users").remove(data)
}