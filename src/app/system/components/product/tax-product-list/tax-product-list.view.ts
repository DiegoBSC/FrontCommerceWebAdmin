import { View } from '../../../../core/mvp/view';
import { TaxProductModel } from '../../../models/product/tax-product.model';
import { DocumentFilterModel } from '../../../models/document-filter.model';

export abstract class TaxProductListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    taxsItems: TaxProductModel[] = [];
    taxProductModel: TaxProductModel;
    loadData: boolean;
    taxsItemsPaginateLocal: TaxProductModel[] = [];
}
