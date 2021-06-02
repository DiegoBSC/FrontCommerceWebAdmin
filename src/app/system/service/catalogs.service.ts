import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatalogsModel } from '../models/catalogs.model';
import { environment } from '../../../environments/environment.prod';
import { DocumentFilterModel } from '../models/document-filter.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(private http: HttpClient) { }

  saveCatalog(item: CatalogsModel) {
    return this.http.post(environment.apiUrl + '/catalog/create', item);
  }

  deleteCatalog(catalogDelete: any) {
    return this.http.post(environment.apiUrl + '/catalog/delete', catalogDelete);
  }

  listCatalogs(userId: string) {
    return this.http.get<CatalogsModel[]>(environment.apiUrl + '/catalog/getCatalogsByCompanyId?userId=' + userId);
  }

}
