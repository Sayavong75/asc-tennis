import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EmailAlertSettingsComponent } from './email-alert-settings/email-alert-settings.component';
import { AdminComponent} from './admin/admin.component';
import { AdminMembersListComponent } from './admin-members-list/admin-members-list.component';
import { AdminRankingListComponent } from './admin-ranking-list/admin-ranking-list.component';
import { AdminWeeklyGroupListComponent } from './admin-weekly-group-list/admin-weekly-group-list.component';
import { AdminTrainingSessionsListComponent } from './admin-training-sessions-list/admin-training-sessions-list.component';
import { AdminSessionsViewListComponent } from './admin-sessions-view-list/admin-sessions-view-list.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'training-sessions-list', component: TrainingSessionsListComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'email-alert-settings', component: EmailAlertSettingsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-members-list', component: AdminMembersListComponent },
  { path: 'admin-ranking-list', component: AdminRankingListComponent},
  { path: 'admin-weekly-group-list', component: AdminWeeklyGroupListComponent },
  { path: 'admin-training-sessions-list', component: AdminTrainingSessionsListComponent},
  { path: 'admin-sessions-view-list', component: AdminSessionsViewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
