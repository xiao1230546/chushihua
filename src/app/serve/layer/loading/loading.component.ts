import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-spin-tip',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public loadingoff:boolean;
  constructor() {
  }
  ngOnInit() {
    this.loadingoff =false;
  }

}
