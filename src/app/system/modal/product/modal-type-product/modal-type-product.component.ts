import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalTypeProductView } from './modal-type-product.view';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTypeProductPresenter } from './presenter/modal-type-product.presenter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-type-product',
  templateUrl: './modal-type-product.component.html',
  styleUrls: ['./modal-type-product.component.css']
})
export class ModalTypeProductComponent extends ModalTypeProductView implements OnInit {

  @Input() typeSelect;
  @Output() closetModal = new EventEmitter<boolean>();

  valueForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modaltypeProductPresenter: ModalTypeProductPresenter,
    toastr: ToastrService) {
    super(toastr);
    this.modaltypeProductPresenter.view = this;
  }

  ngOnInit(): void {
  }

  open(content) {
    this.typeProduct = this.typeSelect;
    this.valueForm.patchValue({
      name: this.typeProduct?.name,
    });

    if (this.typeProduct == null) {
      this.typeProduct = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.save();
      }, (reason) => {
      });
  }

  async save() {
    this.typeProduct.name = this.valueForm.value.name;
    await this.modaltypeProductPresenter.save(this.typeProduct);
    this.closetModal.emit(true);
  }

}
