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
  dataSource: MatTableDataSource<Player>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchPosts().subscribe(players => {
      this.dataSource = new MatTableDataSource(players);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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

}

/** Copyright 2019 Google LLC. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at http://angular.io/license */
