import goods from "../models/goods";
import CommonFn from "../commonfn/commonFn";

class experience extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({experience: "test"});
    }
}

export default new experience();