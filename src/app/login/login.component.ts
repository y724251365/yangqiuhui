import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpService } from './../utility/service/myHttp.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyHttpService]
})
export class LoginComponent implements OnInit {
  uName: string = '';
  uPwd: string = '';
  constructor(private myHttpService: MyHttpService, private myRouter: Router) { }

  ngOnInit() {
  }
  userLogin () {
    console.log(this.uName, this.uPwd);
    this.myHttpService.sendRequest('http://127.0.0.1/data/user/login.php?uname=' + this.uName + '&upwd=' + this.uPwd)
    .subscribe((data: any) => {
        console.log(data);
        if (data.code == 200) {
          this.myRouter.navigateByUrl('/index');
        }
    })
  }
}
