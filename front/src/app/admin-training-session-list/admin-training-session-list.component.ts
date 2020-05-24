import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../service/data.service';
import {TrainingDay} from '../model/trainingDay';
import {Club} from '../model/club';
import {TrainingGroup} from '../model/trainingGroup';

declare var $: any;

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

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.refreshTable();
    this.sort.sort(({id: 'id', start: 'asc'}) as MatSortable);
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

  // Ajouter un groupe hebdo
  addTrainingDayForm() {
    const dialogRef = this.dialog.open(DialogAddTrainingDay, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier les données d'un groupe hebdo
  editTrainingDayForm(trainingDay) {
    const dialogRef = this.dialog.open(DialogEditTrainingDay, {
      width: '465px',
      data: trainingDay,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.trainingDay = trainingDay;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }
}


// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-training-day',
  templateUrl: 'dialog-add-training-day.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddTrainingDay {

  trainingDay = new TrainingDay();
  clubs: Club[];
  trainingGroups: TrainingGroup[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddTrainingDay>,
    @Inject(MAT_DIALOG_DATA) public data: TrainingDay) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.trainingDay.statusIsActive = true;
    this.dataService.getClubList().subscribe(
      clubs => this.clubs = clubs
    );
    this.dataService.getTrainingGroupList().subscribe(
      trainingGroups => this.trainingGroups = trainingGroups
    );
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddTrainingDay() {
    console.log('Data: ' + JSON.stringify(this.trainingDay));
    this.dataService.addTrainingDay(this.trainingDay).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-training-day',
  templateUrl: 'dialog-edit-training-day.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditTrainingDay {

  clubs: Club[];
  trainingGroups: TrainingGroup[];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditTrainingDay>,
    @Inject(MAT_DIALOG_DATA) public data: TrainingDay) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getClubList().subscribe(
      clubs => this.clubs = clubs
    );
    this.dataService.getTrainingGroupList().subscribe(
      trainingGroups => this.trainingGroups = trainingGroups
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditTrainingDay(trainingDayId) {
    // tslint:disable-next-line:ban-types
    console.log('Data: ' + JSON.stringify(this.data));
    // tslint:disable-next-line:ban-types
    this.dataService.updateTrainingDay(this.data as TrainingDay, trainingDayId as Number).subscribe();
  }
}
