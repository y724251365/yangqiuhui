import { MyHttpService } from './../../utility/service/myHttp.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-confirm-one',
  templateUrl: './order-confirm-one.component.html',
  styleUrls: ['./order-confirm-one.component.css', '../../../assets/css/order_confirm.css'],
  providers: [MyHttpService]
})
export class OrderConfirmOneComponent implements OnInit {
  product: Array<any> = [];
  constructor(private http: MyHttpService) { }

  ngOnInit() {
    this.initData();
  }
  initData() {
    this.http.sendRequest('http://127.0.0.1/data/cart/list.php')
    .subscribe((result: any) => {
      // console.log(result);
      this.product = result.data;
      console.log(this.product);
    });
}
}