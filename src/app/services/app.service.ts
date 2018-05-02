import {LoadingController,AlertController,ToastController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



@Injectable()
export class AppGlobal{
    //缓存key的配置
    static cache:any={
        slides:"_dress_slides",
        categories:"_dress_categories",
        products:"_dress_products"
    }

    //接口基地址
    static domain="http://localhost:58275";
    static httpDomain="http://localhost:8080";
    //用户名
    static UserName='';

    //接口地址
    static API:any={
        User:'/api/User',
        File:'/Upload/file',
        Files:'/api/files',
        getCategories:'/api/ionic3/getCategories',
        getProducts:'/api/ionic3/getProducts',
        getDetails:'/api/ionic3/details'
    };
}
  @Injectable()
    export class AppService{
        constructor(public http:Http,public httpNew:Http,public loadingCtrl:LoadingController,
            private alertCtrl:AlertController,private toastCtrl:ToastController){}

            //对参数进行编码
            endcode(params){
                var str='';
                if(params){
                    for(var key in params){
                        if(params.hasOwnProperty(key)){
                            var value=params[key];
                            str+=encodeURIComponent(key)+ '=' +encodeURIComponent(value)+ '&';
                        }
                    }
                    str='?'+str.substring(0,str.length-1);
                }
                return  str;
            }

          
           
           


         
            alert(message,callback?){
                if(callback){
                    let alert=this.alertCtrl.create({
                        title: '提示',
                        message:message,
                        buttons:[{
                            text:"确定",
                            handler:data=>{
                                callback();
                            }
                        }]
                    });
                    alert.present();
                }
                else{
                    let alert=this.alertCtrl.create({
                        title:'提示',
                        message:message,
                        buttons:["确定"]
                  
                    });
                    alert.present();
                }
            }

            toast(message,callback?){
                let toast=this.toastCtrl.create({
                    message:message,
                    duration:2000,
                    dismissOnPageChange:true,
                });
                toast.present();
                if(callback){
                    callback();
                }
            }

            setItem(key:string,obj:any){
                try{
                    var json=JSON.stringify(obj);
                    window.localStorage[key]=json;
                }
                catch(e){
                    console.error("window.localStorage error:"+e);
                }
            }

            getItem(key:string,callback){
                try{
                    var json=window.localStorage[key];
                    var obj=JSON.parse(json);
                    callback(obj);
                }
                catch(e){
                    console.error("window.localStorage error:"+e);
                }
            }
        
        
    }
