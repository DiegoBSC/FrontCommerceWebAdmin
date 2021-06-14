import { Injectable, Pipe } from '@angular/core';
import { CategoryProductService } from '../../../../service/product/category-product.service';
import { CategoryProductModel } from '../../../../models/product/category-product.model';
import { ModalTaxProductView } from '../modal-tax-product.view';
import { TaxProductService } from '../../../../service/product/tax-product.service';
import { TaxProductModel } from '../../../../models/product/tax-product.model';

@Injectable(
    { providedIn: 'root' }
)
export class ModalTaxProductPresenter {

    constructor(private taxProductService: TaxProductService) { }
    view: ModalTaxProductView;

    async save(taxProduct: TaxProductModel) {
        this.view.taxProduct = taxProduct;

        await this.taxProductService.createTaxProduct(this.view.taxProduct).toPromise().then(
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
