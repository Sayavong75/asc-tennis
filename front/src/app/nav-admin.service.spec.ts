import { TestBed } from '@angular/core/testing';

import { NavAdminService } from './nav-admin.service';

describe('NavAdminService', () => {
  let service: NavAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
