import { Injectable } from '@angular/core';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { CompanyService } from '../../../service/company.service';
import { PaginatorModel } from '../../../models/paginator.model';
import { UserListView } from '../user-list.view';
import { UserModel } from '../../../../home/models/user.model';
import { UserService } from '../../../service/user.service';

@Injectable({
    providedIn: 'root'
})
export class UserListPresenter {
    view: UserListView;

    constructor(private userService: UserService) { }

    getUsers() {
        const user: UserModel = JSON.parse(localStorage.getItem('user'));

        const result = user.roles.includes('ROLE_SUPER');

        const filter: DocumentFilterModel = {
            endDate: null,
            initDate: null,
            page: this.view.filter.page,
            size: this.view.filter.size,
            mainFilter: this.view.filter.mainFilter,
            userId: result ? null : user.id,
        };

        this.userService.listUsers(filter).subscribe((res: PaginatorModel<UserModel[]>) => {
            this.view.loadData = true;
            this.view.usersItem = [];
            res.data[0].forEach((e) => {
                this.view.usersItem.push(e);
            });
            this.view.totalElements = res.totalElements;
        });
    }

    // deleteCompany(id: any) {
    //     const companyDelete: CompanyModel = {};
    //     companyDelete.id = id;
    //     this.companyService.deleteCompany(companyDelete).subscribe((res: any) => {
    //         this.view.showInfo('La empresa fue eliminada');
    //         this.getCompanies();
    //     });
    // }


}
