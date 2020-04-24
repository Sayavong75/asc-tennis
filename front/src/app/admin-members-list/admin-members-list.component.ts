import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-members-list',
  templateUrl: './admin-members-list.component.html',
  styleUrls: ['./admin-members-list.component.css']
})
export class AdminMembersListComponent implements OnInit {

  members = [
    {
      id: '1',
      lastname: 'Wick',
      firstname: 'John',
      login: 'jwick',
      group: 'Lundi',
      status: 'Actif'
    },
    {
      id: '2',
      lastname: 'Bonisseur de La Bath',
      firstname: 'Hubert',
      login: 'hbonisseurdelabath',
      group: 'Mardi',
      status: 'Actif'
    },
    {
      id: '3',
      lastname: 'La Menace',
      firstname: 'Max',
      login: 'mlamenace',
      group: 'Jeudi',
      status: 'Actif'
    },
    {
      id: '4',
      lastname: 'Croft',
      firstname: 'Lara',
      login: 'lcroft',
      group: 'Mardi',
      status: 'Inactif'
    },
    {
      id: '5',
      lastname: 'Anderson',
      firstname: 'Thomas',
      login: 'tanderson',
      group: 'Lundi',
      status: 'Actif'
    }
  ];

  elements: any = [];
  headElements = ['id', 'nom', 'prénom', 'login', 'groupe semaine', 'statut', 'action'];

  constructor() { }

  sort(colName) {
    this.elements.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  }

  // ngOnInit() {
  //   for (let i = 1; i <= 15; i++) {
  //     this.elements.push({ id: i});
  //   }
  // }

  ngOnInit(): void {
  }

}
