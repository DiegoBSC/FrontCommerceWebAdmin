import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CategoryProductModel } from '../../models/product/category-product.model';
import { CatalogProductModel } from '../../models/product/catalog-product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogProductService {
  constructor(private http: HttpClient) { }

  listCatalogProduct(idsCompanies: string[]) {
    return this.http.get(environment.apiUrl + '/catalogProduct/findAll?idsCompanies=' + idsCompanies);
  }

  findCatalogProductById(id: string) {
    return this.http.get(environment.apiUrl + '/catalogProduct/find?catalogId=' + id);
  }

  createCatalogProduct(catalogPresenter: CatalogProductModel) {
    return this.http.post(environment.apiUrl + '/catalogProduct/create', catalogPresenter);
  }

  deleteCatalogProduct(idCatalog: string) {
    return this.http.delete(environment.apiUrl + '/catalogProduct/delete?catalogId=' + idCatalog);
  }
}
