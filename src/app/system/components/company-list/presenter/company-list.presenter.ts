import { Injectable } from '@angular/core';
import { CompanyListView } from '../company-list.view';
import { DocumentFilterModel } from '../../../models/document-filter.model';
import { UserModel } from 'src/app/home/models/user.model';
import { RolEnum } from '../../../models/rol.enum';
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

        user.roles.forEach(e => console.log(e.toString())
        );

        const result = user.roles.includes('ROLE_SUPER');

        console.log(result);
        console.log( user.id);

        const filter: DocumentFilterModel = {
            endDate: null,
            initDate: null,
            page: this.view.filter.page,
            size: this.view.filter.size,
            mainFilter: this.view.filter.mainFilter,
            userId: result ?  null : user.id,
        };

        this.companyService.listCompanies(filter).subscribe((res: PaginatorModel<CompanyModel[]>) => {
            console.log(res.data[0]);
            res.data[0].forEach((e) => { console.log(JSON.stringify(e));
            });
        });
    }

}
