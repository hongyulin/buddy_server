// 附近圈子
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const circleSchema = new Schema({
    id: String,
    description: String,
    img: [String],
    address: String,
    longitude: String,
    latitude: String,
    header_img: String,
    name: String,
    apply_people: [
        {
            name: String,
            id: String,
            header_img: String,
        }
    ],
});

const circle = mongoose.model('circle', circleSchema);
export default circle;