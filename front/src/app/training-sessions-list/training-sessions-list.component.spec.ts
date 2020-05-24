import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TrainingSessionsListComponent} from './training-sessions-list.component';

describe('TrainingSessionsListComponent', () => {
  let component: TrainingSessionsListComponent;
  let fixture: ComponentFixture<TrainingSessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingSessionsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
