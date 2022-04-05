import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureTensAndQuestions } from './future-tens-and-questions.component';

describe('FutureTensAndQuestions', () => {
  let component: FutureTensAndQuestions;
  let fixture: ComponentFixture<FutureTensAndQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureTensAndQuestions ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureTensAndQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
