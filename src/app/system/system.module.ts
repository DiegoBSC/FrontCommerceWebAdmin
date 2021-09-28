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
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MultiselectFieldComponent } from './shared/multiselect-field/multiselect-field.component';
import { CategoryProductListComponent } from './components/product/category-product-list/category-product-list.component';
import { TypeProductListComponent } from './components/product/type-product-list/type-product-list.component';
import { TaxProductListComponent } from './components/product/tax-product-list/tax-product-list.component';
import { ModalTaxProductComponent } from './modal/product/modal-tax-product/modal-tax-product.component';
import { ModalCategoryProductComponent } from './modal/product/modal-category-product/modal-category-product.component';
import { ModalTypeProductComponent } from './modal/product/modal-type-product/modal-type-product.component';
import { CatalogProductListComponent } from './components/product/catalog-product-list/catalog-product-list.component';
import { ModalCatalogProductComponent } from './modal/product/modal-catalog-product/modal-catalog-product.component';
import { LoadingComponent } from '../core/shared/components/loading/loading.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ModalFileUploadComponent } from './modal/modal-file-upload/modal-file-upload.component';


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
    ModalUserAddComponent,
    MultiselectFieldComponent,
    CategoryProductListComponent,
    TypeProductListComponent,
    TaxProductListComponent,
    ModalTaxProductComponent,
    ModalCategoryProductComponent,
    ModalTypeProductComponent,
    CatalogProductListComponent,
    ModalCatalogProductComponent,
    LoadingComponent,
    ProductListComponent,
    ProductFormComponent,
    ModalFileUploadComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    AngularMultiSelectModule
  ]
})
export class SystemModule { }
