import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
declare var $: any;

import { DataService } from '../service/data.service';
import {TrainingDay} from '../model/trainingDay';
import {Coach} from '../model/coach';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-training-sessions-list',
  templateUrl: './admin-training-session-list.component.html',
  styleUrls: ['./admin-training-session-list.component.css']
})
export class AdminTrainingSessionListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'day', 'startTime', 'club', 'group', 'status', 'action'];
  dataSource: MatTableDataSource<TrainingDay>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  trainingDay;
  trainingDays: TrainingDay[];
  // toggle = false;

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
    this.dataService.getTrainingDayList().subscribe(trainingDays => {
      this.dataSource = new MatTableDataSource(trainingDays);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.trainingDays = trainingDays;
      this.dataSource.filter = '';
      this.value = '';
    });
  }
}
