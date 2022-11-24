import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardClientComponent } from './client/dashboard-client/dashboard-client.component';

import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AdminProfilComponent } from './webmaster/admin-profil/admin-profil.component';
import { DashboardWebmasterComponent } from './webmaster/dashboard-webmaster/dashboard-webmaster.component';
import { ManageCarsComponent } from './webmaster/manage-cars/manage-cars.component';
import { ManageRequestsComponent } from './webmaster/manage-requests/manage-requests.component';
import { ManageUsersComponent } from './webmaster/manage-users/manage-users.component';
import { ModelsComponent } from './webmaster/models/models.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},

  /**** webmaster */
  {path:'dashboard-webmaster',component:DashboardWebmasterComponent},
  {path:'model',component:ModelsComponent},
  {path:'admin-profil',component:AdminProfilComponent},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'employee-requests',component:ManageRequestsComponent},
  {path:'manage-cars',component:ManageCarsComponent},
  
  {path:'dashboard-client',component:DashboardClientComponent},


];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
