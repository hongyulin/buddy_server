import express from "express"
import User from "../controller/user"
import UserInfo from "../controller/userInfo"

const router = express.Router();
router.post("/login", User.login);
// 添加一个保存用户信息的路由
// router.get("/login", UserInfo.login);

export default router