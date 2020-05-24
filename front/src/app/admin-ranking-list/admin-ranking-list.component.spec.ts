import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminRankingListComponent} from './admin-ranking-list.component';

describe('AdminRankingListComponent', () => {
  let component: AdminRankingListComponent;
  let fixture: ComponentFixture<AdminRankingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRankingListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRankingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
