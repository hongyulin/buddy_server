import eventproxy from "eventproxy";
import cheerio from "cheerio";
import superagent from "superagent";
import charset from "superagent-charset";
import config from "config-lite";
const superagentutf8 =  charset(superagent);
import mongoose from "mongoose";
import Mine from "../models/mine";
import uuid from "uuid";
mongoose.connect(config.dbUrl);
let ep = new eventproxy();
let spider_url = config.spiderUrl;
export default {
    getMines(){
        let reqUrlLength = 5;
        let reqUrl = [];
        for(let i = 0; i < reqUrlLength; i++) {
            reqUrl.push();
        }
    }
}