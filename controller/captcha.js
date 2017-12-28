// 验证码模块
import captcha from "captchapng";
class Captcha {
    constructor(){
        
    }
    async getCaptcha(req, res, next){
        let cap = parseInt(Math.random()*9000+1000);
        let p = new captcha(80,30,cap);
        p.color(0,0,0,0);
        p.color(80,80,80,255);
        let base64 = p.getBase64();
        // httpOnly不允许js获取cookie，防止xss攻击。
        res.cookie("cap", cap, {maxAge: 300000, httpOnly: true})
        res.send({
            status: 1,
            code: "data:image/png;base64" + base64
        });
    }
}
export default new Captcha();