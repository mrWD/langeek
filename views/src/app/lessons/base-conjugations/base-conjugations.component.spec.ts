import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConjugationsComponent } from './base-conjugations.component';

describe('BaseConjugationsComponent', () => {
  let component: BaseConjugationsComponent;
  let fixture: ComponentFixture<BaseConjugationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseConjugationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConjugationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
