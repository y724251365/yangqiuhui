import { Component, OnInit, OnChanges } from '@angular/core';
import { MyHttpService } from '../utility/service/myHttp.service';
import {Router,Route,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[MyHttpService]
})
export class DetailComponent implements OnInit{
  list:any;
  lid:number;
  laptopList:Array<any>=[];
  constructor(private http: MyHttpService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      this.lid=data.id;
      console.log(this.lid);
      this.initData()
    });
  }

  initData(){
    this.http.sendRequest('http://127.0.0.1/data/product/details.php?lid='+this.lid)
    .subscribe((result:any)=>{
      this.list=result;
        this.laptopList=result.family.laptopList;
        console.log(result);
    });
  }
}
