import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ModalCatalogView } from './modal-catalog.view';
import { ModalCatalogPresenter } from './presenter/modal-catalog.presenter';

@Component({
  selector: 'app-modal-catalog-add',
  templateUrl: './modal-catalog-add.component.html',
  styleUrls: ['./modal-catalog-add.component.css']
})
export class ModalCatalogAddComponent extends ModalCatalogView implements OnInit {

  @Input() catalogSelect;
  @Output() closetModal = new EventEmitter<boolean>();

  catalogForm = this.formBuilder.group({
    idCompany: ['', [Validators.required]],
    name: ['', [Validators.required]]
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modalCatalogPresenter: ModalCatalogPresenter,
    toastr: ToastrService
  ) {
    super(toastr);
    this.modalCatalogPresenter.view = this;
  }

  ngOnInit(): void {
  }

  open(content) {
    this.catalog = this.catalogSelect;
    this.catalogForm.patchValue({
      nameCompany: this.catalog?.idCompany,
      identification: this.catalog?.name,
    });

    if (this.catalog == null) {
      this.catalog = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.saveCatalog();
      }
    );
  }

  async saveCatalog() {
    this.catalog.idCompany = this.catalogForm.value.idCompany;
    this.catalog.name = this.catalogForm.value.name;
    await this.modalCatalogPresenter.saveCatalog(this.catalog);
    this.closetModal.emit(true);
  }

}