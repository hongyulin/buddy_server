// 用户的相关信息。
import mongoose from "mongoose";

const Schema = mongoose.Schema;
// 粉丝数和following的人是相关联的。
const userInfoSchema = new Schema({
    id: String,
    header_img: {type: String, default: "default_header.jpg"},
    name: String, 
    mobile: String,
    sex: String,
    age: Number,
    level: {type: Number, default: 1},
    step_Num: {type: Number, default: 0},
    following: [
        {
            id: String,
            name: String,
            header_img: {type: String, default: "default_header.jpg"}
        },
    ],
    login_time: Date,
    self_img: [
        String
    ],
    exercise_time: Number,
    fans: Number,
    choice_num: Number,
    city: String,
    longitude: String,
    latitude: String,
    circle: [
        {
            name: String,
            header_img: String,
            id: String,
        }
    ]
});

const userInfo = mongoose.model('userInfo', userInfoSchema);

export default userInfo;