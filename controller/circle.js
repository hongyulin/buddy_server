import circle from "../models/circle";
import CommonFn from "../commonfn/commonFn";

class Circle extends CommonFn{
    constructor(){
        super();
        this.circleList = this.circleList.bind(this);
    }
    async circleList(req, res, next){
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
    		const message = await circle.find().skip(Number(skips)).limit(Number(pageSize));
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

export default new Circle();