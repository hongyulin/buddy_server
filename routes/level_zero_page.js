// 0级页面，登录部分。
import express from "express";
import User from "../controller/user";
import UserInfo from "../controller/userInfo";
import CommonFn from "../commonfn/commonFn";
const commonFn = new CommonFn();


const router = express.Router();

router.post("/login", User.login);

router.post("/uploadimg", commonFn.uploadImg);

// 添加一个保存用户信息的路由
router.post("/register", UserInfo.register);

router.post("/updatainfo", UserInfo.updataInfo);

export default router;