import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainingSessionsListComponent } from './admin-training-sessions-list.component';

describe('AdminTrainingSessionsListComponent', () => {
  let component: AdminTrainingSessionsListComponent;
  let fixture: ComponentFixture<AdminTrainingSessionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrainingSessionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrainingSessionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
