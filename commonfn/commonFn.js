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
        let type = res.params.type;
        try {
            let img_path = await this.getPath(req);
            res.send({
                status: 1,
                img_path,
            })
        }catch(err) {
            res.send({
                status: 0,
                type: "ERROR_UPLOAD_IMG",
                message: "上传图片失败"
            })
        }
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
    async qiniu(){
        
    }

}
