import ads from "../models/ads";
import CommonFn from "../commonfn/commonFn";

class Ads extends CommonFn{
    constructor(){
        super();
        this.mallAd = this.mallAd.bind(this);
    }
    mallAd(req, res, next){
		const type = req.query.type;
		try {
			ads.findOne({type: type}, (err, tank) => {
				if(err) res.send(err);
				res.send({
					message: tank,
					status: 200
				})
			})
		}catch(err){
			res.send({
				message: err,
				satatus: 501,
			})
		}
    }
};

export default new Ads();