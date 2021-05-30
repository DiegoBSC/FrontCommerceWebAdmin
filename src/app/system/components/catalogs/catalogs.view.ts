import { View } from '../../../core/mvp/view';
import { CatalogsModel } from '../../models/catalogs.model';
import { DocumentFilterModel } from '../../models/document-filter.model';

export abstract class CatalogsView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    catalogsItem: CatalogsModel[] = [];
    catalogs: CatalogsModel;
    loadData: boolean;
}
