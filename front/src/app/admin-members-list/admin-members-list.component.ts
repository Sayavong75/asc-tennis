import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  lastname: string;
  firstname: string;
  login: string;
  group: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: UserData[] = [
  {
    id: '1',
    lastname: 'Wick',
    firstname: 'John',
    login: 'jwick',
    group: 'Lundi',
    status: 'Actif',
    action: ''
  },
  {
    id: '2',
    lastname: 'Bonisseur de La Bath',
    firstname: 'Hubert',
    login: 'hbonisseurdelabath',
    group: 'Mardi',
    status: 'Actif',
    action: ''
  },
  {
    id: '3',
    lastname: 'La Menace',
    firstname: 'Max',
    login: 'mlamenace',
    group: 'Jeudi',
    status: 'Actif',
    action: ''
  },
  {
    id: '4',
    lastname: 'Croft',
    firstname: 'Lara',
    login: 'lcroft',
    group: 'Mardi',
    status: 'Inactif',
    action: ''
  },
  {
    id: '5',
    lastname: 'Anderson',
    firstname: 'Thomas',
    login: 'tanderson',
    group: 'Lundi',
    status: 'Actif',
    action: ''
  },
  {
    id: '6',
    lastname: 'Roger',
    firstname: 'Steve',
    login: 'sroger',
    group: 'Jeudi',
    status: 'Actif',
    action: ''
  }
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
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'login', 'group', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;

  constructor() {}

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
