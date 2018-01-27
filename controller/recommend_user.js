import recommendUser from "../models/recommend_user";
import CommonFn from "../commonfn/commonFn";
import formidable from "formidable"

class RecommendUser extends CommonFn{
    constructor(){
        super();
        this.getUser = this.getUser.bind(this);
    }
    getUser(req, res, next){
		let form = formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			const num = fields.num;
			try{
				recommendUser.find({}, (err,tank) => {
					if(err) res.send(err);
					res.send({
						message: tank,
						status: 200
					})
				}).limit(num);
			}catch(err){
				res.send({
					message: err,
					status: 501
				})
			}
    	});
    }
}

export default new RecommendUser();