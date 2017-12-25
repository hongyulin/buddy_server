import mongoose from "mongoose"
const Schema = mongoose.Schema;
const userSchema = new Schema({
    user_id: Number,
    user_name: String,
    password: String,
})
const user = mongoose.model("user", userSchema)
export default user