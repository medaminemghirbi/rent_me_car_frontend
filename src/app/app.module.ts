import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './service/token.interceptor';
import { DashboardWebmasterComponent } from './webmaster/dashboard-webmaster/dashboard-webmaster.component';
import { NavBarComponent } from './webmaster/nav-bar/nav-bar.component';
import { SideBarComponent } from './webmaster/side-bar/side-bar.component';
import { AdminProfilComponent } from './webmaster/admin-profil/admin-profil.component';
import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';
import { ModelsComponent } from './webmaster/models/models.component';
import { ManageUsersComponent } from './webmaster/manage-users/manage-users.component';
import { ManageRequestsComponent } from './webmaster/manage-requests/manage-requests.component';
import { ManageCarsComponent } from './webmaster/manage-cars/manage-cars.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardWebmasterComponent,
    NavBarComponent,
    SideBarComponent,
    AdminProfilComponent,
    DashboardClientComponent,
    ModelsComponent,
    ManageUsersComponent,
    ManageRequestsComponent,
    ManageCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
