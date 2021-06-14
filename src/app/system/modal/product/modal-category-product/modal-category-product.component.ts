import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalCategoryProductView } from './modal-category-product.view';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCategoryProductPresenter } from './presenter/modal-category-product.presenter';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-category-product',
  templateUrl: './modal-category-product.component.html',
  styleUrls: ['./modal-category-product.component.css']
})
export class ModalCategoryProductComponent extends ModalCategoryProductView implements OnInit {

  @Input() categorySelect;
  @Output() closetModal = new EventEmitter<boolean>();

  valueForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modalCategoryProductPresenter: ModalCategoryProductPresenter,
    toastr: ToastrService
  ) {
    super(toastr);
    this.modalCategoryProductPresenter.view = this;
  }

  ngOnInit(): void { }

  open(content) {
    this.categoryProduct = this.categorySelect;
    this.valueForm.patchValue({
      name: this.categoryProduct?.name,
    });

    if (this.categoryProduct == null) {
      this.categoryProduct = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.save();
      }, (reason) => {
      });
  }

  async save() {
    this.categoryProduct.name = this.valueForm.value.name;
    await this.modalCategoryProductPresenter.save(this.categoryProduct);
    this.closetModal.emit(true);
  }

}
