import CommonFn from './commonFn';
import fetch from "node-fetch";

class Location extends CommonFn {
    constructor(){
        super();
        this.baiduak = "Ch5SXX8WxKMsN5DGddOjGIh7v5vlG6zK";
    }
    async getPosition(req){
        return new Promise(async (resolve, reject) => {
            let ip = req.headers['x-forwarded-for'] || 
            req.connection.remoteAddress || 
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
            
            let ipList = ip.split(":");
            ip = ipList.pop();
            if(process.env.NODE_ENV == "development"){
                ip = "180.173.33.7"
            }
            try{
                fetch("https://api.map.baidu.com/location/ip?ip=" + ip + "&ak=Ch5SXX8WxKMsN5DGddOjGIh7v5vlG6zK")
                    .then(res => {
                        return res.json();
                    }).then( body =>{
                        resolve(body.content.address);
                    })
            }catch(err){
                reject("定位失败");
            }
        })
    }

};

export default Location;