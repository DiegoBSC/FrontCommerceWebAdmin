import { Component, OnInit } from '@angular/core';
import { CategoryProductListView } from './category-product-list.view';
import { CategoryProductListPresenter } from './presenter/category-product-list.presenter';
import { ToastrService } from 'ngx-toastr';
import { DATAFILTERINIT } from '../../../shared/utils/utils-data';

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.css']
})
export class CategoryProductListComponent extends CategoryProductListView implements OnInit {

  constructor(private categoryProductListPresenter: CategoryProductListPresenter, toastr: ToastrService) {
    super(toastr);
    categoryProductListPresenter.view = this;
  }

  ngOnInit(): void {
    this.categoryProductListPresenter.view.filter = DATAFILTERINIT;
    this.getDataTable();
  }

  getDataTable() {
    this.getListCategories();
  }

  getListCategories() {
    this.categoryProductListPresenter.getCategorysProduct();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.categoryProductListPresenter.filterByTermSearch(value.mainFilter);
  }

  deleteCategory(idCategory) {
    this.categoryProductListPresenter.deleteCategoryProduct(idCategory);
  }

}
