import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { DATAFILTERINIT } from '../../shared/utils/utils-data';
import { CatalogsView } from './catalogs.view';
import { CatalogsPresenter } from './presenter/catalogs.presenter';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent  extends CatalogsView implements OnInit {

  constructor(private catalogPresenter: CatalogsPresenter, toastr: ToastrService) {
    super(toastr);
    catalogPresenter.view = this;
  }

  ngOnInit(): void {
    this.getDataTable();

  }

  listCompanies(filter: DocumentFilterModel) {
    this.filter = filter;
    this.catalogPresenter.getCatalogs();
    this.loadData = false;
  }

  changePage(value: any) {
    this.filter.page = value;
    this.catalogPresenter.getCatalogs();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.catalogPresenter.getCatalogs();
    this.loadData = false;
  }

  getDataTable() {
    this.listCompanies(DATAFILTERINIT);
  }

  deleteCompany(event) {
    this.catalogPresenter.deleteCatalog(event);
  }

}
