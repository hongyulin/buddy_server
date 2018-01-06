const superagent = require("superagent");
var async = require("async");
var request = require("request");
var fs = require("fs")
var url = "https://api2.hotbody.cn/api/home/v3/feed/new?offset=216&limit=100&feed_uid=11935bb7-2d98-4d60-9fcc-15b78d75c211&type=0"
var ServerCookie = " user_token=1dc4a251-360b-4e34-abbb-5ad75f768962; expires=Mon, 03-Jan-2028 09:11:56 GMT; Max-Age=315360000; path=/"
var downloadPic = function(src, dest){
    request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
      console.log('pic saved!')
    })
};
var down = function(imgList){
    async.mapSeries(imgList, function(item,callback){
        setTimeout(function(){
            downloadPic(item, "./pic/" + (new Date()).getTime()+".jpg");
            callback(null, item);
        },800)
    })
};
superagent.get(url)
    .set('Content-Type', 'application/json;charset=UTF-8')
    .set('Cookie', ServerCookie)
    .end(function(err, res){
        var resData = res.body.data;
        var imgList = [];
        for(let i = 0; i < resData.length; i++){
            imgList.push(resData[i].meta.image);
        };
        console.log(imgList);
        down(imgList);
    })