import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLettersComponent } from './order-letters.component';

describe('OrderLettersComponent', () => {
  let component: OrderLettersComponent;
  let fixture: ComponentFixture<OrderLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
