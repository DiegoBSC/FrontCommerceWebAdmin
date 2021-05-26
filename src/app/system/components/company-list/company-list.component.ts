import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyListPresenter } from './presenter/company-list.presenter';
import { CompanyListView } from './company-list.view';
import { ToastrService } from 'ngx-toastr';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { DATAFILTERINIT } from '../../shared/utils/utils-data';
import { CompanyModel } from '../../models/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent extends CompanyListView implements OnInit {
  @ViewChild('modalView') modalView;

  changeData = 0;

  constructor(private companyListPresenter: CompanyListPresenter, toastr: ToastrService) {
    super(toastr);
    companyListPresenter.view = this;
  }

  ngOnInit(): void {
    this.getDataTable();

  }

  modalResponse(value: boolean) {
    if (value) {
      this.ngOnInit();
      this.companySelect = null;
      return;
    }
    this.companySelect = null;
  }

  listCompanies(filter: DocumentFilterModel) {
    this.filter = filter;
    this.companyListPresenter.getCompanies();
    this.loadData = false;
  }

  changePage(value: any) {
    this.filter.page = value;
    this.companyListPresenter.getCompanies();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.companyListPresenter.getCompanies();
    this.loadData = false;
  }

  getDataTable() {
    this.listCompanies(DATAFILTERINIT);
  }

  deleteCompany(event) {
    console.log(event);
    this.companyListPresenter.deleteCompany(event);
  }

}
