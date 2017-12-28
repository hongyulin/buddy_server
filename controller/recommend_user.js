import recommendUser from "../models/recommend_user";
import CommonFn from "../commonfn/commonFn";

class recommendUser extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({recommendUser: "test"});
    }
}

export default new recommendUser();