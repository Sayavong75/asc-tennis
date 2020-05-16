import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
declare var $: any;

import { DataService } from '../service/data.service';
import { Club } from '../model/club';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-clubs-list',
  templateUrl: './admin-clubs-list.component.html',
  styleUrls: ['./admin-clubs-list.component.css']
})
export class AdminClubsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address1', 'city', 'status', 'action'];
  dataSource: MatTableDataSource<Club>;

  value;
  club;
  clubs: Club[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

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

  refreshTable() {
    this.dataService.getClubList().subscribe(clubs => {
      this.dataSource = new MatTableDataSource(clubs);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.clubs = clubs;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

}
