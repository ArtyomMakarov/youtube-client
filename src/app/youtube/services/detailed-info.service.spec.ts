import { TestBed } from '@angular/core/testing';

import { DetailedInfoService } from './detailed-info.service';

describe('DetailedInfoService', () => {
  let service: DetailedInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
