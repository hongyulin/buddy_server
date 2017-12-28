// 0级页面，登录部分。
import express from "express";
import User from "../controller/user";
import UserInfo from "../controller/userInfo";

const router = express.Router();
router.post("/login", User.login);
// 添加一个保存用户信息的路由
router.post("/register", UserInfo.register);

export default router;