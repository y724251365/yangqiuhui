import { MyHttpService } from './../utility/service/myHttp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [MyHttpService]
})
export class ListComponent implements OnInit {
  pageCount: number = 0;
  list: Array<any> = [];
  nowPage: number = 1;
  listPages: Array<any> = [];
  sum: number = 0.00;
  constructor(private myHttp: MyHttpService) { }

  ngOnInit() {
    this.initData();
  }
  // 初始化数据
  initData() {
    this.myHttp.sendRequest('http://127.0.0.1/data/product/list.php?pno=' + this.nowPage)
    .subscribe((result: any) => {
        // result：pageCount和data
        // 列表一共有几页
        // 当前页面一共有多少个数据
        this.pageCount = result.pageCount;
        this.list = result.data;
        console.log(result);
        for ( var i = 0; i < this.pageCount; i++) {
            this.listPages.push(i);
        }
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].count = 0;
          // console.log(this.list);
        }
    });
  }
  // 上一页或者是下一页
  changePage(isNext: boolean) {
      let page = this.nowPage;
      if (isNext) {
        page++;
        if (page > this.pageCount) {
          return;
        }
      } else {
        page--;
        if (page == 0) {
          return;
        }
      }
      this.loadPage(page);
  }
  // 发请求进行分页
  loadPage(pno: number) {
    this.nowPage = pno;
    this.myHttp.sendRequest('http://127.0.0.1/data/product/list.php?pno=' + pno)
    .subscribe((result: any) => {
        this.list = result.data;
    });
  }
  minusProduct(i: number) {
    if (this.list[i].count <= 0) {
      return;
    }
    this.list[i].count--;
    if (this.sum - this.list[i].price <= 0) {
          this.sum = 0;
    }else {
    this.sum = this.sum - this.list[i].price;
  }
  }
  plusProduct(i: number) {
    this.list[i].count++;
    this.sum = this.list[i].price * this.list[i].count;
  }
  addShopping(i: number) {
    console.log(this.list);
    this.myHttp.sendRequest('http://127.0.0.1/data/cart/add.php?lid=' + this.list[i].lid + '&buyCount=' + this.list[i].count)
    .subscribe((result: any) => {
        console.log(result);
    });
  }
}
