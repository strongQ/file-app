import { Component,OnInit  } from '@angular/core';
import { NavController,MenuController  } from 'ionic-angular';
import {  IonicPage } from 'ionic-angular';
import { AppService,AppGlobal} from './../../services/app.service';
import { postFileModel,pageDataModel,fileTypeEnum } from './../../models/file-data-model';
import { UploadService } from './../../services/upload.service';
import { ASTWithSource } from '@angular/compiler';
import { DomSanitizer } from "@angular/platform-browser";

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {

  type:any=1;
  homeword:string='图像';
  items:Array<any>;
  username:string='';
  constructor(private sanitizer: DomSanitizer,public uploadService:UploadService,private appService:AppService, public navCtrl: NavController,public menuCtrl: MenuController) {   
    
  }

  async ngOnInit() {
    const getDatas = await this.uploadService.GetFiles(5,1,fileTypeEnum.Picture);
    this.items=getDatas.items;
    for(let item of this.items){
      item.address=this.sanitizer.bypassSecurityTrustUrl(AppGlobal.httpDomain+`/${item.address}`);
    }
    this.username=AppGlobal.UserName;
  }
  async addFile(data:HTMLInputElement){

    let postData:postFileModel={userID:"11111",files:data.files,fileType:this.type};
    const result=await this.uploadService.uploads(postData);
    if(result.isError){
         this.appService.alert('上传保存失败!');
    }
    else {
      this.appService.alert('上传成功!');
     const getDatas=await this.uploadService.GetFiles(5,1,fileTypeEnum.Picture);
     this.items=getDatas.items;
     for(let item of this.items){
      item.address=this.sanitizer.bypassSecurityTrustUrl(AppGlobal.httpDomain+`/${item.address}`);
     }
  }

  }

  openMenu() {
    this.menuCtrl.open();
  }
}
