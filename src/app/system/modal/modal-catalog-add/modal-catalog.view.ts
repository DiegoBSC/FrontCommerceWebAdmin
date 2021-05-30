import { View } from 'src/app/core/mvp/view';
import { CatalogsModel } from '../../models/catalogs.model';


export abstract class ModalCatalogView extends View {
    submited = false;
    catalog: CatalogsModel = {};
}
