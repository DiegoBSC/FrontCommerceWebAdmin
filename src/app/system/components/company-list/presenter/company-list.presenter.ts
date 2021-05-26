import { Injectable } from '@angular/core';
import { CompanyListView } from '../company-list.view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { UserModel } from 'src/app/home/models/user.model';
import { CompanyService } from '../../../service/company.service';
import { PaginatorModel } from '../../../models/paginator.model';
import { CompanyModel } from 'src/app/system/models/company.model';

@Injectable({
    providedIn: 'root'
})
export class CompanyListPresenter {
    view: CompanyListView;

    constructor(private companyService: CompanyService) { }

    getCompanies() {
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

        this.companyService.listCompanies(filter).subscribe((res: PaginatorModel<CompanyModel[]>) => {
            this.view.loadData = true;
            this.view.companiesItem = [];
            res.data[0].forEach((e) => {
                this.view.companiesItem.push(e);
            });
            this.view.totalElements = res.totalElements;
        });
    }

    deleteCompany(id: any) {
        const companyDelete: CompanyModel = {};
        companyDelete.id = id;
        this.companyService.deleteCompany(companyDelete).subscribe((res: any) => {
            this.view.showInfo('La empresa fue eliminada');
            this.getCompanies();
        });
    }


}
