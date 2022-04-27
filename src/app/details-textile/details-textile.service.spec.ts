import { TestBed } from '@angular/core/testing';

import { DetailsTextileService } from './details-textile.service';

describe('DetailsTextileService', () => {
  let service: DetailsTextileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsTextileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
