import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveVerbsPastTenseComponent } from './move-verbs-past-tense.component';

describe('MoveVerbsPastTenseComponent', () => {
  let component: MoveVerbsPastTenseComponent;
  let fixture: ComponentFixture<MoveVerbsPastTenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveVerbsPastTenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveVerbsPastTenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
