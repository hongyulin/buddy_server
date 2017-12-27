// 所有的广告都放在这儿，type为类型，包括商城顶部的广告，微课堂上面的轮播，微课堂下面的训练营
// 小八精选上面的广告，运动圈里面的额挑战赛，公益广告，圈子活动
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    id: Number,
    type: String,
    img: {type: String, default: "default_add.jpg"}
});

const goodAd = mongoose.model('goodAd', userInfoSchema);

export default goodAd;