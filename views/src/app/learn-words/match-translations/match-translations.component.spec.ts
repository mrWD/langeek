import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTranslationsComponent } from './match-translations.component';

describe('MatchTranslationsComponent', () => {
  let component: MatchTranslationsComponent;
  let fixture: ComponentFixture<MatchTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchTranslationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
