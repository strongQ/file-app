import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppGlobal,AppService} from './app.service';
import { pageDataModel,postFileModel } from '../models/file-data-model'


@Injectable()
export class UploadService {
    constructor(private http: Http) { }
    //单个文件
    requestFileUrl:string=AppGlobal.domain+AppGlobal.API.File;
    //文件集合
    requestFilesUrl:string=AppGlobal.domain+AppGlobal.API.Files;

    // 上传单个文件
   async upload(fileToUpload: any): Promise<any> {
        const input = new FormData();
        input.append('file', fileToUpload);
        return await this.http
            .post(this.requestFileUrl, input).toPromise();
    }

    // 上次多个文件
    async uploads(datas: postFileModel): Promise<any> {
        const input = new FormData();
        input.append('UserID', datas.userID);
        for (let file of datas.files){
            input.append('FileList', file);
        }
        input.append('FileType', datas.fileType);
        return await this.http
            .post(this.requestFilesUrl, input).toPromise();
    }

    // 分页获取最新上传的文件
    async GetFiles(pageSize:number,pageIndex:number):Promise<pageDataModel<any>>{        
          const  data =await this.http.get(this.requestFilesUrl+`/${pageIndex}/${pageSize}`).toPromise();
          return  data.json();
    }

}
