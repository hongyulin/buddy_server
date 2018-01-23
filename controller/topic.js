import topic from "../models/topic";
import CommonFn from "../commonfn/commonFn";

class Topic extends CommonFn{
    constructor(){
        super();
        this.getTTopic = this.getTTopic.bind(this);
    }
    async getTTopic(req, res, next){
        try{
    		const message = await topic.find();
        	res.send({
        		message: message,
        		status: 200
        	});
    	}catch(err){
    		res.send({
    			message: err,
    			status: 500
    		})
    	}
    }
}

export default new Topic();