import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventsAndAdjectivesComponent } from './past-events-and-adjectives.component';

describe('PastEventsAndAdjectivesComponent', () => {
  let component: PastEventsAndAdjectivesComponent;
  let fixture: ComponentFixture<PastEventsAndAdjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEventsAndAdjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventsAndAdjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
