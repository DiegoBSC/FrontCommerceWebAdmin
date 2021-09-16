import { Component, OnInit } from '@angular/core';
import { TypeProductListView } from './type-product-list.view';
import { TypeProductListPresenter } from './presenter/type-product-list.presenter';
import { ToastrService } from 'ngx-toastr';
import { DATAFILTERINIT } from '../../../shared/utils/utils-data';

@Component({
  selector: 'app-type-product-list',
  templateUrl: './type-product-list.component.html',
  styleUrls: ['./type-product-list.component.css']
})
export class TypeProductListComponent extends TypeProductListView implements OnInit {

  constructor(private typeProductListPresenter: TypeProductListPresenter, toastr: ToastrService) {
    super(toastr);
    typeProductListPresenter.view = this;
  }

  ngOnInit(): void {
    this.typeProductListPresenter.view.filter = DATAFILTERINIT;
    this.getDataTable();
  }

  getDataTable() {
    this.getListTypes();
  }

  getListTypes() {
    this.typeProductListPresenter.getTypesProduct();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.typeProductListPresenter.filterByTermSearch(value.mainFilter);
  }

  deleteType(idType) {
    this.typeProductListPresenter.deleteTypeProduct(idType);
  }


}
