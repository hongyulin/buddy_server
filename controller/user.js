import user from "../models/user";
import userInfo from "../models/userInfo";
// 加密
import crypto from "crypto";
// 时间格式化
import dtime from "time-formater";
// 处理表单数据
import formidable from "formidable";
// 生成唯一id
import uuid from "uuid";
import Location from "../commonfn/location";
import jwt from "jwt-simple";
const config = require("config-lite")(__dirname);
const jwtTokenSecret = config.default.token.jwtTokenSecret;
class User extends Location {
    constructor(){
        super();
        this.login = this.login.bind(this);
    }
    async login(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const {mobile, idCode} = fields;
            const token = req.headers.token == undefined;
            try{
                if(!mobile && !token){console.log(1)
                    throw new Error("手机参数错误");
                }else if(!idCode && !token){
                    throw new Error("验证码参数错误");
                }else if(token){
                    let token_time = jwt.decode(token, jwtTokenSecret);
                    token_time = token_time.exp;
                    if(token_time > (new Date()).getTime()){
                        res.send({"status": "success", is_register: true})
                    }
                }
            }catch(err){
                res.send({
                    status: 0,
                    type: "ERROR_QUERY",
                    message: err.message,
                })
                return
            }
            try{
                const userDetail = await user.findOne({mobile});
                if(!userDetail){
                    let user_id = uuid.v4();
                    const newUser = {mobile, id: user_id};
                    const login_time = (new Date()).getTime();
                    const cityInfo = await this.getPosition(req);
                    const newUserInfo = {
                        name: mobile, 
                        mobile: mobile,
                        id: user_id, 
                        login_time, 
                        city: cityInfo,
                    };
                    user.create(newUser);
                    userInfo.create(newUserInfo);
                    res.send({"status": "success", "userInfo": newUserInfo});
                    // location中的fetch有问题！       
                }else{
                    const userInfoDetail = await userInfo.findOne({id: userDetail.id});
                    const expires = (new Date()).getTime() + 7*24*60*60*1000;
                    const token = jwt.encode({
                        iss: "Levinson",
                        exp: expires,
                    }, jwtTokenSecret);
                    res.send({"status": "success", "userInfo": userInfoDetail, token: token, is_register: true});
                }
            }catch(err){
                res.send({
                    status: 0,
                    type: "LOGIN_FAIL",
                    message: err
                })
            }
        })
    }
    
    // 密码登录去掉，每次都用手机验证码登录。
    // cryptoPw_(pw){
    //     const cryptopw = this.sha1_(this.sha1_(pw).slice(1,5) + this.sha1_(pw));
    //     return cryptopw;
    // }
    // sha1_(pw){
    //     const sha1 = crypto.createHash("sha1");
    //     return sha1.update(pw).digest("base64");
    // }

}
export default new User();