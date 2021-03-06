import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// ============ Angular Material ============
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
// ============ Components ============
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TrainingSessionsListComponent} from './training-sessions-list/training-sessions-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EmailAlertSettingsComponent} from './email-alert-settings/email-alert-settings.component';
import {AdminComponent} from './admin/admin.component';
import {AdminMembersListComponent, DialogAddMember, DialogEditMember} from './admin-members-list/admin-members-list.component';
import {
  AdminRankingListComponent,
  DialogAddRanking,
  DialogDeleteRanking,
  DialogEditRanking
} from './admin-ranking-list/admin-ranking-list.component';
import {
  AdminWeeklyGroupListComponent,
  DialogAddTrainingGroup,
  DialogDeleteTrainingGroup,
  DialogEditTrainingGroup
} from './admin-weekly-group-list/admin-weekly-group-list.component';
import {
  AdminTrainingSessionListComponent,
  DialogAddTrainingDay,
  DialogEditTrainingDay
} from './admin-training-session-list/admin-training-session-list.component';
import {AdminSessionsViewListComponent} from './admin-sessions-view-list/admin-sessions-view-list.component';
import {AdminCoachesListComponent, DialogAddCoach, DialogEditCoach} from './admin-coaches-list/admin-coaches-list.component';
import {AdminClubsListComponent, DialogAddClub, DialogEditClub} from './admin-clubs-list/admin-clubs-list.component';
import {AdminUsersListComponent, DialogAddUser, DialogEditUser} from './admin-users-list/admin-users-list.component';

import {DataService} from './service/data.service';
import {AppRoutingModule} from './app-routing.module';
import {CreatorGuard} from './authentication/guards/creator.guard';
import {AdminGuard} from './authentication/guards/admin.guard';
import {ReaderGuard} from './authentication/guards/reader.guard';
import {JwtInterceptor} from './authentication/http-interceptor/jwt.interceptor';

// ================== END ===================

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
    AdminMembersListComponent,
    AdminRankingListComponent,
    AdminWeeklyGroupListComponent,
    AdminTrainingSessionListComponent,
    AdminSessionsViewListComponent,
    AdminCoachesListComponent,
    AdminClubsListComponent,
    AdminUsersListComponent,
    DialogAddMember,
    DialogEditMember,
    DialogAddRanking,
    DialogEditRanking,
    DialogDeleteRanking,
    DialogAddTrainingGroup,
    DialogEditTrainingGroup,
    DialogDeleteTrainingGroup,
    DialogAddCoach,
    DialogEditCoach,
    DialogAddClub,
    DialogEditClub,
    DialogAddTrainingDay,
    DialogEditTrainingDay,
    DialogAddUser,
    DialogEditUser
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // ==== Angular Material ====
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
    ReaderGuard,
    CreatorGuard,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogAddMember,
    DialogEditMember,
    DialogAddRanking,
    DialogEditRanking,
    DialogDeleteRanking,
    DialogAddTrainingGroup,
    DialogEditTrainingGroup,
    DialogDeleteTrainingGroup,
    DialogAddCoach,
    DialogEditCoach,
    DialogAddClub,
    DialogEditClub,
    DialogAddTrainingDay,
    DialogEditTrainingDay,
    DialogAddUser,
    DialogEditUser]
})
export class AppModule {
}
