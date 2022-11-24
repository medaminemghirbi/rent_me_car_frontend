import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { AdminProfilComponent } from './webmaster/admin-profil/admin-profil.component';
import { DashboardWebmasterComponent } from './webmaster/dashboard-webmaster/dashboard-webmaster.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard-webmaster',component:DashboardWebmasterComponent},
  {path:'admin-profil',component:AdminProfilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
