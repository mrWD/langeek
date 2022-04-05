import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellAboutYourselfComponent } from './tell-about-yourself.component';

describe('TellAboutYourselfComponent', () => {
  let component: TellAboutYourselfComponent;
  let fixture: ComponentFixture<TellAboutYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellAboutYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellAboutYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
