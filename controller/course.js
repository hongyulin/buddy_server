import course from "../models/course";
import CommonFn from "../commonfn/commonFn";

class Course extends CommonFn{
    constructor(){
        super();
        this.courseList = this.courseList.bind(this);
    }
    async courseList(req, res, next){
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
    		const message = await course.find().skip(Number(skips)).limit(Number(pageSize));
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

export default new Course();