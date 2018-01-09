import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './../utility/service/myHttp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', '../../assets/css/animate.css', '../../assets/css/item_cat.css'],
  providers: [MyHttpService]
})
export class IndexComponent implements OnInit {
  // 图片之间轮播的间隔时间
  private NextPhotoInterval: number = 2000;
  // 是否要禁用循环播放
  private noLoopSlides: boolean = false;
  // Photos
  private slides: Array<any> = [];
  // 保存推荐商品的对象数组
  recommendedItems: Array<any> = [];
  // 保存二楼商品的对象数组
  newArrivalItems: Array<any> = [];
  // 保存三楼商品的对象数组
  topSaleItems: Array<any> = [];
  constructor(private myHttpService: MyHttpService) {
   }

  ngOnInit() {
    this.loadData();
    // this.slides.push(
    //   { image: 'assets/img/index/banner1.png', text: 'BMW 1' },
    //   { image: 'assets/img/index/banner2.png', text: 'BMW 2' },
    //   { image: 'assets/img/index/banner3.png', text: 'BMW 3' },
    //   { image: 'assets/img/index/banner4.png', text: 'BMW 4' }
    // );
  }
  loadData() {
    this.myHttpService.sendRequest('http://127.0.0.1/data/product/')
    .subscribe((data: any) => {
      console.log(data);
      if (data.carouselItems) {
        for (let i = 0; i < data.carouselItems.length; i++) {
          this.slides.push({
              image: 'assets/' + data.carouselItems[i].img
          });
        }
      }
      // 保存推荐商品的数据
      this.recommendedItems = data.recommendedItems;
      // if (data.newArrivalItems) {
      //   for (let i = 0; i < data.newArrivalItems.length; i++) {}
      // }
      // 保存2楼商品的数据
      this.newArrivalItems = data.newArrivalItems;
      // 保存3楼商品的数据
      this.topSaleItems = data.topSaleItems;
    });
  }
}
