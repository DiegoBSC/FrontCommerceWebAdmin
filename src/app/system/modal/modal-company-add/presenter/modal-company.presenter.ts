import { Injectable, Pipe } from '@angular/core';
import { ModalCompanyView } from '../modal-company.view';
import { CompanyService } from '../../../service/company.service';
import { UserModel } from 'src/app/home/models/user.model';
import { CompanyModel } from '../../../models/company.model';

@Injectable(
    { providedIn: 'root' }
)
export class ModalCompanyPresenter {

    constructor(private companyService: CompanyService) { }
    view: ModalCompanyView;

    async saveCompany(companySave: CompanyModel) {
        this.view.company = companySave;

        const user: UserModel = JSON.parse(localStorage.getItem('user'));

        this.view.submited = true;
        this.view.company.userId = user.id;
        await this.companyService.saveCompany(this.view.company).toPromise().then(
            (resp: any) => {
                this.view.showInfo('Registro guardado con éxito');
                this.view.submited = false;
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
                this.view.submited = false;
            }
        );

    }
}
