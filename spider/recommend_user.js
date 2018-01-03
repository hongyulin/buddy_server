import uuid from "uuid";
export default [
    {
        id: Number,
        header_img: String,
        name: String,
        host_num: {type: Number, default: 0},
        activity_host: {type: Number, default: 0},
        type: String,
        exercise_time: Number,
        fans_num: Number,
        choice_num: Number,
        img: [String],
    }
]