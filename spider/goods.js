import eventproxy from "eventproxy";
import cheerio from "cheerio";
import superagent from "superagent";
import charset from "superagent-charset";
import config from "config-lite";
const superagentutf8 =  charset(superagent);
import mongoose from "mongoose";
import Good from "../models/goods";
import uuid from "uuid";
mongoose.connect(config.dbUrl);
let ep = new eventproxy();
let spider_url = config.spiderUrl;
export default {
    getGoods(){
        let reqUrlLength = 5;
        let reqUrl = [];
        for(let i = 0; i < reqUrlLength; i++) {
            reqUrl.push();
        }
    }
} 