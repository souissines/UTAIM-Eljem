import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BoxComponent } from './components/box/box.component';
import { FormComponent } from './components/form/form.component';
import { HandleActivityComponent } from './components/handle-activity/handle-activity.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'activity', component:ActivitiesComponent},
  {path:'form',component:FormComponent},
  {path:'box',component:BoxComponent},
  {path:'handle', component:HandleActivityComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
