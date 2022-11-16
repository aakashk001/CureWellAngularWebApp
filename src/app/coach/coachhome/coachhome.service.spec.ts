import { TestBed } from '@angular/core/testing';

import { CoachhomeService } from './coachhome.service';

describe('CoachhomeService', () => {
  let service: CoachhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
