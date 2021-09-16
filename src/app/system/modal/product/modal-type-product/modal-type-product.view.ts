import { View } from 'src/app/core/mvp/view';
import { TypeProductModel } from '../../../models/product/type-product.model';

export abstract class ModalTypeProductView extends View {
    typeProduct: TypeProductModel = {};
}
