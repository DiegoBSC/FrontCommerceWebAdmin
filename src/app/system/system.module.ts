import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    // HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterModule
  ]
})
export class SystemModule { }
