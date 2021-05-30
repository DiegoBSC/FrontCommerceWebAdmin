import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCatalogAddComponent } from './modal-catalog-add.component';

describe('ModalCatalogAddComponent', () => {
  let component: ModalCatalogAddComponent;
  let fixture: ComponentFixture<ModalCatalogAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCatalogAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCatalogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
