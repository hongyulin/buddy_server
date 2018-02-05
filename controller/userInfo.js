import userInfo from "../models/userInfo";
import CommonFn from "../commonfn/commonFn";
import formidable from "formidable";

class UserInfo extends CommonFn {
    constructor(){
        super();
        this.register = this.register.bind(this);
        this.updataInfo = this.updataInfo.bind(this);
        this.nearPerson = this.nearPerson.bind(this);
        this.recentExercise = this.recentExercise.bind(this);
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

    async nearPerson(req, res, next){
        const {pageIndex, pageSize} = req.query;
        const skips = (pageIndex -1)*pageSize;
        if(pageIndex < 0 || pageSize < 0){
            res.send({
                message: "参数错误",
                status: 400,
            });
            return
        }
        try {
            let fields = {
                header_img: 1, 
                step_Num:   1, 
                login_time: 1, 
                name:       1,
                _id:        0,
                info:       1, 
                level:      1
            }
            const message = await userInfo.find({}, fields, {}).skip(Number(skips)).limit(Number(pageSize));
            res.send({
                message: message,
                status:  200
            })
        }catch(err){
            res.send({
                message: err,
                status:  501,
            })
        }
    }

    async recentExercise(req, res, next){
        const {pageIndex, pageSize} = req.query;
        console.log(pageSize,pageIndex);
    	const skips = (pageIndex -1)*pageSize;
		if(pageIndex < 0 || pageSize < 0){
			res.send({
				message: "参数错误",
				status: 400,
			})
			return
		}
    	try{
            let field = {
                header_img: 1,
                self_img:   1,
                login_time: 1,
                name:       1,
            }
    		const message = await userInfo.find({}, field, {}).skip(Number(skips)).limit(Number(pageSize));
        	res.send({
        		message: message,
        		status:  200
        	});
    	}catch(err){
    		res.send({
    			message: err,
    			status:  500
    		})
    	}
    }

    async myCircle(req, res, next){
        const form = formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            const user_id = fields.id;
            try{
                await userInfo.find({id: user_id},{circle: 1, _id: 0}, (err, tank) => {
                    if(err){
                        res.send(err);
                    } else{
                        let newMes = tank[0]["circle"].slice(0,3);
                        res.send({
                            message: newMes,
                            status: 200
                        });
                    }

                })
            }catch(err){
                res.send({
                    message: err,
                    status: 500,
                });
            }
        })
    }
};

export default new UserInfo();