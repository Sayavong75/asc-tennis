import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminTrainingSessionListComponent} from './admin-training-session-list.component';

describe('AdminTrainingSessionsListComponent', () => {
  let component: AdminTrainingSessionListComponent;
  let fixture: ComponentFixture<AdminTrainingSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTrainingSessionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrainingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
