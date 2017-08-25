import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Headers,Http} from "@angular/http";
import {ActivatedRoute,} from "@angular/router";
import "rxjs/Rx";
import 'rxjs/add/operator/toPromise';
//declare  var $:any;
export  const url = "http://192.168.0.201:9010/api";
@Injectable()
export class HttpComponent implements OnInit {
  public  privateurl:string;

  public tokens:any = this.routInfo.snapshot.queryParams['token'];
  public encodedToken:any=encodeURIComponent("token="+ this.tokens);
  constructor(
    public http:Http,
    public routInfo:ActivatedRoute

  ) { }
  getHS(){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    // application/json
    // application/x-www-form-urlencoded
    return header
  }
  ngOnInit() {
  }

  Mypost(parameter:any):Promise<any>{

    let Url = `${url}${this.privateurl}?__h=${this.encodedToken}`;
    let headers:Headers = this.getHS();
    return this.http.post(Url,parameter,{headers:headers})
      .toPromise()
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }
  Myget(parameter:any):Promise<any>{
    let Url = `${url}${this.privateurl}?__h=${this.encodedToken}`;
    if(parameter){
      for(let key in parameter){
        Url =  Url+'&'+ key +'='+ parameter[key];
      }
    }else {
       Url = `${url}${this.privateurl}?__h=${this.encodedToken}`;
    }
    return this.http.get(Url)
      .toPromise()
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }
}
