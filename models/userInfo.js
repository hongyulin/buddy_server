// 用户的相关信息。
import mongoose from "mongoose";

const Schema = mongoose.Schema;
// 粉丝数和following的人是相关联的。
const userInfoSchema = new Schema({
    id: String,
    header_img: {type: String, default: "default_header.jpg"},
    name: String, 
    mobile: String,
    info: {
        sex:    String,
        level:  String, 
        BFP:    String, 
        target: String, 
        limbs:  String, 
        year:   String, 
        month:  String, 
        day:    String, 
        height: String, 
        weight: String,
    },
    level:    {type: Number, default: 1},
    step_Num: {type: Number, default: 0},
    following: [
        {
            id:         {type: String, default: ""},
            name:       {type: String, default: ""},
            header_img: {type: String, default: "default_header.jpg"}
        },
    ],
    login_time: Date,
    self_img: [
        {type: String, default: ""}
    ],
    exercise_time: {type: Number, default: 0},
    fans:          {type: Number, default: 0},
    choice_num:    {type: Number, default: 0},
    city:          {type: String, default: ""},
    longitude:     {type: String, default: ""},
    latitude:      {type: String, default: ""},
    circle: [
        {
            name:       {type: String, default: ""},
            header_img: {type: String, default: ""},
            id:         {type: String, default: ""},
        }
    ]
});

const userInfo = mongoose.model('userInfo', userInfoSchema);

export default userInfo;