import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from 'src/app/home/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    try {
      return !helper.isTokenExpired(token);
    } catch (ex) {
      return false;
    }

  }

  isValidToken(token: string): boolean {
    const helper = new JwtHelperService();
    try {
      return !helper.isTokenExpired(token);
    } catch (ex) {
      return false;
    }
  }

  decodeToken(): any {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return helper.decodeToken(token);
  }

  hasPermission(permission: string): boolean {
    const user: any = this.decodeToken();
    const permissions: string[] = user.roles;
    if (!user || !permissions || permissions.length === 0) {
      return false;
    }
    for (const perm of permissions) {
      if (perm === permission) {
        return true;
      }
    }
    return false;
  }

  logOut(): void  {
    localStorage.clear();
    this.router.navigate(['']);
  }

  getCurrentUser(): UserModel {
    return JSON.parse(localStorage.getItem('user'));
  }

}
