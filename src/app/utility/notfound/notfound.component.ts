import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private myLocation: Location) { }

  ngOnInit() {
  }
  // 定义一个返回上一页的方法
  backToPrev() {
    this.myLocation.back();
  }
}
