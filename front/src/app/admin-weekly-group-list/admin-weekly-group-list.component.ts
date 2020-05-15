import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any;

import { DataService } from '../service/data.service';
import { TrainingGroup } from '../model/trainingGroup';
import { Coach } from '../model/coach';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogAddRanking, DialogDeleteRanking, DialogEditRanking} from '../admin-ranking-list/admin-ranking-list.component';
import {Ranking} from '../model/ranking';
import {Series} from '../model/series';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-weekly-group-list',
  templateUrl: './admin-weekly-group-list.component.html',
  styleUrls: ['./admin-weekly-group-list.component.css']
})
export class AdminWeeklyGroupListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label', 'coach', 'action'];
  dataSource: MatTableDataSource<TrainingGroup>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  trainingGroup;
  trainingGroups: TrainingGroup[];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.getTrainingGroupList().subscribe(trainingGroups => {
      this.dataSource = new MatTableDataSource(trainingGroups);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.trainingGroups = trainingGroups;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Rechargement de la table lors du clic sur le bouton X du champ de recherche
  refreshTable() {
    this.dataService.getTrainingGroupList().subscribe(trainingGroups => {
      this.dataSource = new MatTableDataSource(trainingGroups);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.trainingGroups = trainingGroups;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

  // Ajouter un groupe d'entraînement
  addTrainingGroupForm() {
    const dialogRef = this.dialog.open(DialogAddTrainingGroup, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier les données d'un groupe
  editTrainingGroupForm(trainingGroup) {
    const dialogRef = this.dialog.open(DialogEditTrainingGroup, {
      width: '465px',
      data: trainingGroup,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainingGroup = trainingGroup;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Supprimer un groupe
  deleteTrainingGroupForm(trainingGroup) {
    const dialogRef = this.dialog.open(DialogDeleteTrainingGroup, {
      width: '465px',
      data: trainingGroup,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainingGroup = trainingGroup;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-training-group',
  templateUrl: 'dialog-add-training-group.html',
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddTrainingGroup {

  trainingGroup = new TrainingGroup();
  coaches: Coach[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddTrainingGroup>,
    @Inject(MAT_DIALOG_DATA) public data: TrainingGroup) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getCoachList().subscribe(
      coaches => this.coaches = coaches
    );
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddTrainingGroup() {
    console.log('Data: ' + JSON.stringify(this.trainingGroup));
    this.dataService.addTrainingGroup(this.trainingGroup).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-training-group',
  templateUrl: 'dialog-edit-training-group.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditTrainingGroup {

  coaches: Coach[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditTrainingGroup>,
    @Inject(MAT_DIALOG_DATA) public data: TrainingGroup) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getCoachList().subscribe(
      coaches => this.coaches = coaches
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditTrainingGroup(trainingGroupId) {
    // tslint:disable-next-line:ban-types
    this.dataService.updateTrainingGroup(this.data as TrainingGroup, trainingGroupId as Number).subscribe();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE SUPPRIMER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-delete-training-group',
  templateUrl: 'dialog-delete-training-group.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogDeleteTrainingGroup {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogDeleteTrainingGroup>,
    @Inject(MAT_DIALOG_DATA) public data: TrainingGroup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRemoveTrainingGroup(trainingGroupId) {
    this.dataService.deleteTrainingGroup(trainingGroupId).subscribe();
  }
}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
