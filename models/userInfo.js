// 保存用户经纬度
import mongoose from "mongoose"

const schema = mongoose.Schema;

const userInfoSchema = new Schema({
    longitude: String,

})

const userInfo = mongoose.model('userInfo', userInfoSchema)