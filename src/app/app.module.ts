
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { SliderComponent } from './components/slider/slider.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FormComponent } from './components/form/form.component';
import { ActivityService } from './services/activity.service';
import { HandleActivityComponent } from './components/handle-activity/handle-activity.component';
import { ProfileService } from './services/profile.service';
import { BoxComponent } from './components/box/box.component';
import { BoxService } from './services/box.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,

    SliderComponent,
    ServicesComponent,
    TeamComponent,
    PortfolioComponent,
    PricingComponent,
    ClientComponent,
    ContactComponent,
    ScrollupComponent,
    AboutUsComponent,
    ProfileComponent,
    ActivitiesComponent,
    FormComponent,
    HandleActivityComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    

    
  ],
  providers: [ActivityService,ProfileService,BoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
