import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SystemModule } from './system/system.module';
import { HeaderComponent } from './system/shared/header/header.component';
import { SidebarComponent } from './system/shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './core/shared/components/login/login.component';
import { SingupComponent } from './core/shared/components/singup/singup.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadComponent } from './core/shared/components/preload/preload.component';
import { HttpConfigInterceptor } from './core/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    SingupComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SystemModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule { }
