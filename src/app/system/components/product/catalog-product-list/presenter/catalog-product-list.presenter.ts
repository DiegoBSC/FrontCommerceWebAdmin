import { Injectable } from '@angular/core';
import { CatalogProductService } from '../../../../service/product/catalog-product.service';
import { CatalogProductListView } from '../catalog-product-list.view';
import { CatalogProductModel } from '../../../../models/product/catalog-product.model';
import { UserModel } from '../../../../../home/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class CatalogProductListPresenter {
    view: CatalogProductListView;

    constructor(private catalogProductService: CatalogProductService) { }

    getCatalogProduct() {
        const user: UserModel = JSON.parse(localStorage.getItem('user'));
        this.catalogProductService.listCatalogProduct(user.companies).subscribe((res: CatalogProductModel[]) => {
            this.view.loadData = true;
            this.view.catalogsItems = [];
            res.forEach((e) => {
                this.view.catalogsItems.push(e);
            });
            this.view.totalElements = this.view.catalogsItems.length;
            this.view.catalogItemsPaginateLocal = this.view.catalogsItems;
        });
    }

    deleteCatalogProduct(id: any) {
        this.catalogProductService.deleteCatalogProduct(id).subscribe((res: any) => {
            this.view.showInfo('El Catálogo fue eliminado');
            this.getCatalogProduct();
        });
    }

    filterByTermSearch(termFilter: string) {
        if (termFilter.length >= 1) {
            const CategorysItemsfilter = this.view.catalogItemsPaginateLocal.filter(item =>
                item.name.toUpperCase().includes(termFilter.toUpperCase())
            );
            this.view.catalogsItems = CategorysItemsfilter;
            return;
        }
        this.getCatalogProduct();
    }
}
