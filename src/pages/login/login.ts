import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage } from 'ionic-angular';
import { UserService } from './../../services/user.service';
import { AppGlobal,AppService } from './../../services/app.service';




@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'Login.html'
  })
  export class LoginPage{
      username:string='';
      password:string='';
     
      public backgroundImage = 'assets/imgs/background/background-5.jpg';
      constructor(public navCtrl:NavController,
    private userService:UserService,private appService:AppService,
    public loadingCtrl: LoadingController
  ){
        

    }

   async loginUser(){
       
    const loading = this.loadingCtrl.create({
      duration: 500
    });
    loading.present();
         const data=await this.userService.GetUserByName(this.username,this.password);
         if(data.userName==null){

          this.appService.alert('不存在该用户!');
         }
         else
          {
            AppGlobal.UserName=this.username;
            this.navCtrl.push('TabsPage',{
              username:this.username
            });
          }
          
        
          
        
       
         
      }
    }

  