import { Component,OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  IonicPage } from 'ionic-angular';
import { AppService,AppGlobal} from './../../app/app.service';
import { PostFileModel,PageDataModel } from './../../Models/DataModel';
import { UploadService } from './../../Services/upload.service';
import { ASTWithSource } from '@angular/compiler';
import { DomSanitizer } from "@angular/platform-browser";

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {

  
  items:Array<any>;
  username:string='';
  constructor(private sanitizer: DomSanitizer,public uploadService:UploadService,private appService:AppService, public navCtrl: NavController) {   
    
  }

  async ngOnInit() {
    const getDatas = await this.uploadService.GetFiles(5,1);
    this.items=getDatas.items;
    for(let item of this.items){
      item.address=this.sanitizer.bypassSecurityTrustUrl(AppGlobal.httpDomain+`/${item.address}`);
    }
    this.username=AppGlobal.UserName;
  }
  async addFile(data:HTMLInputElement){

    let postData:PostFileModel={UserID:"11111",Files:data.files,FileType:1};
    const result=await this.uploadService.uploads(postData);
    if(result.isError){
         this.appService.alert('上传保存失败!');
    }
    else {
      this.appService.alert('上传成功!');
     const getDatas=await this.uploadService.GetFiles(5,1);
     this.items=getDatas.items;
     for(let item of this.items){
      item.address=this.sanitizer.bypassSecurityTrustUrl(AppGlobal.httpDomain+`/${item.address}`);
     }
  }


  }

 
                                                                               
}
