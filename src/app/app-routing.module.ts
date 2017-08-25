import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroduceComponent} from "./introduce/introduce.component";
import {MembersHomeComponent} from "./personalcenter/members-home/members-home.component";
import {PhonebindingComponent} from "./personalcenter/phonebinding/phonebinding.component";

const routes: Routes = [

  {path:'introduce',component:IntroduceComponent},  //公司简介
  {path:'membershome',component:MembersHomeComponent},  //会员中心
  {path:'phonebinding',component:PhonebindingComponent},  //会员中心

];

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
