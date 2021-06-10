import { Injectable } from '@angular/core';
import { TaxProductListView } from '../tax-product-list.view';
import { TaxProductService } from '../../../../service/product/tax-product.service';
import { TaxProductModel } from '../../../../models/product/tax-product.model';

@Injectable({
    providedIn: 'root'
})
export class TaxProductListPresenter {
    view: TaxProductListView;

    constructor(private taxProductService: TaxProductService) { }

    getTaxsProduct() {
        this.taxProductService.listTaxsProduct().subscribe((res: TaxProductModel[]) => {
            this.view.loadData = true;
            this.view.taxsItems = [];
            res.forEach((e) => {
                this.view.taxsItems.push(e);
            });
            this.view.totalElements = this.view.taxsItems.length;
            this.view.taxsItemsPaginateLocal = this.view.taxsItems;
        });
    }

    deleteTaxProduct(id: any) {
        this.taxProductService.deleteTaxProduct(id).subscribe((res: any) => {
            this.view.showInfo('El impuesto fue eliminado');
            this.getTaxsProduct();
        });
    }

    filterByTermSearch(termFilter: string) {
        if (termFilter.length > 2) {
            const taxsItemsfilter = this.view.taxsItemsPaginateLocal.filter(item =>
                item.name.toUpperCase().includes(termFilter.toUpperCase())
            );
            this.view.taxsItems = taxsItemsfilter;
            return;
        }
        this.view.showWarning('Debe Ingresar mas de 2 caracteres');
        this.getTaxsProduct();
    }
}
