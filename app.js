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