import { Injectable } from "@angular/core";
import { UserModel } from "src/app/home/models/user.model";
import { CatalogsModel } from "src/app/system/models/catalogs.model";
import { DocumentFilterModel } from "src/app/system/models/document-filter.model";
import { PaginatorModel } from "src/app/system/models/paginator.model";
import { CatalogsService } from "src/app/system/service/catalogs.service";
import { CatalogsView } from "../catalogs.view";

@Injectable({
    providedIn: 'root'
})

export class CatalogsPresenter {
    view: CatalogsView;

    constructor(private catalogService: CatalogsService) { }

    getCatalogs() {
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

        this.catalogService.listCatalogs().subscribe((res => {
            this.view.loadData = true;
            this.view.catalogsItem = [];
            res.forEach((e) => {
                this.view.catalogsItem.push(e);
            });
            this.view.totalElements = res.length;
        }));
    }

    deleteCatalog(id: any) {
        const catalogsDelete: CatalogsModel = {};
        catalogsDelete.id = id;
        this.catalogService.deleteCatalog(catalogsDelete).subscribe((res: any) => {
            this.view.showInfo('Catalogo eliminado');
            this.getCatalogs();
        });
    }
}