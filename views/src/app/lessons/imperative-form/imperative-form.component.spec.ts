import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativeFormComponent } from './imperative-form.component';

describe('ImperativeFormComponent', () => {
  let component: ImperativeFormComponent;
  let fixture: ComponentFixture<ImperativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImperativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
