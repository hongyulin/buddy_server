// 一级页面
import express from "express";
import Ads from "../controller/ads";
import Choice from "../controller/choice";
import Circle_trends from "../controller/circle_trends";
import Circle from "../controller/circle";
import Course from "../controller/course";
import Experience from "../controller/experience";
import Goods from "../controller/goods";
import Mine from "../controller/mine";
import Recommend_user from "../controller/recommend_user";
import Recommend from "../controller/recommend";
import Topic from "../controller/topic";
import UserInfo from "../controller/userInfo";

const router = express.Router();
// 广告
router.get("/ads", Ads.ads);

// 小八精选
router.get("/choice", Choice.getChoice);

// 圈子动态
router.get("/circle/trends", Circle_trends.circleTrend);

// 根据定位获取附近的圈子
router.get("/near/circle", Circle.circleList);

// 课程推荐
router.get("/course", Course.courseList);

// 小八精选里面的经验
router.get("/experience", Experience.getExper);

// 商品
router.get("/goods", Goods.goodList);

// 我的界面
router.post("/mine", Mine.myStatus);

// 推荐关注的人
router.post("/recommend/user", Recommend_user.getUser);

// 小八动态里面的推荐
router.get("/recommend", Recommend.recommend);
router.get("/recent/exercise", UserInfo.recentExercise);


// 小八精选里面的热门话题
router.get("/topic", Topic.getTopic);

// 获取我的圈子
router.post("/mycircle", UserInfo.myCircle);

// 获取附近人
router.get("/nearperson", UserInfo.nearPerson);

export default router;