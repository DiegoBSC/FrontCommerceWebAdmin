import { TestBed } from '@angular/core/testing';

import { TaxProductService } from './tax-product.service';

describe('TaxProductService', () => {
  let service: TaxProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
