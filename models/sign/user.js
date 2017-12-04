import mongoose from "mongoose"
const schema = mongoose.Schema;
const userSchema = new schema({
    user_id: Number,
    username: String,
    password: String,
})
const user = mongoose.model("user", userSchema)
export default user