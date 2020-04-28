import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any;

export interface RankData {
  id: string;
  rankName: string;
  action: '';
}

const ELEMENT_DATA: RankData[] = [
  {id: '1', rankName: 'NC', action: ''},
  {id: '2', rankName: '40', action: ''},
  {id: '3', rankName: '30/5', action: ''},
  {id: '4', rankName: '30/4', action: ''},
  {id: '5', rankName: '30/3', action: ''},
  {id: '6', rankName: '30/2', action: ''},
  {id: '7', rankName: '30/1', action: ''},
  {id: '8', rankName: '30', action: ''},
  {id: '9', rankName: '15/5', action: ''},
  {id: '10', rankName: '15/4', action: ''},
  {id: '11', rankName: '15/3', action: ''},
  {id: '12', rankName: '15/2', action: ''},
  {id: '13', rankName: '15/1', action: ''},
  {id: '14', rankName: '15', action: ''},
  {id: '15', rankName: '5/6', action: ''},
  {id: '16', rankName: '4/6', action: ''},
  {id: '17', rankName: '3/6', action: ''},
  {id: '18', rankName: '2/6', action: ''},
  {id: '19', rankName: '1/6', action: ''},
  {id: '20', rankName: '0', action: ''},
  {id: '21', rankName: '-2/6', action: ''},
  {id: '21', rankName: '-4/6', action: ''},
  {id: '21', rankName: '-15', action: ''},
  {id: '22', rankName: 'Promotion', action: ''}
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-ranking-list',
  templateUrl: './admin-ranking-list.component.html',
  styleUrls: ['./admin-ranking-list.component.css']
})
export class AdminRankingListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'rankName', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Fonction pour remise à zéro du formulaire lors du clic sur le bouton Annuler
    // tslint:disable-next-line:only-arrow-functions
    $('[data-dismiss=modal]').on('click', function(e) {
      // tslint:disable-next-line:one-variable-per-declaration
      const $t = $(this),
        // tslint:disable-next-line:prefer-const
        target = $t[0].href || $t.data('target') || $t.parents('.modal') || [];

      $(target)
        .find('input,textarea,select')
        .val('')
        .end()
        .find('input[type=checkbox], input[type=radio]')
        .prop('checked', '')
        .end();
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
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.value = '';
  }

}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
