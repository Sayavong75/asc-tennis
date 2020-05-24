import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TrainingSessionsListComponent} from './training-sessions-list/training-sessions-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EmailAlertSettingsComponent} from './email-alert-settings/email-alert-settings.component';
import {AdminComponent} from './admin/admin.component';
import {AdminMembersListComponent} from './admin-members-list/admin-members-list.component';
import {AdminRankingListComponent} from './admin-ranking-list/admin-ranking-list.component';
import {AdminWeeklyGroupListComponent} from './admin-weekly-group-list/admin-weekly-group-list.component';
import {AdminCoachesListComponent} from './admin-coaches-list/admin-coaches-list.component';
import {AdminClubsListComponent} from './admin-clubs-list/admin-clubs-list.component';
import {AdminTrainingSessionListComponent} from './admin-training-session-list/admin-training-session-list.component';
import {AdminSessionsViewListComponent} from './admin-sessions-view-list/admin-sessions-view-list.component';
import {AdminUsersListComponent} from './admin-users-list/admin-users-list.component';
import {AdminGuard} from './authentication/guards/admin.guard';
import {ReaderGuard} from './authentication/guards/reader.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [ReaderGuard]},
  {path: 'training-sessions-list', component: TrainingSessionsListComponent, canActivate: [ReaderGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [ReaderGuard]},
  {path: 'email-alert-settings', component: EmailAlertSettingsComponent, canActivate: [ReaderGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'admin-members-list', component: AdminMembersListComponent, canActivate: [AdminGuard]},
  {path: 'admin-ranking-list', component: AdminRankingListComponent, canActivate: [AdminGuard]},
  {path: 'admin-weekly-group-list', component: AdminWeeklyGroupListComponent, canActivate: [AdminGuard]},
  {path: 'admin-coaches-list', component: AdminCoachesListComponent, canActivate: [AdminGuard]},
  {path: 'admin-clubs-list', component: AdminClubsListComponent, canActivate: [AdminGuard]},
  {path: 'admin-training-sessions-list', component: AdminTrainingSessionListComponent, canActivate: [AdminGuard]},
  {path: 'admin-sessions-view-list', component: AdminSessionsViewListComponent, canActivate: [AdminGuard]},
  {path: 'admin-users-list', component: AdminUsersListComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
