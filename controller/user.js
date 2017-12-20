import user from "../models/sign/user"
import userInfoModel from "../../models/sign/userInfo"
// 加密
import crypto from "crypto"
// 时间格式化
import dtime from "time-formater"
// 处理表单数据
import formidable from "formidable"
// 生成唯一id
import uuid from "uuid"

class User extends 