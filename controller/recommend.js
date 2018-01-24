import recommend from "../models/recommend";
import CommonFn from "../commonfn/commonFn";

class Recommend extends CommonFn{
    constructor(){
        super();
        this.recommend = this.recommend.bind(this);
    }
    async recommend(req, res, next){
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
            const message = await recommend.find().skip(Number(skips)).limit(Number(pageSize));
            res.send({
                message: message,
                status: 200,
            })
        }catch(err){
            res.send({
                message: err,
                status: 500,
            })
        }
    }
}

export default new Recommend();