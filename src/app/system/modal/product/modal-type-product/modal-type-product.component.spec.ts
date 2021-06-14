import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeProductComponent } from './modal-type-product.component';

describe('ModalTypeProductComponent', () => {
  let component: ModalTypeProductComponent;
  let fixture: ComponentFixture<ModalTypeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTypeProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
