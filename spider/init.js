import mongoose from "mongoose";
const config = require("config-lite")(__dirname);
mongoose.connect(config.default.dbUrl, {server: {useMongoClient: true}});
// import collectGood from "./goods";
// import collectUserInfo from "./userInfo";
import AdsModel from "../models/ads"
import collectAds from "./ads";
// import collectChoice from "./choice";
// import collectCircleTrend from "./circle_trends";
// import collectCircle from "./circle";
// import collectCourse from "./course";
// import collectExperience from "./experience";
// import collectMine from "./mine";
// import collectRecommend from "./recommend";
// import collectRecommendUser from "./recommend_user";
// import collectTopic from "./topic";

// collectGood();
collectAds.forEach((item) => {
    AdsModel.create(item)
});
// collectAds();
// collectChoice();
// collectCircleTrend();
// collectCircle();
// collectCourse();
// collectExperience();
// collectMine();
// collectRecommend();
// collectRecommendUser();
// collectTopic();