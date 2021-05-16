import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/shared/components/login/login.component';
import { SingupComponent } from '../core/shared/components/singup/singup.component';
import { LoginGuardService } from '../core/shared/data/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'signup', component: SingupComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
