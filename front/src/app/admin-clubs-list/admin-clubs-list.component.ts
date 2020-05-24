import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../service/data.service';
import {Club} from '../model/club';

declare var $: any;

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

  // Ajouter un entraîneur
  addClubForm() {
    const dialogRef = this.dialog.open(DialogAddClub, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

  // Modifier les données d'un entraîneur
  editClubForm(club) {
    const dialogRef = this.dialog.open(DialogEditClub, {
      width: '465px',
      data: club,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.club = club;
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-club',
  templateUrl: 'dialog-add-club.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddClub {

  club = new Club();

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddClub>,
    @Inject(MAT_DIALOG_DATA) public data: Club) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.club.statusIsActive = true;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddClub() {
    console.log('Data: ' + JSON.stringify(this.club));
    this.dataService.addClub(this.club).subscribe();
    this.dialogRef.close();
  }
}

// BOITE DE DIALOGUE POUR FORMULAIRE MODIFIER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-edit-club',
  templateUrl: 'dialog-edit-club.html'
})
// tslint:disable-next-line:component-class-suffix
export class DialogEditClub {

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogEditClub>,
    @Inject(MAT_DIALOG_DATA) public data: Club) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEditClub(clubId) {
    // tslint:disable-next-line:ban-types
    console.log('Data: ' + JSON.stringify(this.data));
    // tslint:disable-next-line:ban-types
    this.dataService.updateClub(this.data as Club, clubId as Number).subscribe();
  }
}
