// 保存用户经纬度
import mongoose from "mongoose"

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    id: Number,
    header_img: {type: String, default: "default_header.jpg"},
    name: String, 
    sex: String,
    age: Number,
    level: {type: Number, default: 1},
    step_Num: {type: Number, default: 0},
    following: [
        {
            id: Number,
            name: String,
            header_img: {type: String, default: "default_header.jpg"}
        },
    ],
    login_time: Date,
    longitude: String,
    latitude: String,

})

const userInfo = mongoose.model('userInfo', userInfoSchema)