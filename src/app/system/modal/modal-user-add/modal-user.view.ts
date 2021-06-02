import { View } from 'src/app/core/mvp/view';
import { UserModel } from '../../../home/models/user.model';
import { CompanyModel } from '../../models/company.model';

export abstract class ModalUserView extends View {
    submited = false;
    user: UserModel = {};
    companiesAdmin: CompanyModel[] = [];
    rolesAll: any[] = [];
}
