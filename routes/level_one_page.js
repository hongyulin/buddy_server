// 一级页面
import express from "express";
import ads from "../controller/ads";
import choice from "../controller/choice";
import circle_trends from "../controller/circle_trends";
import circle from "../controller/circle";
import course from "../controller/course";
import experience from "../controller/experience";
import goods from "../controller/goods";
import mine from "../controller/mine";
import recommend_user from "../controller/recommend_user";
import recommend from "../controller/recommend";
import topic from "../controller/topic";
import userInfo from "../controller/userInfo";

const router = express.Router();

// router.get("/login", User.login);

export default router;