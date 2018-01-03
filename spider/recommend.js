import uuid from "uuid";
// 30
export default [
    {
        id: uuid.v4(),
        header_img: "",
        title: String,
        time: (new Date()).toISOString(),
        img: "",
        content: String,
        likes: 23,
        talk_num: 52,
        share_num: 12,
    }
]