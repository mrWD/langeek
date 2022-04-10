import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplayComponent } from './autoplay.component';

describe('AutoplayComponent', () => {
  let component: AutoplayComponent;
  let fixture: ComponentFixture<AutoplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
