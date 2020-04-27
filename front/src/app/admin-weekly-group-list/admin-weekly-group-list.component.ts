import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface GroupData {
  id: string;
  groupName: string;
  action: '';
}

const ELEMENT_DATA: GroupData[] = [
  {id: '1', groupName: '-- En attente d\'affectation --', action: ''},
  {id: '2', groupName: 'Lundi', action: ''},
  {id: '3', groupName: 'Mardi', action: ''},
  {id: '4', groupName: 'Jeudi', action: ''}
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-weekly-group-list',
  templateUrl: './admin-weekly-group-list.component.html',
  styleUrls: ['./admin-weekly-group-list.component.css']
})
export class AdminWeeklyGroupListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'groupName', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
