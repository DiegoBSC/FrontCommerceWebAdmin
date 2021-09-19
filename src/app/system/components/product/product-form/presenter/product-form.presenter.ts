import { Injectable } from '@angular/core';
import { ProductService } from '../../../../service/product/product.service';
import { ProductModel } from 'src/app/system/models/product/product.model';
import { ProductFormView } from '../product-form.view';

@Injectable({
    providedIn: 'root'
})
export class ProductFormPresenter {
    view: ProductFormView;

    constructor(private productService: ProductService) { }

    getProductById(productId: string) {
        this.productService.productById(productId).subscribe((res: ProductModel) => {
            this.view.loadData = true;
            this.view.product = res;
        });
    }


}
