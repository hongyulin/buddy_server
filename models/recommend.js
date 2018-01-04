// show里小八推荐的内容。
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recommendSchema = new Schema({
    id: String,
    header_img: String,
    name: String,
    time: Date,
    img: String,
    content: String,
    likes: Number,
    talk_num: Number,
    share_num: Number,
});

const recommend = mongoose.model('recommend', recommendSchema);
export default recommend;