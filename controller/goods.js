import goods from "../models/goods";
import CommonFn from "../commonfn/commonFn";

class Goods extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({experience: "test"});
    }
}

export default new Goods();