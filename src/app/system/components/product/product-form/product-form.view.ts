
import { View } from '../../../../core/mvp/view';
import { ProductModel } from '../../../models/product/product.model';

export abstract class ProductFormView extends View {
    product: ProductModel;
    loadData: boolean;
}
