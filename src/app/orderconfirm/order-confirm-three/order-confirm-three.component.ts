import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { setInterval } from 'timers';

@Component({
  selector: 'app-order-confirm-three',
  templateUrl: './order-confirm-three.component.html',
  styleUrls: ['./order-confirm-three.component.css'],
  providers: [Location]
})
export class OrderConfirmThreeComponent implements OnInit, OnDestroy {
num: number = 5;
timer: any;
  constructor(private myLocation: Location, private myRouter: Router) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.num--;
      if (this.num == 0) {
        clearInterval(this.timer);
        this.timer = null;
        this.myRouter.navigateByUrl('/index');
      }
    }, 1000);
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      }
  }
  toIndex() {
    this.myRouter.navigateByUrl('/index');
  }
}
