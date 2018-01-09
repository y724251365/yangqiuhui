import { FormsModule } from '@angular/forms';
import { MyHttpService } from './../utility/service/myHttp.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MyHttpService]
})
export class CartComponent implements OnInit {
  productList: Array<any> = [];
  shoppingBuy: number = 0;
  allMoney: number = 0;
  constructor(private myHttp: MyHttpService) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.myHttp.sendRequest('http://127.0.0.1/data/cart/list.php')
    .subscribe((result: any) => {
      console.log(result);
      this.productList = result.data;
      for ( var i = 0; i < this.productList.length; i++) {
      this.shoppingBuy = result.data[i].count;
      this.allMoney = result.data[i].price;
    }
      console.log(this.shoppingBuy);
    });
  }
}
