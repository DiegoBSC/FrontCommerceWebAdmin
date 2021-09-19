import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/home/models/user.model';
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
            this.view.productsItem = [];
            res.data[0].forEach((e) => {
                this.view.productsItem.push(e);
            });
            this.view.totalElements = res.totalElements;
        });
    }

    deleteCompany(id: any) {
        const companyDelete: CompanyModel = {};
        companyDelete.id = id;
        this.productService.deleteProduct(companyDelete).subscribe((res: any) => {
            this.view.showInfo('El producto fue eliminado');
            this.getProducts();
        });
    }


}
