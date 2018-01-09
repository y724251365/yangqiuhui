import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmThreeComponent } from './order-confirm-three.component';

describe('OrderConfirmThreeComponent', () => {
  let component: OrderConfirmThreeComponent;
  let fixture: ComponentFixture<OrderConfirmThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
