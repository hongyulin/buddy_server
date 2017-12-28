import ads from "../models/ads";
import CommonFn from "../commonfn/commonFn";

class Ads extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({ads: "success"});
    }
};

export default new Ads();