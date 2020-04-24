import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule } from '@angular/cdk/table';

import { MatTable } from '@angular/material/table';
import { MatTabHeader } from '@angular/material/tabs';
import { MatHeaderRow } from '@angular/material/table';
import { MatHeaderCell } from '@angular/material/table';
import { MatHeaderCellDef } from '@angular/material/table';
import { MatHeaderRowDef } from '@angular/material/table';
import { MatSortHeader } from '@angular/material/sort';
import { MatRow } from '@angular/material/table';
import { MatRowDef } from '@angular/material/table';
import { MatCell } from '@angular/material/table';
import { MatCellDef } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-members-list',
  templateUrl: './admin-members-list.component.html',
  styleUrls: ['./admin-members-list.component.css']
})
export class AdminMembersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // myDataArray;
  // columnsToDisplay = ['lastname'];
  // members = [
  //   {
  //     id: '1',
  //     lastname: 'Wick',
  //     firstname: 'John',
  //     login: 'jwick',
  //     group: 'Lundi',
  //     status: 'Actif'
  //   },
  //   {
  //     id: '2',
  //     lastname: 'Bonisseur de La Bath',
  //     firstname: 'Hubert',
  //     login: 'hbonisseurdelabath',
  //     group: 'Mardi',
  //     status: 'Actif'
  //   },
  //   {
  //     id: '3',
  //     lastname: 'La Menace',
  //     firstname: 'Max',
  //     login: 'mlamenace',
  //     group: 'Jeudi',
  //     status: 'Actif'
  //   },
  //   {
  //     id: '4',
  //     lastname: 'Croft',
  //     firstname: 'Lara',
  //     login: 'lcroft',
  //     group: 'Mardi',
  //     status: 'Inactif'
  //   },
  //   {
  //     id: '5',
  //     lastname: 'Anderson',
  //     firstname: 'Thomas',
  //     login: 'tanderson',
  //     group: 'Lundi',
  //     status: 'Actif'
  //   }
  // ];
  //
  // elements: any = [];
  // headElements = ['id', 'nom', 'prénom', 'login', 'groupe semaine', 'statut', 'action'];

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  // sort(colName) {
  //   this.elements.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  // }

  // ngOnInit() {
  //   for (let i = 1; i <= 15; i++) {
  //     this.elements.push({ id: i});
  //   }
  // }

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
}

  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
