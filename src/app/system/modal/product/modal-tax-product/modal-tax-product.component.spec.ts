import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTaxProductComponent } from './modal-tax-product.component';

describe('ModalTaxProductComponent', () => {
  let component: ModalTaxProductComponent;
  let fixture: ComponentFixture<ModalTaxProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTaxProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTaxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
