import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProductListComponent } from './type-product-list.component';

describe('TypeProductListComponent', () => {
  let component: TypeProductListComponent;
  let fixture: ComponentFixture<TypeProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
