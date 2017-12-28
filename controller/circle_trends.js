import circleTrends from "../models/circle_trends";
import CommonFn from "../commonfn/commonFn";

class CircleTrends extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({circleTrends: "success"});
    }
}

export default new CircleTrends();