// 秀里面小八精选的经验分享
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    id: Number,
    img: String,
    header_img: String,
    title: String,
    description: String,
    likes: Number,
    talk_num: Number, 
});

const experience = mongoose.model('experience', experienceSchema);

export default experience;