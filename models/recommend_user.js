// 圈子动态推荐关注的人。
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recommendUserSchema = new Schema({
    id: Number,
    header_img: String,
    name: String,
    host_num: Number,
    activity_host: Number,
});

const recommendUser = mongoose.model('recommenduser', recommendUserSchema);
export default recommendUser;