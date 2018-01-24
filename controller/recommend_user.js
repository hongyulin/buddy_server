import recommendUser from "../models/recommend_user";
import CommonFn from "../commonfn/commonFn";

class RecommendUser extends CommonFn{
    constructor(){
        super();
        this.getUser = this.getUser.bind(this);
    }
    getUser(req, res, next){
    	try{
    		recommendUser.find({}, (err,tank) => {
    			if(err) res.send(err);
    			res.send({
					message: tank,
					status: 200
				})
    		});
    	}catch(err){
    		res.send({
    			message: err,
    			status: 501
    		})
    	}
    	
    }
}

export default new RecommendUser();