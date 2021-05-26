import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompanyAddComponent } from './modal-company-add.component';

describe('ModalCompanyAddComponent', () => {
  let component: ModalCompanyAddComponent;
  let fixture: ComponentFixture<ModalCompanyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompanyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompanyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
