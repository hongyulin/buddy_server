// 保存用户经纬度
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    id: Number,
    header_img: {type: String, default: "default.jpg"},
    name: String, 
    sex: String,
    age: Number,
    level: {type: Number, default: 1},
    login_time: date,
    longitude: String,
    latitude: String,

})

const userInfo = mongoose.model('userInfo', userInfoSchema)