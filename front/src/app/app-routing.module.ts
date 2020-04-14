import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrainingSessionsListComponent } from './training-sessions-list/training-sessions-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'training-sessions-list', component: TrainingSessionsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
