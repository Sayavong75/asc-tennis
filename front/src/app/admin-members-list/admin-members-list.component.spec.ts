import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMembersListComponent } from './admin-members-list.component';
import { MatTableModule } from '@angular/material/table';

describe('AdminMembersListComponent', () => {
  let component: AdminMembersListComponent;
  let fixture: ComponentFixture<AdminMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMembersListComponent ],
      imports: [ MatTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
