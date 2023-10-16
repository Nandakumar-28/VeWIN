import { TestBed } from '@angular/core/testing';

import { AuthOptionsService } from './auth-options.service';

describe('AuthOptionsService', () => {
  let service: AuthOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
