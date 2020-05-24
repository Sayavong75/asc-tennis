import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminCoachesListComponent} from './admin-coaches-list.component';

describe('AdminCoachesListComponent', () => {
  let component: AdminCoachesListComponent;
  let fixture: ComponentFixture<AdminCoachesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoachesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoachesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
