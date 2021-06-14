import { View } from 'src/app/core/mvp/view';
import { TaxProductModel } from '../../../models/product/tax-product.model';

export abstract class ModalTaxProductView extends View {
    taxProduct: TaxProductModel = {};
}
