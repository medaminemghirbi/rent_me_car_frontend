import { TestBed } from '@angular/core/testing';

import { AuthSystemService } from './auth-system.service';

describe('AuthSystemService', () => {
  let service: AuthSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
