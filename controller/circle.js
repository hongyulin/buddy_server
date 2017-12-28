import circle from "../models/circle";
import CommonFn from "../commonfn/commonFn";

class Circle extends CommonFn{
    constructor(){
        super();
    }
    test(req, res, next){
        res.send({circle: "success"});
    }
};

export default new Circle();