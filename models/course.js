// 微课堂里面的课程
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id:         String,
    header_img: String,
    title:      String,
    describe:   String,
    subscribe:  Number,
    price:      Number,
});

const course = mongoose.model('course', courseSchema);

export default course;