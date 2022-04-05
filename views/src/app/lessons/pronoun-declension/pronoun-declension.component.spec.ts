import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounDeclensionComponent } from './pronoun-declension.component';

describe('PronounDeclensionComponent', () => {
  let component: PronounDeclensionComponent;
  let fixture: ComponentFixture<PronounDeclensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounDeclensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounDeclensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
