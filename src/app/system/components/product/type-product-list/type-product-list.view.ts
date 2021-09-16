import { View } from '../../../../core/mvp/view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { TypeProductModel } from '../../../models/product/type-product.model';

export abstract class TypeProductListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    typesItems: TypeProductModel[] = [];
    typeProductModel: TypeProductModel;
    loadData: boolean;
    typesItemsPaginateLocal: TypeProductModel[] = [];
}
