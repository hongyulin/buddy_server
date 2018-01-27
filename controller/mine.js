// 合并到userInfo
// import mine from "../models/mine";
import CommonFn from "../commonfn/commonFn";
import formidable from "formidable";
import userInfo from "../models/userInfo";

class Mine extends CommonFn{
    constructor(){
        super();
        this.myStatus = this.myStatus.bind(this);
    }
    async myStatus(req, res, next){
        const form = formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const user_id = fields.id;
            try{
                let fild = {
                    shop_car_new:    1,
                    shop_ticker_new: 1,
                    shop_record_new: 1,
                    badge:           1,
                    header_img:      1,
                    name:            1,
                    fans:            1,
                    following:       1,
                    trends_new:      1,
                    join_time:       1,
                    exercise_time:   1,
                    _id:             0,
                }
                await userInfo.find({id: user_id},fild, (err, tank) => {
                    if(err){
                        res.send(err);
                    } else{
                        res.send({
                            message: tank,
                            status:  200
                        });
                    }

                })
            }catch(err){
                res.send({
                    message: err,
                    status:  500,
                });
            }
        })
    }
}

export default new Mine();