import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    CompanyListComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterModule
  ]
})
export class SystemModule { }
