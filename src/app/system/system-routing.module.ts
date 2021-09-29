import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from '../core/shared/data/auth-guard.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { TypeProductListComponent } from './components/product/type-product-list/type-product-list.component';
import { TaxProductListComponent } from './components/product/tax-product-list/tax-product-list.component';
import { CategoryProductListComponent } from './components/product/category-product-list/category-product-list.component';
import { CatalogProductListComponent } from './components/product/catalog-product-list/catalog-product-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuardService] },
      { path: 'user-list', component: UserListComponent , canActivate: [AuthGuardService] },
      { path: 'company-list', component: CompanyListComponent , canActivate: [AuthGuardService] },
      { path: 'type-product-list', component: TypeProductListComponent , canActivate: [AuthGuardService] },
      { path: 'tax-product-list', component: TaxProductListComponent , canActivate: [AuthGuardService] },
      { path: 'category-product-list', component: CategoryProductListComponent , canActivate: [AuthGuardService] },
      { path: 'catalog-product-list', component: CatalogProductListComponent, canActivate: [AuthGuardService]},
      { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuardService]},
      { path: 'product-form', component: ProductFormComponent, canActivate: [AuthGuardService]},
      { path: 'product-form/:productId', component: ProductFormComponent, canActivate: [AuthGuardService]},
      { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
