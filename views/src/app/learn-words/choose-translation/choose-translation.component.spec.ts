import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTranslationComponent } from './choose-translation.component';

describe('ChooseTranslationComponent', () => {
  let component: ChooseTranslationComponent;
  let fixture: ComponentFixture<ChooseTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
