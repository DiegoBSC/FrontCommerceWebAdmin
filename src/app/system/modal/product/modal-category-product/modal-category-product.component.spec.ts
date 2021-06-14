import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCategoryProductComponent } from './modal-category-product.component';

describe('ModalCategoryProductComponent', () => {
  let component: ModalCategoryProductComponent;
  let fixture: ComponentFixture<ModalCategoryProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCategoryProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCategoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
