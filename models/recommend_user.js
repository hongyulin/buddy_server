// 圈子动态推荐关注的人以及小八-动态中的关注。
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recommendUserSchema = new Schema({
    id: String,
    header_img: String,
    name: String,
    host_num: {type: Number, default: 0},
    activity_host: {type: Number, default: 0},
    type: String,
    exercise_time: Number,
    fans_num: Number,
    choice_num: Number,
    img: [String],
});

const recommendUser = mongoose.model('recommenduser', recommendUserSchema);
export default recommendUser;