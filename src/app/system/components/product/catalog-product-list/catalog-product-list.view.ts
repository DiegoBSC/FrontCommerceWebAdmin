import { View } from '../../../../core/mvp/view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { CatalogProductModel } from '../../../models/product/catalog-product.model';

export abstract class CatalogProductListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    catalogsItems: CatalogProductModel[] = [];
    catalogProductModel: CatalogProductModel;
    loadData: boolean;
    catalogItemsPaginateLocal: CatalogProductModel[] = [];
}
