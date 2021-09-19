import { Injectable } from '@angular/core';
import { CompanyModel } from 'src/app/system/models/company.model';
import { ProductListView } from '../product-list.view';
import { DocumentFilterModel } from '../../../../models/document-filter.model';
import { ProductService } from '../../../../service/product/product.service';
import { PaginatorModel } from '../../../../models/paginator.model';
import { ProductModel } from 'src/app/system/models/product/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductListPresenter {
    view: ProductListView;

    constructor(private productService: ProductService) { }

    getProducts() {
        const filter: DocumentFilterModel = {
            endDate: null,
            initDate: null,
            page: this.view.filter.page,
            size: this.view.filter.size,
            mainFilter: this.view.filter.mainFilter,
            userId: null,
        };

        this.productService.listProducts(filter).subscribe((res: PaginatorModel<ProductModel[]>) => {
            this.view.loadData = true;
            this.view.productsItem = [];
            res.data[0].forEach((e) => {
                this.view.productsItem.push(e);
            });
            this.view.totalElements = res.totalElements;
        });
    }

    deleteProduct(id: any) {
        const productDelete: ProductModel = {};
        productDelete.id = id;
        this.productService.deleteProduct(productDelete).subscribe((res: any) => {
            this.view.showInfo('El producto fue eliminado');
            this.getProducts();
        });
    }


}
