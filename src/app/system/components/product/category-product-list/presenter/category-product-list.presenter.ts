import { Injectable } from '@angular/core';
import { CategoryProductModel } from '../../../../models/product/category-product.model';
import { CategoryProductService } from '../../../../service/product/category-product.service';
import { CategoryProductListView } from '../category-product-list.view';

@Injectable({
    providedIn: 'root'
})
export class CategoryProductListPresenter {
    view: CategoryProductListView;

    constructor(private categoryProductService: CategoryProductService) { }

    getCategorysProduct() {
        this.categoryProductService.listCategoriesProduct().subscribe((res: CategoryProductModel[]) => {
            this.view.loadData = true;
            this.view.categoriesItems = [];
            res.forEach((e) => {
                this.view.categoriesItems.push(e);
            });
            this.view.totalElements = this.view.categoriesItems.length;
            this.view.categoriesItemsPaginateLocal = this.view.categoriesItems;
        });
    }

    deleteCategoryProduct(id: any) {
        this.categoryProductService.deleteCategoryProduct(id).subscribe((res: any) => {
            this.view.showInfo('La categoría de producto fue eliminada');
            this.getCategorysProduct();
        });
    }

    filterByTermSearch(termFilter: string) {
        if (termFilter.length >= 1) {
            const CategorysItemsfilter = this.view.categoriesItemsPaginateLocal.filter(item =>
                item.name.toUpperCase().includes(termFilter.toUpperCase())
            );
            this.view.categoriesItems = CategorysItemsfilter;
            return;
        }
        this.getCategorysProduct();
    }
}
