import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare var $: any;

import { DataService} from '../service/data.service';
import { Player } from '../model/player';
import { Ranking } from '../model/ranking';
import { TrainingGroup } from '../model/trainingGroup';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-members-list',
  templateUrl: './admin-members-list.component.html',
  styleUrls: ['./admin-members-list.component.css']
})
export class AdminMembersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'login', 'group', 'status', 'action'];
  dataSource: MatTableDataSource<Player>;

  value;
  player;
  ranking;
  players: Player[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataService.fetchPosts().subscribe(players => {
      this.dataSource = new MatTableDataSource(players);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.players = players;
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
    this.dataSource.filter = '';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.value = '';
  }

  // Modifier un profil Utilisateur
  editPlayer(player) {
    const dialogRef = this.dialog.open(DialogEditMember, {
      width: '465px',
      data: player,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.player = player;
    });
  }

}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-member',
  templateUrl: 'dialog-edit-member.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditMember {
  // Data pour test listbox
  // emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
  // choosenEmoji: string;

  rankings: Ranking[];
  trainingGroups: TrainingGroup[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditMember>,
    @Inject(MAT_DIALOG_DATA) public data: Player) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getRankingList().subscribe(
      rankings => this.rankings = rankings
    );
    this.dataService.getTrainingGroupList().subscribe(
      trainingGroups => this.trainingGroups = trainingGroups
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
