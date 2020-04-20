import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmailAlertSettingsComponent } from './email-alert-settings/email-alert-settings.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'training-sessions-list', component: TrainingSessionsListComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'email-alert-settings', component: EmailAlertSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
