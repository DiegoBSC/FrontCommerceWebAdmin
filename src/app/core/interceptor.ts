import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { View } from './mvp/view';
import { AuthService } from './shared/data/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpConfigInterceptor extends View implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        toasttr: ToastrService) {
        super(toasttr);
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (this.isInBlackListGeneralException(request)) {
                    return throwError(error);
                }
                switch (error.status) {

                    case 403:
                        this.authService.logOut();
                        break;
                    case 412:
                        this.showError(error.error.message);
                        break;
                    case 504:
                        this.showError('Sin conexión al servidor');
                        break;

                    case 500:
                        if (error.error.message) {
                            this.showError(error.error.message);
                        } else {
                            this.showError('Algo salio mal');
                        }
                        break;

                    default:
                        this.showError('Algo salio mal');
                        break;
                }
                return throwError(error);
            }));
    }

    private isInBlackListGeneralException(event: HttpRequest<any>): boolean {
        if (event.url.indexOf('/api/login') >= 0) {
            return true;
        }
        return false;
    }

}
