import topic from "../models/topic";
import CommonFn from "../commonfn/commonFn";

class topic extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({topic: "test"});
    }
}

export default new topic();