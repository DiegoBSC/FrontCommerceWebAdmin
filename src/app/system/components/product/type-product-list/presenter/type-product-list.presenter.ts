import { Injectable } from '@angular/core';
import { TaxProductService } from '../../../../service/product/tax-product.service';
import { TypeProductListView } from '../type-product-list.view';
import { TypeProductModel } from '../../../../models/product/type-product.model';
import { TypeProductService } from '../../../../service/product/type-product.service';

@Injectable({
    providedIn: 'root'
})
export class TypeProductListPresenter {
    view: TypeProductListView;

    constructor(private typeProductService: TypeProductService) { }

    getTypesProduct() {
        this.typeProductService.listTypesProduct().subscribe((res: TypeProductModel[]) => {
            this.view.loadData = true;
            this.view.typesItems = [];
            res.forEach((e) => {
                this.view.typesItems.push(e);
            });
            this.view.totalElements = this.view.typesItems.length;
            this.view.typesItemsPaginateLocal = this.view.typesItems;
        });
    }

    deleteTypeProduct(id: any) {
        this.typeProductService.deleteTypeProduct(id).subscribe((res: any) => {
            this.view.showInfo('El tipo de producto fue eliminado');
            this.getTypesProduct();
        });
    }

    filterByTermSearch(termFilter: string) {
        if (termFilter.length >= 1) {
            const typesItemsfilter = this.view.typesItemsPaginateLocal.filter(item =>
                item.name.toUpperCase().includes(termFilter.toUpperCase())
            );
            this.view.typesItems = typesItemsfilter;
            return;
        }
        this.getTypesProduct();
    }
}
