import choice from "../models/choice";
import CommonFn from "../commonfn/commonFn";

class Choice extends CommonFn{
    constructor(){
        super();
        this.getChoice = this.getChoice.bind(this);
    }
    async getChoice(req, res, next){
        const {pageIndex, pageSize} = req.query;
    	const skips = (pageIndex -1)*pageSize;
		if(pageIndex < 0 || pageSize < 0){
			res.send({
				message: "参数错误",
				status: 400,
			})
			return
		}
    	try{
    		const message = await choice.find().skip(Number(skips)).limit(Number(pageSize));
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
};

export default new Choice();