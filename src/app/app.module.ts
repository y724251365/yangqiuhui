import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { NotfoundComponent } from './utility/notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { RegisterComponent } from './register/register.component';
import { UsercenterComponent } from './usercenter/usercenter.component';
import { LoginComponent } from './login/login.component';
import { Carousel } from './utility/carousel/carousel.component';
import { Slide } from './utility/carousel/slide.component';
import { OrderConfirmOneComponent } from './orderconfirm/order-confirm-one/order-confirm-one.component';
import { OrderConfirmTwoComponent } from './orderconfirm/order-confirm-two/order-confirm-two.component';
import { OrderConfirmThreeComponent } from './orderconfirm/order-confirm-three/order-confirm-three.component';
// import {MyHttpService} from './utility/service/myhttp.service';
const Routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orderConfirm', component: OrderconfirmComponent,
  children: [{path: '', component: OrderConfirmOneComponent},
             {path: 'one', component: OrderConfirmOneComponent},
             {path: 'two', component: OrderConfirmTwoComponent},
             {path: 'three', component: OrderConfirmThreeComponent}]},
  {path: 'userCenter', component: UsercenterComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail', component: DetailComponent},
  {path: '**', component: NotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    CartComponent,
    DetailComponent,
    IndexComponent,
    ListComponent,
    OrderconfirmComponent,
    RegisterComponent,
    UsercenterComponent,
    LoginComponent,
    Carousel,
    Slide,
    OrderConfirmOneComponent,
    OrderConfirmTwoComponent,
    OrderConfirmThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
