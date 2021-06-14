import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ModalTaxProductView } from './modal-tax-product.view';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTaxProductPresenter } from './presenter/modal-tax-product.presenter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-tax-product',
  templateUrl: './modal-tax-product.component.html',
  styleUrls: ['./modal-tax-product.component.css']
})
export class ModalTaxProductComponent extends ModalTaxProductView implements OnInit {

  @Input() taxSelect;
  @Output() closetModal = new EventEmitter<boolean>();

  valueForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    value: ['', [Validators.required, Validators.maxLength(5)]],
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modaltaxProductPresenter: ModalTaxProductPresenter,
    toastr: ToastrService
  ) {
    super(toastr);
    this.modaltaxProductPresenter.view = this;
  }

  ngOnInit(): void { }

  open(content) {
    this.taxProduct = this.taxSelect;
    this.valueForm.patchValue({
      name: this.taxProduct?.name,
      value: this.taxProduct?.valueTax,
    });

    if (this.taxProduct == null) {
      this.taxProduct = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.save();
      }, (reason) => {
      });
  }

  async save() {
    this.taxProduct.name = this.valueForm.value.name;
    this.taxProduct.valueTax = this.valueForm.value.value;
    await this.modaltaxProductPresenter.save(this.taxProduct);
    this.closetModal.emit(true);
  }

}
