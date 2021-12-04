import { TestBed } from '@angular/core/testing';

import { OrgdataService } from './orgdata.service';

describe('OrgdataService', () => {
  let service: OrgdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
