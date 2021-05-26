import { View } from 'src/app/core/mvp/view';
import { CompanyModel } from '../../models/company.model';

export abstract class ModalCompanyView extends View {
    submited = false;
    company: CompanyModel = {};
}
