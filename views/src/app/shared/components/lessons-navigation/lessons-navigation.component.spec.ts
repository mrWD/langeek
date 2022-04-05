import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsNavigationComponent } from './lessons-navigation.component';

describe('LessonsNavigationComponent', () => {
  let component: LessonsNavigationComponent;
  let fixture: ComponentFixture<LessonsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
