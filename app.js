import { express } from 'express';
import { db } from "./mongodb/db.js";
// 管理config
import { config } from "config-lite";
import { router } from "./routes/index.js";
// 解析cookie
import { cookieParser } from "cookie-parser";
import { session } from "express-session";
import { connectMongo } from "connect-mongo";
// 记录日志
import { winston } from "winston";
import { expressWinston } from "express-winston";
import { path } from "path";
// 处理单页面路由更自然
import { history } from "connect-history-api-fallback";
// 统计请求数量
import { statistic } from "./middlewares/statistic";

const app = express();
// 所有的路由都通过这个，添加头部。
app.all('*', (req, res, next) => {
    // 设置后台允许跨域
    res.header("Access-Control-Allow-Origin", req.header.origin || "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("X-Powered-By", '3.2.1');
    if(req.method == "OPTIONS") {
        res.send(200);
    }else{
        next();
    }
});
// 统计api
app.use(statistic.apiRecord);
// session登录拦截，然后存入mongo
const mongoSession = connectMongo(session);
app.use(cookieParse());
app.use(session({
    // 设置cookie中，保存session的字段名称，
    name: config.session.name,
    // 通过设置secret字符串来计算hash来放在cookie中，使产生signedCookie放篡改。
    secret: config.session.secret,
    // 即使session没有修改也保存。
    resave: true,
    // 无论有没有session cookie，每次请求都设置个session cookie？
    saveUninitialized: false,
    // 存放session id的cookie的相关选项设置。
    cookie: config.session.cookie,
    // session的存储方式为mongodb
    store: new mongoSession({
        url: config.dbUrl
    })
}))
router(app);
app.use(history());
// express内置的，用于方便托管静态文件用的。
app.use(express.static("./public"));
app.listen(config.port)
