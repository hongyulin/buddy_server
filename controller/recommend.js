import recommend from "../models/recommend";
import CommonFn from "../commonfn/commonFn";

class Recommend extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({recommend: "test"});
    }
}

export default new Recommend();