import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';

const routes: Routes = [
  {
    path:"" ,component:DashboardComponent
  }
  ,
  {
    path:"registration" , component:RegistrationComponent
  },
  {
    path:"latest-news" ,component:LatestnewsComponent
  },
  {
    path:"**" ,component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
