import { TestBed } from '@angular/core/testing';

import { BestperformerService } from './bestperformer.service';

describe('BestperformerService', () => {
  let service: BestperformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestperformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
