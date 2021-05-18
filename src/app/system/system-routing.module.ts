import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../core/shared/data/auth-guard.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuardService] },
      { path: 'user-list', component: UserListComponent , canActivate: [AuthGuardService] },
      { path: 'company-list', component: CompanyListComponent , canActivate: [AuthGuardService] },
      { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
