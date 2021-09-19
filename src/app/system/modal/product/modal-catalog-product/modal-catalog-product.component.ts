import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ModalCatalogProductView } from './modal-catalog-product.view';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCatalogProductPresenter } from './presenter/modal-catalog-product.presenter';
import { UserModel } from '../../../../home/models/user.model';
import { CompanyModel } from '../../../models/company.model';

@Component({
  selector: 'app-modal-catalog-product',
  templateUrl: './modal-catalog-product.component.html',
  styleUrls: ['./modal-catalog-product.component.css']
})
export class ModalCatalogProductComponent extends ModalCatalogProductView implements OnInit {

  @Input() catalogSelect;
  @Output() closetModal = new EventEmitter<boolean>();

  companiesSelected: CompanyModel[] = [];

  valueForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modalCatalogProductPresenter: ModalCatalogProductPresenter,
    toastr: ToastrService) {
    super(toastr);
    modalCatalogProductPresenter.view = this;
  }

  async ngOnInit() {
    const user: UserModel = JSON.parse(localStorage.getItem('user'));
    const rolesUser = user.roles.filter(e => e === 'ROLE_ADMIN');
    if (rolesUser.length > 0) {
      await this.modalCatalogProductPresenter.getCompaniesByUserAdmin();
    } else {
      await this.modalCatalogProductPresenter.getCompaniesByUser();
    }
  }

  open(content) {
    this.catalogProduct = this.catalogSelect;
    this.valueForm.patchValue({
      name: this.catalogProduct?.name,
    });

    if (this.catalogProduct == null) {
      this.catalogProduct = {};
    }
    const companyFind = this.modalCatalogProductPresenter.view.companiesAdmin.find(
      e => e.id === this.catalogProduct.companyId);
    if (companyFind != null) {
      this.companiesSelected.push(companyFind);
    }

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.save();
      }, (reason) => {
        this.companiesSelected = [];
      });
  }

  async save() {
    this.catalogProduct.name = this.valueForm.value.name;
    this.catalogProduct.companyId = this.companiesSelected[0].id;
    await this.modalCatalogProductPresenter.save(this.catalogProduct);
    this.companiesSelected = [];
    this.closetModal.emit(true);
  }

  getCompaniesSelected() {
    this.companiesSelected = [];
    this.companiesSelected.forEach(idCompany => {
      let companyFind = null;

      companyFind = this.modalCatalogProductPresenter.view.companiesAdmin.find(e => e.id === idCompany);
      if (companyFind != null) {
        this.companiesSelected.push(companyFind);
      }
    });
  }

  selectedCompanies(event: any) {
    this.companiesSelected = [];
    event.forEach(element => {
      this.companiesSelected.push(element);
    });
  }


}
