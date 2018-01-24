import circleTrends from "../models/circle_trends";
import CommonFn from "../commonfn/commonFn";

class CircleTrends extends CommonFn{
    constructor(){
        super();
        this.circleTrend = this.circleTrend.bind(this);
    }
    async circleTrend(req, res, next){
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
            const message = await circleTrends.find().skip(Number(skips)).limit(Number(pageSize));
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
}

export default new CircleTrends();