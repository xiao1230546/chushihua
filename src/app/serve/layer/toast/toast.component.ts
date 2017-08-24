import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})

export class ToastComponent implements OnInit {

  constructor(private _message: NzMessageService) {
  }
  ngOnInit() {
  }
  createMessage = (type, text) => {
    this._message.create(type, `${text}`);
  };
  //createMessage('info/失败 success/成功 ','提示信息');
}
