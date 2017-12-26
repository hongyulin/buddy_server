// 保存用户经纬度
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    id: Number,
    type: String,
    img: {type: String, default: "default_add.jpg"}
})

const userInfo = mongoose.model('goodAd', userInfoSchema)