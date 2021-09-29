import { Injectable } from '@angular/core';
import { ProductService } from '../../../../service/product/product.service';
import { ProductModel } from 'src/app/system/models/product/product.model';
import { ProductFormView } from '../product-form.view';
import { TaxProductService } from '../../../../service/product/tax-product.service';
import { CategoryProductService } from '../../../../service/product/category-product.service';
import { TypeProductService } from '../../../../service/product/type-product.service';
import { CategoryProductModel } from '../../../../models/product/category-product.model';
import { TypeProductModel } from '../../../../models/product/type-product.model';
import { TaxProductModel } from '../../../../models/product/tax-product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductFormPresenter {
    view: ProductFormView;

    constructor(private productService: ProductService,
                private taxService: TaxProductService,
                private categoryService: CategoryProductService,
                private typeService: TypeProductService) { }

    async saveProduct(productSave: ProductModel) {
        this.view.product = productSave;

        this.view.submited = true;
        await this.productService.saveProduct(this.view.product, this.view.file).toPromise().then(
            (resp: any) => {
                this.view.showInfo('Producto guardado con éxito');
                this.view.submited = false;
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
                this.view.submited = false;
            }
        );

    }

    async getProductById(productId: string) {
        await this.productService.productById(productId).toPromise().then(
            (resp: any) => {
                this.view.product = resp;
                this.view.submited = true;
                debugger
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
                this.view.submited = false;
            }
        );
    }

    getCategoriesProduct() {
        this.categoryService.listCategoriesProduct().subscribe((res: CategoryProductModel[]) => {
            this.view.categories = res;
        });
    }

    getTypesProduct() {
        this.typeService.listTypesProduct().subscribe((res: TypeProductModel[]) => {
            this.view.types = res;
        });
    }

    getTaxesProduct() {
        this.taxService.listTaxsProduct().subscribe((res: TaxProductModel[]) => {
            this.view.taxes = res;
        });
    }


}
