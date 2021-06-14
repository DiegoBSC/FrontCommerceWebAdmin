import { Injectable, Pipe } from '@angular/core';
import { CategoryProductService } from '../../../../service/product/category-product.service';
import { ModalCategoryProductView } from '../modal-category-product.view';
import { CategoryProductModel } from '../../../../models/product/category-product.model';

@Injectable(
    { providedIn: 'root' }
)
export class ModalCategoryProductPresenter {

    constructor(private categoryProductService: CategoryProductService) { }
    view: ModalCategoryProductView;

    async save(categoryProduct: CategoryProductModel) {
        this.view.categoryProduct = categoryProduct;

        await this.categoryProductService.createCategoryProduct(this.view.categoryProduct).toPromise().then(
            (resp: any) => {
                this.view.showInfo('Registro guardado con éxito');
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
            }
        );

    }
}
