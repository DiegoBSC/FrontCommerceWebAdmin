import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentFilterModel } from '../models/document-filter.model';
import { environment } from '../../../environments/environment.prod';
import { CompanyModel } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  listCompanies(filter: DocumentFilterModel) {
    const page = filter.page === 0 ? filter.page : filter.page - 1;
    let filters = '?page=' + page + '&size=' + filter.size;
    if (filter.mainFilter) {
      filters += '&mainFilter=' + filter.mainFilter;
    }
    if (filter.userId) {
      filters += '&userId=' + filter.userId;
    }
    return this.http.get(environment.apiUrl + '/company/list' + filters);
  }

  saveCompany(item: CompanyModel) {
    return this.http.post(environment.apiUrl + '/company/create', item);
  }

  deleteCompany(companyDelete: any) {
    return this.http.post(environment.apiUrl + '/company/delete', companyDelete);
  }

  getCompaniesByAdmin(idAdmin: string) {
    return this.http.get(environment.apiUrl + '/company/findByUserId?userId=' + idAdmin);
  }
}
