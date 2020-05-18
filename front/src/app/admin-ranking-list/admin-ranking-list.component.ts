import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
declare var $: any;

import { DataService } from '../service/data.service';
import { Ranking } from '../model/ranking';
import { Series } from '../model/series';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-ranking-list',
  templateUrl: './admin-ranking-list.component.html',
  styleUrls: ['./admin-ranking-list.component.css']
})
export class AdminRankingListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'label', 'series', 'action'];
  dataSource: MatTableDataSource<Ranking>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  ranking;
  rankings: Ranking[];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshTable();
    this.sort.sort(({ id: 'id', start: 'asc'}) as MatSortable);
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
    this.dataService.getRankingList().subscribe(rankings => {
      this.dataSource = new MatTableDataSource(rankings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.rankings = rankings;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

  // Ajouter un classement
  addRankingForm() {
    const dialogRef = this.dialog.open(DialogAddRanking, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier les données d'un classement
  editRankingForm(ranking) {
    const dialogRef = this.dialog.open(DialogEditRanking, {
      width: '465px',
      data: ranking,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ranking = ranking;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Supprimer un classement
  deleteRankingForm(ranking) {
    const dialogRef = this.dialog.open(DialogDeleteRanking, {
      width: '465px',
      data: ranking,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ranking = ranking;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-ranking',
  templateUrl: 'dialog-add-ranking.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddRanking {

  ranking = new Ranking();
  series: Series[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddRanking>,
    @Inject(MAT_DIALOG_DATA) public data: Ranking) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getSeriesList().subscribe(
      series => this.series = series
    );
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddRanking() {
    console.log('Data: ' + JSON.stringify(this.ranking));
    this.dataService.addRanking(this.ranking).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-ranking',
  templateUrl: 'dialog-edit-ranking.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditRanking {

  series: Series[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditRanking>,
    @Inject(MAT_DIALOG_DATA) public data: Ranking) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getSeriesList().subscribe(
      series => this.series = series
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditRanking(rankingId) {
    // tslint:disable-next-line:ban-types
    this.dataService.updateRanking(this.data as Ranking, rankingId as Number).subscribe();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE SUPPRIMER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-delete-ranking',
  templateUrl: 'dialog-delete-ranking.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogDeleteRanking {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogDeleteRanking>,
    @Inject(MAT_DIALOG_DATA) public data: Ranking) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onRemoveRanking(rankingId) {
    this.dataService.deleteRanking(rankingId).subscribe(
  delRanking => console.log(delRanking),
  error => {if (error.status === 500)
        {window.alert('ERREUR\nIl existe une association classement/adhérent.\nModifier le(s) adhérent(s) avant la suppression.'); }});
  }
}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
