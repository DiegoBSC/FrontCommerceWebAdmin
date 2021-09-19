import { Component, OnInit } from '@angular/core';
import { ProductListPresenter } from './presenter/product-list.presenter';
import { ProductListView } from './product-list.view';
import { ToastrService } from 'ngx-toastr';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { DATAFILTERINIT } from '../../../shared/utils/utils-data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends ProductListView implements OnInit {

  constructor(private productListPresenter: ProductListPresenter, toastr: ToastrService) {
    super(toastr);
    productListPresenter.view = this;
  }

  ngOnInit(): void {
    this.getDataTable();
  }

  listProducts(filter: DocumentFilterModel) {
    this.filter = filter;
    this.productListPresenter.getProducts();
    this.loadData = false;
  }

  changePage(value: any) {
    this.filter.page = value;
    this.productListPresenter.getProducts();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.productListPresenter.getProducts();
    this.loadData = false;
  }

  getDataTable() {
    this.listProducts(DATAFILTERINIT);
  }

  deleteProduct(event) {
    this.productListPresenter.deleteProduct(event);
  }

}
