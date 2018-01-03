import uuid from "uuid";
export default [
    {
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
    }
]