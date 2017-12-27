// 商城中的商品
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const goodsSchema = new Schema({
    id: Number,
    name: String,
    img: {type: String, default: "default_good.jpg"},
    ori_price: Number,
    dis_price: Number,
    free_post: {type:Boolean, default: true},
    source: String,
    red_packet: {
        money: Number,
        send_num: Number,
    }
});

const goods = mongoose.model('goods', goodsSchema);

export default goods;