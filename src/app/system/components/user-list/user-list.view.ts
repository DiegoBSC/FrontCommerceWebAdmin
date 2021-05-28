import { View } from '../../../core/mvp/view';
import { DocumentFilterModel } from '../../models/document-filter.model';
import { UserModel } from '../../../home/models/user.model';

export abstract class UserListView extends View {
    filter: DocumentFilterModel;
    totalElements: number;
    usersItem: UserModel[] = [];
    user: UserModel;
    loadData: boolean;
}
