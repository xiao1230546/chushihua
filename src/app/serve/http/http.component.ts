import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Headers,Http} from "@angular/http";

declare  var $:any;

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export  const url = "http://192.168.0.201:9010/api";
export class HttpComponent implements OnInit {
  public  privateurl:string;
  public encodedToken:any;
  public token:any;
  constructor(
    private http:Http,

  ) { }
  getHS(){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    // application/json
    // application/x-www-form-urlencoded
    return header
  }
  ngOnInit() {
    this.token = $.cookie('token');
    this.encodedToken=encodeURIComponent("token="+ this.token);
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
    for(let key in parameter){
      Url =  Url+'&'+ key +'='+ parameter[key];
    }
    return this.http.get(Url)
      .toPromise()
      .then(res=>res.json())
      .catch(err=>console.log(err))
  }
}
