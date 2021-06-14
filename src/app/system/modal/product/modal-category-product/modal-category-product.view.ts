import { View } from 'src/app/core/mvp/view';
import { CategoryProductModel } from '../../../models/product/category-product.model';

export abstract class ModalCategoryProductView extends View {
    categoryProduct: CategoryProductModel = {};
}
