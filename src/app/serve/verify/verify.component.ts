import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  public off:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  Djs(obj) {  //短信发送
    $(obj).attr("disabled", "disabled");
    let num = 60;
    let cont = setInterval(function () {
      num--;
      $(obj).val(num + '秒后重发');
      if (num == 0) {
        $(obj).val('重新获取');
        clearInterval(cont);
        $(obj).removeAttr("disabled");
      }
    }, 1000)
  }

  checkPhone(obj){
    let phone = $(obj).val();
    if(!(/^1[34578]\d{9}$/.test(phone))){
      // util.showToast("手机号码有误，请重填");
      this.off =false;
      return false;
    }else {
      this.off =true;
    }
  }
}
