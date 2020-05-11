import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any;

import { DataService} from '../service/data.service';
import { Player } from '../model/player';

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
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  playerList: Player[] = [];
  dataSource = new MatTableDataSource(this.playerList);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.dataService.getPlayerList().subscribe(players => this.playerList = players);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Fonction pour remise à zéro du formulaire lors du clic sur le bouton Annuler
    // tslint:disable-next-line:only-arrow-functions
    // $('[data-dismiss=modal]').on('click', function(e) {
    //   // tslint:disable-next-line:one-variable-per-declaration
    //   const $t = $(this),
    //     // tslint:disable-next-line:prefer-const
    //     target = $t[0].href || $t.data('target') || $t.parents('.modal') || [];
    //
    //   $(target)
    //     .find('input,textarea,select')
    //     .val('')
    //     .end()
    //     .find('input[type=checkbox], input[type=radio]')
    //     .prop('checked', '')
    //     .end();
    // });
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
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource = new MatTableDataSource(this.playerList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.value = '';
  }

}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
