import userInfo from "../models/userInfo";
import CommonFn from "../commonfn/commonFn";
import formidable from "formidable"

class UserInfo extends CommonFn {
    constructor(){
        super();
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
                console.log(new_data);
                userInfo.findOneAndUpdate({id: user_id}, {$set: new_data}, (err, tank) => {
                    if (err) res.send(err);
                    res.send(tank);
                })
            }catch(err){

            }
        })
        
    }
};

export default new UserInfo();