import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../service/data.service';
import {Coach} from '../model/coach';

declare var $: any;

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-coaches-list',
  templateUrl: './admin-coaches-list.component.html',
  styleUrls: ['./admin-coaches-list.component.css']
})
export class AdminCoachesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'status', 'action'];
  dataSource: MatTableDataSource<Coach>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  coach;
  coaches: Coach[];

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
    this.dataService.getCoachList().subscribe(coaches => {
      this.dataSource = new MatTableDataSource(coaches);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.coaches = coaches;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

  // Ajouter un entraîneur
  addCoachForm() {
    const dialogRef = this.dialog.open(DialogAddCoach, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier les données d'un entraîneur
  editCoachForm(coach) {
    const dialogRef = this.dialog.open(DialogEditCoach, {
      width: '465px',
      data: coach,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.coach = coach;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-coach',
  templateUrl: 'dialog-add-coach.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddCoach {

  coach = new Coach();

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddCoach>,
    @Inject(MAT_DIALOG_DATA) public data: Coach) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.coach.statusIsActive = true;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddCoach() {
    console.log('Data: ' + JSON.stringify(this.coach));
    this.dataService.addCoach(this.coach).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-coach',
  templateUrl: 'dialog-edit-coach.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditCoach {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditCoach>,
    @Inject(MAT_DIALOG_DATA) public data: Coach) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditCoach(coachId) {
    // tslint:disable-next-line:ban-types
    console.log('Data: ' + JSON.stringify(this.data));
    // tslint:disable-next-line:ban-types
    this.dataService.updateCoach(this.data as Coach, coachId as Number).subscribe();
  }
}
