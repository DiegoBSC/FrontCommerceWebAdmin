import { Injectable, Pipe } from '@angular/core';
import { TaxProductService } from '../../../../service/product/tax-product.service';
import { TaxProductModel } from '../../../../models/product/tax-product.model';
import { ModalTypeProductView } from '../modal-type-product.view';
import { TypeProductModel } from '../../../../models/product/type-product.model';
import { TypeProductService } from '../../../../service/product/type-product.service';

@Injectable(
    { providedIn: 'root' }
)
export class ModalTypeProductPresenter {

    constructor(private typeProductService: TypeProductService) { }
    view: ModalTypeProductView;

    async save(typeProduct: TypeProductModel) {
        this.view.typeProduct = typeProduct;

        await this.typeProductService.createTypeProduct(this.view.typeProduct).toPromise().then(
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
