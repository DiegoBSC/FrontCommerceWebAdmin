import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentFilterModel } from '../models/document-filter.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  listCompanies(filter: DocumentFilterModel) {
    let filters = '?page=' + filter.page + '&size=' + filter.size;
    if (filter.mainFilter) {
      filters += '&mainFilter=' + filter.mainFilter;
    }
    if (filter.userId) {
      filters += '&userId=' + filter.userId;
    }
    return this.http.get(environment.apiUrl + '/company/list' + filters);
  }
}
