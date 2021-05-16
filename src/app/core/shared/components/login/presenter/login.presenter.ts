import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../../../../../home/service/user.service';
import { LoginView } from '../login.view';

@Injectable(
    { providedIn: 'root' }
)
export class LoginPresenter {
    constructor(private userService: UserService, private router: Router) { }
    view: LoginView;
    doLogin() {
        this.view.submited = true;
        this.userService.logIn(this.view.user).subscribe((res: any) => {
            localStorage.setItem('token', res.token);
            this.getUserInfo(this.view.user);
        }, (error) => {
            this.view.enableForm();
            this.view.submited = false;
            if (error.status === 401) {
                this.view.showError('Credenciales inválidas');
                return;
            }
            if (error.status === 504 || error.status === 405) {
                this.view.showError('El servidor no esta disponible');
                return;
            }
            this.view.showError(error.message);
        });
    }

    getUserInfo(user: any) {
        this.userService.userInfo(user.nick).subscribe(res => {
            localStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['system']);
        }, (error: HttpErrorResponse) => {
            this.view.enableForm();
            localStorage.clear();
            this.view.submited = false;
            if (error.status === 504 || error.status === 405) {
                this.view.showError('El servidor no esta disponible');
                return;
            }
            this.view.showError(error.error.message);
        });
    }
}
