import mine from "../models/mine";
import CommonFn from "../commonfn/commonFn";

class Mine extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({mine: "test"});
    }
}

export default new Mine();