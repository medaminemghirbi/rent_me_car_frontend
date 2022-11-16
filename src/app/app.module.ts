import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { NavBarComponent } from './user/nav-bar/nav-bar.component';
import { AboutComponent } from './user/about/about.component';
import { BookingComponent } from './user/booking/booking.component';
import { CarComponent } from './user/car/car.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailComponent } from './user/detail/detail.component';
import { ServiceComponent } from './user/service/service.component';
import { TeamComponent } from './user/team/team.component';
import { TestimonialComponent } from './user/testimonial/testimonial.component';
import { FooterComponent } from './user/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    BookingComponent,
    CarComponent,
    ContactComponent,
    DetailComponent,
    ServiceComponent,
    TeamComponent,
    TestimonialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
