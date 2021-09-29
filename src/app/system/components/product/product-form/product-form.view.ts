
import { View } from '../../../../core/mvp/view';
import { ProductModel } from '../../../models/product/product.model';
import { CategoryProductModel } from '../../../models/product/category-product.model';
import { TypeProductModel } from '../../../models/product/type-product.model';
import { TaxProductModel } from 'src/app/system/models/product/tax-product.model';

export abstract class ProductFormView extends View {
    product: ProductModel = {};
    submited: boolean;
    file: File;
    categories: CategoryProductModel[];
    types: TypeProductModel[];
    taxes: TaxProductModel[];
}
