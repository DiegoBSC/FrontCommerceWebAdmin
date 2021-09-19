import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCatalogProductComponent } from './modal-catalog-product.component';

describe('ModalCatalogProductComponent', () => {
  let component: ModalCatalogProductComponent;
  let fixture: ComponentFixture<ModalCatalogProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCatalogProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCatalogProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
