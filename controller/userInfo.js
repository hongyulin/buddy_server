import userInfo from "../models/userInfo";
import CommonFn from "../commonfn/commonFn";
import formidable from "formidable"

class UserInfo extends CommonFn {
    constructor(){
        super();
        this.register = this.register.bind(this);
        this.updataInfo = this.updataInfo.bind(this);
    }
    register(req, res, next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const {nickName, headerImg, user_id} = fields;
            try {
                if(!nickName){
                    throw new Error("未填写用户名")
                }
            }catch(err){
                res.send({
                    message: err,
                    status: 401,
                });
                return
            }
            try{
                const new_data = {
                    header_img: headerImg, 
                    name: nickName
                }
                userInfo.findOneAndUpdate({id: user_id}, {$set: new_data}, (err, tank) => {
                    if (err) res.send(err);
                    res.send({
                        message: "success",
                        status: 200,
                    });
                })
            }catch(err){
                res.send({
                    message: err,
                    status: 501
                })
            }
        })
    }

    updataInfo(req, res, next){
        const form = formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const {sex, level, BFP, target, limbs, year, month, day, height, weight, user_id} = fields;
            try {
                const new_data = {sex, level, BFP, target, limbs, year, month, day, height, weight}
                userInfo.findOneAndUpdate({id: user_id}, {$set: {info: new_data}}, (err, tank) => {
                    if(err) res.send(err);
                    res.send({
                        message: "success",
                        content: tank,
                        status:  200
                    })
                })
            }catch(err){
                res.send({
                    message: err,
                    status:  502,
                })
            }

        })
    }
};

export default new UserInfo();