// 圈子里面的动态
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trendsSchema = new Schema({
    id: String,
    description: String,
    img: [  
        String,
    ],
    address: String,
    longitude: String,
    latitude: String,
    header_img: String,
    name: String,
    circle_name: String,
    likes: Number,
    talk_num: Number,
    time: Date,
});

const trends = mongoose.model('trends', trendsSchema);

export default trends