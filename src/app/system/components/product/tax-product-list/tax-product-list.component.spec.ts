import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxProductListComponent } from './tax-product-list.component';

describe('TaxProductListComponent', () => {
  let component: TaxProductListComponent;
  let fixture: ComponentFixture<TaxProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
