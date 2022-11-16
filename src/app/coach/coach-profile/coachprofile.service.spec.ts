import { TestBed } from '@angular/core/testing';

import { CoachprofileService } from './coachprofile.service';

describe('CoachprofileService', () => {
  let service: CoachprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
