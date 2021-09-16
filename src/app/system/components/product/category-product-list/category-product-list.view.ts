import { View } from '../../../../core/mvp/view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { CategoryProductModel } from '../../../models/product/category-product.model';

export abstract class CategoryProductListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    categoriesItems: CategoryProductModel[] = [];
    categoryProductModel: CategoryProductModel;
    loadData: boolean;
    categoriesItemsPaginateLocal: CategoryProductModel[] = [];
}
