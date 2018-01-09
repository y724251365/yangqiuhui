import { MyHttpService } from './../utility/service/myHttp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrls: ['./orderconfirm.component.css'],
  providers: [MyHttpService]
})
export class OrderconfirmComponent implements OnInit {
  list: Array<any> = [];
  constructor(private http: MyHttpService) { }

  ngOnInit() {
    this.initData();
  }
initData() {
  this.http.sendRequest('http://127.0.0.1/data/cart/list.php')
  .subscribe((result: any) => {
    // console.log(result);
    this.list = result.data;
    console.log(this.list);
  });
}
}
