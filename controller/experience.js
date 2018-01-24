import experience from "../models/experience";
import CommonFn from "../commonfn/commonFn";

class Experience extends CommonFn{
    constructor(){
        super();
        this.getExper = this.getExper.bind(this);
    }
	async getExper(req, res, next){
        try{
    		const message = await experience.find();
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

export default new Experience();