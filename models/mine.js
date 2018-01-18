// 我的,
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mineSchema = new Schema({
    id:             String,
    header_img:     {type: Number, default: "default_header.jpg"},
    fans:           {type: Number, default: 0},
    following:      {type: Number, default: 0},
    qrCode:         String,
    trend:          Number,
    signup_time:    Date,
    unread_email:   Number,
    unread_badge:   Number,
    shopping_cart:  Number,
    coupon:         Number,
    
});

const mine = mongoose.model("mine", mineSchema);
export default mine;