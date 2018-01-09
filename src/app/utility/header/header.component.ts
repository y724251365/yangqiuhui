import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './../service/myHttp.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MyHttpService]
})
export class HeaderComponent implements OnInit {
  isUserLogin: boolean= true;
  username: string= '';
  constructor(private myHttpService: MyHttpService) { }

  ngOnInit() {
    // 判断用户是否已经登录
    this.checkUserLogin();
  }
  // 定义一个点击退出的处理函数
  logout() {
    // 向服务器发请求，请求user/logout.php
    this.myHttpService.sendRequest('http://127.0.0.1/data/user/logout.php')
    .subscribe ((data: any) => {
      if (data.code == 200) {
        this.isUserLogin = false;
        this.username = '';
      }
    });
  }
checkUserLogin() {
  // 向服务器端发起请求，请求user/session_data.php,根据
  // 返回的uid是否是一个有效的值，来判断是否登录
  this.myHttpService.sendRequest('http://127.0.0.1/data/user/session_data.php')
  .subscribe((data: any) => {
    console.log(data);
    if (data.uid) {
      this.isUserLogin = true;
      this.username = data.uname;
    }else {
      this.isUserLogin = false;
      this.username = '';
    }
  });
}
}
