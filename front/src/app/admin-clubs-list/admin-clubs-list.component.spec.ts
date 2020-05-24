import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminClubsListComponent} from './admin-clubs-list.component';

describe('AdminClubsListComponent', () => {
  let component: AdminClubsListComponent;
  let fixture: ComponentFixture<AdminClubsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminClubsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClubsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
