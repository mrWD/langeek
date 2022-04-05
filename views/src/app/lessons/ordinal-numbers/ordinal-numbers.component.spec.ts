import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinalNumbersComponent } from './ordinal-numbers.component';

describe('OrdinalNumbersComponent', () => {
  let component: OrdinalNumbersComponent;
  let fixture: ComponentFixture<OrdinalNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinalNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinalNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
