import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './user/about/about.component';
import { BookingComponent } from './user/booking/booking.component';
import { CarComponent } from './user/car/car.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailComponent } from './user/detail/detail.component';
import { HomeComponent } from './user/home/home.component';
import { ServiceComponent } from './user/service/service.component';
import { TeamComponent } from './user/team/team.component';
import { TestimonialComponent } from './user/testimonial/testimonial.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'booking',component:BookingComponent},
  {path:'about',component:AboutComponent},
  {path:'car',component:CarComponent},
  {path:'contact',component:ContactComponent},
  {path:'detail',component:DetailComponent},
  {path:'service',component:ServiceComponent},
  {path:'team',component:TeamComponent},
  {path:'testimonial',component:TestimonialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
