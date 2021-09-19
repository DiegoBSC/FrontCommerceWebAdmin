
import { View } from '../../../../core/mvp/view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { ProductModel } from '../../../models/product/product.model';

export abstract class ProductListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    productsItem: ProductModel[] = [];
    product: ProductModel;
}
