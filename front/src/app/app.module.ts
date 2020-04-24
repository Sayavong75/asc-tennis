import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarService } from './nav-bar.service';
import { NavAdminService } from './nav-admin.service';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmailAlertSettingsComponent } from './email-alert-settings/email-alert-settings.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMembersListComponent } from './admin-members-list/admin-members-list.component';

import { AppRoutingModule } from './app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    TrainingSessionsListComponent,
    UserProfileComponent,
    EmailAlertSettingsComponent,
    AdminComponent,
    AdminMembersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CdkTableModule,
    MatFormFieldModule
  ],
  providers: [
    NavBarService,
    NavAdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
