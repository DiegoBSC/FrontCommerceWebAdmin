import { Injectable } from '@angular/core';
import { DocumentFilterModel } from '../models/document-filter.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { UserModel } from '../../home/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  listUsers(filter: DocumentFilterModel) {
    const page = filter.page === 0 ? filter.page : filter.page - 1;
    let filters = '?page=' + page + '&size=' + filter.size;
    if (filter.mainFilter) {
      filters += '&mainFilter=' + filter.mainFilter;
    }
    if (filter.userId) {
      filters += '&userId=' + filter.userId;
    }
    return this.http.get(environment.apiUrl + '/users/list' + filters);
  }

  saveUser(userSave: UserModel){
    return this.http.post(environment.apiUrl + '/users/createUser', userSave);
  }

  deleteUser(userDelete: any){
    return this.http.post(environment.apiUrl + '/users/delete', userDelete);
  }

}
