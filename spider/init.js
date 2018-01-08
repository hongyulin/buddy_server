import mongoose from "mongoose";
const config = require("config-lite")(__dirname);
mongoose.connect(config.default.dbUrl, {server: {useMongoClient: true}});
import collectGood from "./goods";
import collectUserInfo from "./userInfo";
import collectAds from "./ads";
import collectChoice from "./choice";
import collectCircleTrend from "./circle_trends";
import collectCircle from "./circle";
import collectCourse from "./course";
import collectExperience from "./experience";
import collectRecommend from "./recommend";
import collectRecommendUser from "./recommend_user";
import collectTopic from "./topic";

import AdsModel from "../models/ads"
import RecommendModel from "../models/recommend"
import UserInfoModel from "../models/userInfo"
import TopicModel from "../models/topic"
import RecommendUserModel from "../models/recommend_user"
import GoodsModel from "../models/goods"
import ExperienceModel from "../models/experience"
import CourseModel from "../models/course"
import CircleModel from "../models/circle"
import ChoiceModel from "../models/choice"
import CircleTrendsModel from "../models/circle_trends"


collectAds.forEach((item) => {
    AdsModel.create(item)
});
collectRecommend.forEach((item) => {
    RecommendModel.create(item)
});
collectUserInfo.forEach((item) => {
    UserInfoModel.create(item)
});
collectTopic.forEach((item) => {
    TopicModel.create(item)
});
collectRecommendUser.forEach((item) => {
    RecommendUserModel.create(item)
});
collectGood.forEach((item) => {
    GoodsModel.create(item)
});
collectExperience.forEach((item) => {
    ExperienceModel.create(item)
});
collectCourse.forEach((item) => {
    CourseModel.create(item)
});
collectCircle.forEach((item) => {
    CircleModel.create(item)
});
collectChoice.forEach((item) => {
    ChoiceModel.create(item)
});
collectCircleTrend.forEach((item) => {
    CircleTrendsModel.create(item)
});