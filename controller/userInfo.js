import userInfo from "../models/userInfo";
import CommonFn from "../commonfn/commonFn";

class UserInfo extends CommonFn {
    constructor(){
        super();

    }
    register(req, res, next){
        res.send({register: "success"})
    }
};

export default new UserInfo();