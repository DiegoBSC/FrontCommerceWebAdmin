import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  logIn(user: any) {
    return this.httpClient.post(environment.apiUrlPublic + '/login', user);
  }

  userInfo(nick: string) {
    return this.httpClient.get(environment.apiUrlPublic + '/user?nick=' + nick);
  }
}
