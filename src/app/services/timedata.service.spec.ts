import { TestBed } from '@angular/core/testing';

import { TimedataService } from './timedata.service';

describe('TimedataService', () => {
  let service: TimedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
