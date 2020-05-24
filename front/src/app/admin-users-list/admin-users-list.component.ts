import {Component, Inject, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

import {DataService} from '../service/data.service';
import {User} from '../model/user';
import {Role} from '../model/role';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'role', 'action'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  userList: User[] = [];

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
    this.dataService.getUserList().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.userList = users;
      this.dataSource.filter = '';
      this.value = '';
    });
  }

  // Ajouter un classement
  addUserForm() {
    const dialogRef = this.dialog.open(DialogAddUser, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.refreshTable();
    });
  }

}

// BOITE DE DIALOGUE POUR FORMULAIRE AJOUTER
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-add-user',
  templateUrl: 'dialog-add-user.html'
})

// tslint:disable-next-line:component-class-suffix
export class DialogAddUser {

  user = new User();
  roles: Role[];
  roleData = ['NO_ROLE', 'ROLE_ADMIN', 'ROLE_READER'];

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<DialogAddUser>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onAddUser() {
    console.log('Data: ' + JSON.stringify(this.user));
    this.dataService.addUser(this.user).subscribe();
    this.dialogRef.close();
  }
}

