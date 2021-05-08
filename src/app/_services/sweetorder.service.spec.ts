import { TestBed } from '@angular/core/testing';

import { SweetorderService } from './sweetorder.service';

describe('SweetorderService', () => {
  let service: SweetorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
