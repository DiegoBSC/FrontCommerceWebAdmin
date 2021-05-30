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

  listCatalogs(filter: DocumentFilterModel){
    const page = filter.page === 0 ? filter.page : filter.page - 1;
    let filters = '?page=' + page + '&size=' + filter.size;
    if (filter.mainFilter) {
      filters += '&mainFilter=' + filter.mainFilter;
    }
    if (filter.userId) {
      filters += '&userId=' + filter.userId;
    }
    return this.http.get(environment.apiUrl + '/findAllByCompany' + filters);
  }

}