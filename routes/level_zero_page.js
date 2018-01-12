// 0级页面，登录部分。
import express from "express";
import User from "../controller/user";
import UserInfo from "../controller/userInfo";
import commonFn from "../commonfn/commonFn";
const commonFn = new commonFn();


const router = express.Router();
router.post("/login", User.login);
router.post("/uploadimg", commonFn.uploadImg)
// 添加一个保存用户信息的路由
router.post("/register", UserInfo.register);

export default router;