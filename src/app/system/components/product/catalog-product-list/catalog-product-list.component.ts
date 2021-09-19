import { Component, OnInit } from '@angular/core';
import { CatalogProductListView } from './catalog-product-list.view';
import { ToastrService } from 'ngx-toastr';
import { CatalogProductListPresenter } from './presenter/catalog-product-list.presenter';
import { DATAFILTERINIT } from '../../../shared/utils/utils-data';

@Component({
  selector: 'app-catalog-product-list',
  templateUrl: './catalog-product-list.component.html',
  styleUrls: ['./catalog-product-list.component.css']
})
export class CatalogProductListComponent extends CatalogProductListView implements OnInit {

  constructor(private catalogProductListPresenter: CatalogProductListPresenter, toastr: ToastrService) {
    super(toastr);
    catalogProductListPresenter.view = this;
  }


  ngOnInit(): void {
    this.catalogProductListPresenter.view.filter = DATAFILTERINIT;
    this.getDataTable();
  }

  getDataTable() {
    this.getListCatalogs();
  }

  getListCatalogs() {
    this.catalogProductListPresenter.getCatalogProduct();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.catalogProductListPresenter.filterByTermSearch(value.mainFilter);
  }

  deleteCatalog(idCatalog) {
    this.catalogProductListPresenter.deleteCatalogProduct(idCatalog);
  }

}
