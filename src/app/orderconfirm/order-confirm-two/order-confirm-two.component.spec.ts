import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmTwoComponent } from './order-confirm-two.component';

describe('OrderConfirmTwoComponent', () => {
  let component: OrderConfirmTwoComponent;
  let fixture: ComponentFixture<OrderConfirmTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
