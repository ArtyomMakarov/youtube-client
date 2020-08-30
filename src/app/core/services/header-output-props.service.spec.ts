import { TestBed } from '@angular/core/testing';

import { HeaderOutputPropsService } from './header-output-props.service';

describe('HeaderOutputPropsService', () => {
  let service: HeaderOutputPropsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderOutputPropsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
