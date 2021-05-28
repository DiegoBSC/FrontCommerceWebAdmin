import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { FilterTableComponent } from './shared/filter-table/filter-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivePipe } from '../pipes/active.pipe';
import { ModalCompanyAddComponent } from './modal/modal-company-add/modal-company-add.component';
import { ModalConfirmComponent } from './modal/modal-confirm/modal-confirm.component';
import { ModalUserAddComponent } from './modal/modal-user-add/modal-user-add.component';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    CompanyListComponent,
    BreadcrumbComponent,
    PaginatorComponent,
    FilterTableComponent,
    ActivePipe,
    ModalCompanyAddComponent,
    ModalConfirmComponent,
    ModalUserAddComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ]
})
export class SystemModule { }
