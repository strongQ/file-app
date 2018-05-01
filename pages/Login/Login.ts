import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from './../../Services/user.service';
import { AppGlobal,AppService } from './../../app/app.service';
import { TabsPage } from  '../tabs/tabs';
import {  IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'Login.html'
  })
  export class LoginPage{
      username:string='';
      password:string='';
      constructor(public navCtrl:NavController,
    private userService:UserService,private appService:AppService){

    }

   async loginUser(){
       // if(/^[a-zA-Z0-9]+$/.test(this.username) ){
    
          //all cool
         const data=await this.userService.GetUserByName(this.username,this.password);
         if(data.userName==null){

          this.appService.alert('不存在该用户!');
         }
         else
          {
            AppGlobal.UserName=this.username;
            this.navCtrl.push(TabsPage,{
              username:this.username
            });
          }
          
        
          
        
       
         
      }
    }

  