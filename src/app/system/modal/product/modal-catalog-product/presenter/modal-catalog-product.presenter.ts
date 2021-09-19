import { Injectable } from '@angular/core';
import { ModalCatalogProductView } from '../modal-catalog-product.view';
import { CatalogProductService } from '../../../../service/product/catalog-product.service';
import { CatalogProductModel } from '../../../../models/product/catalog-product.model';
import { CompanyService } from '../../../../service/company.service';

@Injectable(
    { providedIn: 'root' }
)
export class ModalCatalogProductPresenter {

    constructor(private catalogProductService: CatalogProductService, private companyService: CompanyService) { }
    view: ModalCatalogProductView;

    async save(catalogProduct: CatalogProductModel) {
        this.view.catalogProduct = catalogProduct;

        await this.catalogProductService.createCatalogProduct(this.view.catalogProduct).toPromise().then(
            (resp: any) => {
                this.view.showInfo('Registro guardado con éxito');
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
            }
        );

    }

    async getCompaniesByUserAdmin() {
        const idUser = JSON.parse(localStorage.getItem('user')).id;
        await this.companyService.getCompaniesByAdmin(idUser).toPromise().then(
            (resp: any) => {
                this.view.companiesAdmin = [];
                resp.forEach(element => {
                    this.view.companiesAdmin.push(element);
                });
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
            }
        );
    }

    async getCompaniesByUser() {
        const idCompanies = JSON.parse(localStorage.getItem('user')).companies;
        await this.companyService.getCompaniesByIds(idCompanies).toPromise().then(
            (resp: any) => {
                this.view.companiesAdmin = [];
                resp.forEach(element => {
                    this.view.companiesAdmin.push(element);
                });
            }
        ).catch(
            (error) => {
                this.view.showError(error.error.message);
            }
        );
    }
}
