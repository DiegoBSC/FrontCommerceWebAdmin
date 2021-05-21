import { Component, OnInit } from '@angular/core';
import { CompanyListPresenter } from './presenter/company-list.presenter';
import { CompanyListView } from './company-list.view';
import { ToastrService } from 'ngx-toastr';
import { DocumentFilterModel } from '../../models/document-filter.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent extends CompanyListView implements OnInit {

  constructor(private companyListPresenter: CompanyListPresenter, toastr: ToastrService) {
    super(toastr);
    companyListPresenter.view = this;
  }

  ngOnInit(): void {

    this.listCompanies({ initDate: '', endDate: '', page: 0, size: 5  , mainFilter: '', userId: '' });

  }

  listCompanies(filter: DocumentFilterModel) {
    this.filter = filter;
    this.companyListPresenter.getCompanies();
  }

  changePage(value: any){
    this.filter.page = value;
    this.companyListPresenter.getCompanies();
}

}
