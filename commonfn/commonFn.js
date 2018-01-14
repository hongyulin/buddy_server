import fetch from "node-fetch";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import gm from "gm";
import uuid from "uuid";
import qiniu from "qiniu";

qiniu.conf.ACCESS_KEY = "46X3X9Z4juBc-eo_6xC9yBrPxavTjEpB6w-UDV6w";
qiniu.conf.SECRET_KEY = "JgDhksH7oz8wfG2-euOzj5keRbYAbc9Pbo_q__6t";

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
                img_path,
            })
        }catch(err) {
            res.send({
                status: "ERROR_UPLOAD_IMG",
                message: "上传图片失败"
            })
        }
    }

    async qiniu(req){
           let form = new formidable.IncomingForm();
           form.uploadDir = "./temp"
           form.parse(req, async (err, fields, files) => {
                let img_id = uuid.v4();
                console.log(files)
                let type = path.extname(files.file.name);
                let repath = "./temp/" + img_id + type;
                try {
                    let key = img_id + type;
                    // 上传的路径。
                    await fs.rename(files.file.path, repath);
                    const token = this.upToken("test", key);
                    const imgKey = this.uploadFile(token, key, repath);
                    // 删除图片。
                    fs.unlink(repath);
                    resolve(imgKey);
                }catch(err){
                    fs.unlink(files.file.path);
                    reject("保存失败")
                }
           })
    }
    // 上传策略函数。
    upToken(bucket, key){
        // bucket是上传的空间，key为上传到七牛云的文件名。
        let putPolicy = new qiniu.rs.PutPolicy(bucket + ":" +key);
        return putPolicy.token();
    }
    // 构建上传函数
    uploadFile(upToken, key, localFile){
        let extra = new qiniu.io.PutExtra();
        qiniu.io.putFile(upToken, key, localFile, extra, () => {
            if(!err){
                return ret.key;
            } else {
                console.log("err:", err);
                return err;
            }
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
