import { View } from 'src/app/core/mvp/view';
import { CatalogsModel } from '../../models/catalogs.model';
import { CompanyModel } from '../../models/company.model';


export abstract class ModalCatalogView extends View {
    submited = false;
    catalog: CatalogsModel = {};
    companies: CompanyModel[] = [];
    resp: boolean = false;
}
