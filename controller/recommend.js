import recommend from "../models/recommend";
import CommonFn from "../commonfn/commonFn";

class Recommend extends CommonFn{
    constructor(){
        super();
        this.recommend = this.recommend.bind(this);
    }
    recommend(req, res, next){
        res.send({recommend: "test"});
    }
}

export default new Recommend();