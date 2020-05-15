import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare var $: any;

import { DataService} from '../service/data.service';
import { Player } from '../model/player';
import { Ranking } from '../model/ranking';
import { TrainingGroup } from '../model/trainingGroup';
import {Coach} from '../model/coach';
import {DialogAddCoach} from '../admin-coaches-list/admin-coaches-list.component';

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
    this.dataService.getPlayerList().subscribe(players => {
      this.dataSource = new MatTableDataSource(players);
      this.dataSource.paginator = this.paginator;
      this.sort.sort(({ id: 'id', start: 'asc'}) as MatSortable);
      this.dataSource.sort = this.sort;
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

  refreshTable() {
    this.dataService.getPlayerList().subscribe(players => {
      this.dataSource = new MatTableDataSource(players);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.players = players;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

  // Ajouter un adhérent
  addPlayerForm() {
    const dialogRef = this.dialog.open(DialogAddMember, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier un profil adhérent
  editPlayerForm(player) {
    const dialogRef = this.dialog.open(DialogEditMember, {
      width: '465px',
      data: player,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.player = player;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-member',
  templateUrl: 'dialog-add-member.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddMember {

  player = new Player();
  rankings: Ranking[];
  trainingGroups: TrainingGroup[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddMember>,
    @Inject(MAT_DIALOG_DATA) public data: Player) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.player.statusIsActive = true;
    this.player.generalAlertOn = true;
    this.player.playerAlertOn = false;
    this.dataService.getRankingList().subscribe(
      rankings => this.rankings = rankings
    );
    this.dataService.getTrainingGroupList().subscribe(
      trainingGroups => this.trainingGroups = trainingGroups
    );
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddPlayer() {
    console.log('Data: ' + JSON.stringify(this.player));
    this.dataService.addPlayer(this.player).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-member',
  templateUrl: 'dialog-edit-member.html'
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

  onEditPlayer(playerId) {
    // tslint:disable-next-line:ban-types
    console.log('Data: ' + JSON.stringify(this.data));
    // tslint:disable-next-line:ban-types
    this.dataService.updatePlayer(this.data as Player, playerId as Number).subscribe();
  }
}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
