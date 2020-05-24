import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminWeeklyGroupListComponent} from './admin-weekly-group-list.component';

describe('AdminWeeklyGroupListComponent', () => {
  let component: AdminWeeklyGroupListComponent;
  let fixture: ComponentFixture<AdminWeeklyGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWeeklyGroupListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWeeklyGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
