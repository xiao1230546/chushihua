import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { HttpComponent } from './serve/http/http.component';
import { VerifyComponent } from './serve/verify/verify.component';
import { ToastComponent } from './serve/layer/toast/toast.component';
import { LoadingComponent } from './serve/layer/loading/loading.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { MembersHomeComponent } from './personalcenter/members-home/members-home.component';
import { PhonebindingComponent } from './personalcenter/phonebinding/phonebinding.component';


@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
    IntroduceComponent,
    MembersHomeComponent,
    LoadingComponent,
    ToastComponent,
    PhonebindingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    HttpComponent,
    LoadingComponent,
    ToastComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


