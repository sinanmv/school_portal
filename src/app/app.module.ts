import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NotificationComponent } from './notification/notification.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LatestnewsComponent } from './latestnews/latestnews.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    NavbarComponent,
    NotfoundComponent,
    SideBarComponent,
    NotificationComponent,
    LatestnewsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
