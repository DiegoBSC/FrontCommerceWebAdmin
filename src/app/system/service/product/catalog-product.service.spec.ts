import { TestBed } from '@angular/core/testing';

import { CatalogProductService } from './catalog-product.service';

describe('CatalogProductService', () => {
  let service: CatalogProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
