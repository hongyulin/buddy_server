// 用户登录时候
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id:     String,
    mobile: String,
});

const user = mongoose.model("user", userSchema);

export default user;