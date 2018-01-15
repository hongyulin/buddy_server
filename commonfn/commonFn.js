import fetch from "node-fetch";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import gm from "gm";
import uuid from "uuid";
import qiniu from "qiniu";

const ACCESS_KEY = "46X3X9Z4juBc-eo_6xC9yBrPxavTjEpB6w-UDV6w";
const SECRET_KEY = "JgDhksH7oz8wfG2-euOzj5keRbYAbc9Pbo_q__6t";
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

export default class CommonFn {
    constructor() {
        this.uploadImg = this.uploadImg.bind(this);
        this.qiniu = this.qiniu.bind(this);
    }
    async uploadImg(req, res, next) {
        let type = req.params.type;
        try {
            let img_path = await this.qiniu(req);
            res.send({
                status: "success",
                message: img_path,
            })
        }catch(err) {
            res.send({
                status: "ERROR_UPLOAD_IMG",
                message: "上传图片失败"
            })
        }
    }

    async qiniu(req){
        return new Promise((resolve, reject) => {
           let form = new formidable.IncomingForm();
           form.uploadDir = "./test";
           form.keepExtensions = true;
           form.parse(req, async (err, fields, files) => {
                let img_id = uuid.v4();
                console.log("files:",files);
                let type = path.extname(files.file.name);
                let repath = "./test/" + img_id + type;
                
                try {
                    let key = img_id + type;
                    // 上传的路径。
                    fs.renameSync(files.file.path, repath);
                    const token = this.upToken("test", key);
                    const imgKey = this.uploadFile(token, key, repath);
                    // 删除图片。
                    fs.unlink(repath);
                    resolve(imgKey) 
                }catch(err){
                    fs.unlink(repath);
                    console.log(err)
                    reject("保存失败");
                }
           });
        })
    }
    // 上传策略函数。
    upToken(bucket, key){
        // bucket是上传的空间，key为上传到七牛云的文件名。
        let putPolicy = new qiniu.rs.PutPolicy({scope: bucket});
        return putPolicy.uploadToken(mac);
    }
    // 构建上传函数
    uploadFile(upToken, key, localFile){
        return new Promise((resolve, reject) => {
            let config = new qiniu.conf.Config();
            config.zone = qiniu.zone.Zone_z0;
            var formUploader = new qiniu.form_up.FormUploader(config);
            var putExtra = new qiniu.form_up.PutExtra();
            formUploader.putFile(upToken, key, localFile, putExtra, (respErr, respBody, respInfo) => {
                if (respErr) {
                    throw respErr;
                }
                if (respInfo.statusCode == 200) {
                    resolve(respBody.key); 
                } else {
                    console.log(respInfo.statusCode);
                    console.log(respBody);
                }
            })
        })
    }

    async getPath(){
        return new Promise((resolve, reject) => {
            //创建一个新的incomingform表单
            const form = formidable.IncomingForm();
            form.uploadDir = "./public/images";
            form.parse(req, async (err, fields, files) => {
                let img_id = uuid.v1();
                let fName = img_id + path.extname(files.file.name);
                let path = "./public/images" + fName;
                try{
                    await fs.rename(files.file.path, path);
                    gm(path)
                    .resize(200, 200, "!")
                    .write(path, async (err) => {
                        if(err){
                            reject("裁剪失败");
                            return
                        }
                        resolve(fName);
                    })
                }catch(err){
                    console.log("err:",err);
                    fs.unlink(files.file.path);
                    reject("保存图片失败");
                }
            })
        })
    }
    

}
