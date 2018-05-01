import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppGlobal,AppService} from '../app/app.service';
import { PageDataModel,PostFileModel } from '../Models/DataModel'


@Injectable()
export class UploadService {
    constructor(private http: Http) { }
    //单个文件
    requestFile:string=AppGlobal.domain+AppGlobal.API.File;
    //文件集合
    requestFiles:string=AppGlobal.domain+AppGlobal.API.Files;

    // 上传单个文件
   async upload(fileToUpload: any): Promise<any> {
        const input = new FormData();
        input.append('file', fileToUpload);
        return await this.http
            .post(this.requestFile, input).toPromise();
    }

    // 上次多个文件
    async uploads(datas: any): Promise<any> {
        const input = new FormData();
        input.append('UserID', datas.UserID);
        for (let file of datas.Files){
            input.append('FileList', file);
        }
        input.append('FileType', datas.FileType);
        return await this.http
            .post(this.requestFiles, input).toPromise();
    }

    // 分页获取最新上传的文件
    async GetFiles(pageSize:number,pageIndex:number):Promise<PageDataModel<any>>{        
          const  data =await this.http.get(this.requestFiles+`/${pageIndex}/${pageSize}`).toPromise();
          return  data.json();
    }

}
