import { Injectable } from "@angular/core";
import { AuthService } from "src/app/core/shared/data/auth.service";
import { UserModel } from "src/app/home/models/user.model";
import { CatalogsModel } from "src/app/system/models/catalogs.model";
import { CatalogsService } from "src/app/system/service/catalogs.service";
import { CompanyService } from "src/app/system/service/company.service";
import { ModalCatalogView } from "../modal-catalog.view";

@Injectable(
    { providedIn: 'root' }
)

export class ModalCatalogPresenter {

    constructor(private catalogService: CatalogsService, private authService: AuthService,
        private companyService: CompanyService) { }

    view: ModalCatalogView;

    async getAllCompanies() {
        const user = this.authService.getCurrentUser();
        return this.companyService.getAllCompaniesByUser(user.id).toPromise().then(
            (resp: any[]) => {
                resp.forEach(data => {
                    this.view.companies.push(data);
                });
            }
        ).catch((error) => {
            this.view.showError(error.error.message);
            this.view.submited = false;
        })
    }

    async saveCatalog(catalogSave: CatalogsModel) {
        this.view.catalog = catalogSave;
        const user: UserModel = this.authService.getCurrentUser();
        this.view.submited = true;
        await this.catalogService.saveCatalog(this.view.catalog).toPromise().then(
            (resp: any) => {
                this.view.showInfo('Registro guardado con éxito');
                this.view.submited = false;
                this.view.resp = true;
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
                this.view.submited = false;
            }
        );
    }

}