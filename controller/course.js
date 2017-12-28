import course from "../models/course";
import CommonFn from "../commonfn/commonFn";

class Course extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({course: "test"});
    }
}

export default new Course();