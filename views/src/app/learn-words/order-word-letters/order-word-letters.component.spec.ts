import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWordLettersComponent } from './order-word-letters.component';

describe('OrderWordLettersComponent', () => {
  let component: OrderWordLettersComponent;
  let fixture: ComponentFixture<OrderWordLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderWordLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWordLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
