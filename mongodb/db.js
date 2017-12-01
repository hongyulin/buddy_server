import mongoose from "mongoose";
import config from "config-lite";

mongoose.connect(config.ure, {server: {auto_reconnect: true}});
//把es6的promise给mongoose，解决其自身的promise没有catch问题
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once("open", () => {
    console.log("数据库连接成功");
})

db.on("error", (error) => {
    console.error("数据库连接失败：", error);
    mongoose.desconnect();
})

db.on("close", () => {
    console.log("数据库断开，重新连接中...");
    mongoose.connect(config.url, {server: {auto_reconnect: true}});
})

export default db;