import fetch from "node-fetch";
import formidable from "formidable";
import path from "path";
import fs from "fs";
import gm from "gm";

export default class CommonFn {
    constructor() {
        this.uploadImg = this.uploadImg.bind(this)
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

}
