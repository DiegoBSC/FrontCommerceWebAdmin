import { Component, OnInit } from '@angular/core';
import { TaxProductListPresenter } from './presenter/tax-product-list.presenter';
import { TaxProductListView } from './tax-product-list.view';
import { ToastrService } from 'ngx-toastr';
import { DATAFILTERINIT } from '../../../shared/utils/utils-data';

@Component({
  selector: 'app-tax-product-list',
  templateUrl: './tax-product-list.component.html',
  styleUrls: ['./tax-product-list.component.css']
})
export class TaxProductListComponent extends TaxProductListView implements OnInit {

  constructor(private taxProductListPresenter: TaxProductListPresenter, toastr: ToastrService) {
    super(toastr);
    taxProductListPresenter.view = this;
  }

  ngOnInit(): void {
    this.taxProductListPresenter.view.filter = DATAFILTERINIT;
    this.getDataTable();
  }

  getDataTable() {
    this.getListTaxs();
  }

  getListTaxs() {
    this.taxProductListPresenter.getTaxsProduct();
    this.loadData = false;
  }

  changeFilter(value: any) {
    this.filter = value;
    this.taxProductListPresenter.filterByTermSearch(value.mainFilter);
  }

}
