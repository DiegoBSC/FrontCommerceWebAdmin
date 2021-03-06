import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalUserView } from './modal-user.view';
import { ModalUserPresenter } from './presenter/modal-user.presenter';
import { itemArrayByEnumString } from '../../shared/utils/funtions-utils';
import { RolEnum } from '../../models/rol.enum';

@Component({
  selector: 'app-modal-user-add',
  templateUrl: './modal-user-add.component.html',
  styleUrls: ['./modal-user-add.component.css']
})
export class ModalUserAddComponent extends ModalUserView implements OnInit {
  @Input() userModelSelect;
  @Output() closetModal = new EventEmitter<boolean>();

  companiesSelected = [];
  rolesSelected = [];

  userForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(150)]],
    nick: ['', [Validators.required, Validators.maxLength(150)]],
    email: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(60)]],
    password: ['', [Validators.required, Validators.maxLength(150)]]
  });

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private modalUserPresenter: ModalUserPresenter,
    toastr: ToastrService) {
    super(toastr);
    this.modalUserPresenter.view = this;

  }

  async ngOnInit() {
    this.rolesAll = itemArrayByEnumString(RolEnum);
    await this.modalUserPresenter.getCompaniesByUser();
  }

  getCompaniesSelected() {
    this.companiesSelected = [];
    this.userModelSelect.companies.forEach(idCompany => {
      let companyFind = null;

      companyFind = this.modalUserPresenter.view.companiesAdmin.find(e => e.id === idCompany);
      if (companyFind != null) {
        this.companiesSelected.push(companyFind);
      }
    });
  }

  getRolesSelectect() {
    this.userModelSelect.roles.forEach(rolUser => {
      let rolFind = null;

      rolFind = this.rolesAll.find(rol => rol.label === rolUser);

      if (rolFind != null) {
        this.rolesSelected.push(rolFind);
      }
    });
  }

  open(content) {
    if (this.userModelSelect != null && this.userModelSelect.companies != null && this.userModelSelect.companies.length > 0) {
      this.getCompaniesSelected();
      this.getRolesSelectect();
    }

    this.user = this.userModelSelect;
    this.userForm.patchValue({
      name: this.user?.name,
      nick: this.user?.nick,
      email: this.user?.email,
      password: this.user?.password,
    });

    if (this.user == null) {
      this.user = {};
    }
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.saveUser();
      }, (reason) => {
        this.companiesSelected = [];
        this.rolesSelected = [];
      });
  }

  async saveUser() {
    this.user.name = this.userForm.value.name;
    this.user.nick = this.userForm.value.nick;
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
    await this.modalUserPresenter.saveUser(this.user);
    this.closetModal.emit(true);
  }

  selectedCompanies(event: any) {
    this.user.companies = [];
    event.forEach(element => {
      this.user.companies.push(element.id);
    });
  }

  selectedRoles(event: any) {
    this.user.roles = [];
    event.forEach(element => {
      this.user.roles.push(element.label);
    });
  }


}
