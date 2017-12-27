// 小八精选内容。
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const choiceSchema = new Schema({
    id: Number,
    img: String,
    header_img: String,
    description: String,
    name: String,
    likes: Number,
});

const choice = mongoose.model('choice', choiceSchema);

export default choice;