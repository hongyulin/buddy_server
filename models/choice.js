// 小八精选内容。
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const choiceSchema = new Schema({
    id: Number,
    name: String,
    img: String,
    header_img: String,
    description: String,
    likes: Number,
});

const choice = mongoose.model('choice', choiceSchema);

export default choice;