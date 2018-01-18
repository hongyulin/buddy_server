// show里小八精选热门话题
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    id:    String,
    title: String,
    description: String,
    header_img:  String,
    img:     String,
    partake: Number,
});

const topic = mongoose.model('topic', topicSchema);
export default topic;