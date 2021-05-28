import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalCompanyView } from './modal-company.view';
import { ModalCompanyPresenter } from './presenter/modal-company.presenter';

@Component({
  selector: 'app-modal-company-add',
  templateUrl: './modal-company-add.component.html',
  styleUrls: ['./modal-company-add.component.css'],
})
export class ModalCompanyAddComponent
  extends ModalCompanyView
  implements OnInit  {
  @Input() companySelect;
  @Output() closetModal = new EventEmitter<boolean>();

  companyForm = this.formBuilder.group({
    nameCompany: ['', [Validators.required, Validators.maxLength(150)]],
    identification: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(30)],
    ],
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modalCompanyPresenter: ModalCompanyPresenter,
    toastr: ToastrService
  ) {
    super(toastr);
    this.modalCompanyPresenter.view = this;
  }

  ngOnInit(): void { }

  open(content) {
    this.company = this.companySelect;
    this.companyForm.patchValue({
      nameCompany: this.company?.nameCompany,
      identification: this.company?.identification,
    });

    if (this.company == null) {
      this.company = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.saveCompany();
      }
    );
  }

  async saveCompany() {
    this.company.identification = this.companyForm.value.identification;
    this.company.nameCompany = this.companyForm.value.nameCompany;
    await this.modalCompanyPresenter.saveCompany(this.company);
    this.closetModal.emit(true);
  }

}
