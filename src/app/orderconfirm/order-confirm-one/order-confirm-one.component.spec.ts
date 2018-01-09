import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmOneComponent } from './order-confirm-one.component';

describe('OrderConfirmOneComponent', () => {
  let component: OrderConfirmOneComponent;
  let fixture: ComponentFixture<OrderConfirmOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
