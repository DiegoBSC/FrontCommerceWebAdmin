import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectFieldComponent } from './multiselect-field.component';

describe('MultiselectFieldComponent', () => {
  let component: MultiselectFieldComponent;
  let fixture: ComponentFixture<MultiselectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
