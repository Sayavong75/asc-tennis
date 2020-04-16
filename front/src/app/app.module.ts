import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmailAlertSettingsComponent } from './email-alert-settings/email-alert-settings.component';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TrainingSessionsListComponent,
    AdminComponent,
    UserProfileComponent,
    EmailAlertSettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
