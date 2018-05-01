import {Injectable} from '@angular/core';
import {Component} from '@angular/core';
import { AppGlobal,AppService} from '../app/app.service'
import { Http } from '@angular/http';


 @Injectable()
 export class UserService{
    constructor(public http:Http
      ){}

    // 根据用户名和密码获取用户
     requestUrl:string =AppGlobal.domain+AppGlobal.API.User;
      async GetUserByName(name:string,password:string):Promise<any>{
           
         const  data=await this.http.get(this.requestUrl+`/${name}/${password}`).toPromise();
           return data.json();
           
      }
 }