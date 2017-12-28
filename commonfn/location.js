import CommonFn from './commonFn';

class Location extends CommonFn {
    constructor(){
        super();
        this.baiduak = "Ch5SXX8WxKMsN5DGddOjGIh7v5vlG6zK";
    }
    async getPosition(req){
        return new Promise(async (resolve, reject) => {
            let ip = req.header["x-forwarded-for"];
            let ipList = ip.split(":");
            ip = ipList.pop();
            if(process.env.NODE_ENV == "development"){
                ip = "180.173.33.7"
            }
            try{
                let result;
                result = await this.fetch("https://api.map.baidu.com/location/ip", {
                    ip,
                    AK: this.baiduak
                })
                if(result.status == 0){
                    let cityInfo = {
                        city: result.content.address_detail.city,
                    }
                }
            }catch(err){
                reject("定位失败");
            }
        })
    }

};

export default Location;