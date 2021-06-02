import { Injectable, Pipe } from '@angular/core';
import { UserModel } from 'src/app/home/models/user.model';
import { ModalUserView } from '../modal-user.view';
import { UserService } from '../../../service/user.service';
import { CompanyService } from '../../../service/company.service';

@Injectable(
    { providedIn: 'root' }
)
export class ModalUserPresenter {

    constructor(private userService: UserService, private companyService: CompanyService) { }
    view: ModalUserView;

    async saveUser(userSave: UserModel) {
        this.view.user = userSave;
        this.view.submited = true;
        await this.userService.saveUser(this.view.user).toPromise().then(
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

    getCompaniesByUser() {
        const idUser = JSON.parse(localStorage.getItem('user')).id;
        this.companyService.getCompaniesByAdmin(idUser).subscribe((res: any) => {
            res.forEach(element => {
                this.view.companiesAdmin.push(element);
            });
        }, (error) => {
            this.view.showError(error.error.message);
        });

    }


}
