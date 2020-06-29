import {Component, OnInit} from '@angular/core';

// tslint:disable-next-line:class-name
export interface referentialElement {
  management: string;
  routerLinkUrl1: string;
  action: string;
}

const ELEMENT_DATA: referentialElement[] = [
  {management: 'Utilisateur', routerLinkUrl1: '/admin-users-list', action: ''},
  {management: 'Adhérent', routerLinkUrl1: '/admin-members-list', action: ''},
  {management: 'Classement', routerLinkUrl1: '/admin-ranking-list', action: ''},
  {management: 'Groupe Semaine', routerLinkUrl1: '/admin-weekly-group-list', action: ''},
  {management: 'Entraîneur', routerLinkUrl1: '/admin-coaches-list', action: ''},
  {management: 'Club', routerLinkUrl1: '/admin-clubs-list', action: ''},
  {management: 'Session d\'entraînement', routerLinkUrl1: '/admin-training-sessions-list', action: ''},
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['management', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
  }

}
