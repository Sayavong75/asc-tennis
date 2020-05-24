import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminSessionsViewListComponent} from './admin-sessions-view-list.component';

describe('AdminSessionsViewListComponent', () => {
  let component: AdminSessionsViewListComponent;
  let fixture: ComponentFixture<AdminSessionsViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSessionsViewListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSessionsViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
