import choice from "../models/choice";
import CommonFn from "../commonfn/commonFn";

class Choice extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({choice: "success"});
    }
};

export default new Choice();