import { View } from 'src/app/core/mvp/view';
import { CatalogProductModel } from '../../../models/product/catalog-product.model';
import { CompanyModel } from '../../../models/company.model';

export abstract class ModalCatalogProductView extends View {
    catalogProduct: CatalogProductModel = {};
    companiesAdmin: CompanyModel[];
}
