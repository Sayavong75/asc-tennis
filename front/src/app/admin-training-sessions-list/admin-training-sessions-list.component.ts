import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any;

export interface SessionData {
  id: number;
  dateSession: string;
  timeSession: string;
  placeSession: string;
  registrationStatus: string;
  finalListStatus: string;
  groupName: string;
  trainerIsPresent: boolean;
  activate: boolean;
}

const ELEMENT_DATA: SessionData[] = [
  {
    id: 1,
    dateSession: 'Lundi 4 mai 2020',
    timeSession: '20h30',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 02/05/2020',
    groupName: 'Lundi Niv. 1',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 2,
    dateSession: 'Lundi 4 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 02/05/2020',
    groupName: 'Lundi Niv. 4',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 3,
    dateSession: 'Mardi 5 mai 2020',
    timeSession: '20h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 03/05/2020',
    groupName: 'Mardi Niv. 2',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 4,
    dateSession: 'Jeudi 7 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 06/05/2020',
    groupName: 'Jeudi Niv. 3',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 5,
    dateSession: 'Lundi 11 mai 2020',
    timeSession: '20h30',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 09/05/2020',
    groupName: 'Lundi Niv. 1',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 6,
    dateSession: 'Lundi 11 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 09/05/2020',
    groupName: 'Lundi Niv. 4',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 7,
    dateSession: 'Mardi 12 mai 2020',
    timeSession: '20h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 10/05/2020',
    groupName: 'Mardi Niv. 2',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 8,
    dateSession: 'Jeudi 14 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 13/05/2020',
    groupName: 'Jeudi Niv. 3',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 9,
    dateSession: 'Lundi 18 mai 2020',
    timeSession: '20h30',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 16/05/2020',
    groupName: 'Lundi Niv. 1',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 10,
    dateSession: 'Lundi 18 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 16/05/2020',
    groupName: 'Lundi Niv. 4',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 11,
    dateSession: 'Mardi 19 mai 2020',
    timeSession: '20h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 17/05/2020',
    groupName: 'Mardi Niv. 2',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 12,
    dateSession: 'Jeudi 21 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 20/05/2020',
    groupName: 'Jeudi Niv. 3',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 13,
    dateSession: 'Lundi 25 mai 2020',
    timeSession: '20h30',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 23/05/2020',
    groupName: 'Lundi Niv. 1',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 14,
    dateSession: 'Lundi 25 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 23/05/2020',
    groupName: 'Lundi Niv. 4',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 15,
    dateSession: 'Mardi 26 mai 2020',
    timeSession: '20h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 24/05/2020',
    groupName: 'Mardi Niv. 2',
    trainerIsPresent: true,
    activate: true
  },
  {
    id: 16,
    dateSession: 'Jeudi 28 mai 2020',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    registrationStatus: 'Inscriptions ouvertes',
    finalListStatus: 'Liste finale le 27/05/2020',
    groupName: 'Jeudi Niv. 3',
    trainerIsPresent: true,
    activate: true
  }
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-training-sessions-list',
  templateUrl: './admin-training-sessions-list.component.html',
  styleUrls: ['./admin-training-sessions-list.component.css']
})
export class AdminTrainingSessionsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dateSession', 'registrationStatus', 'groupName', 'trainerIsPresent', 'activate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  value;
  toggle = false;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Fonction pour remise à zéro du formulaire lors du clic sur le bouton Annuler
    // tslint:disable-next-line:only-arrow-functions
    // $('[data-dismiss=modal]').on('click', function(e) {
    //   // tslint:disable-next-line:one-variable-per-declaration
    //   const $t = $(this),
    //     // tslint:disable-next-line:prefer-const
    //     target = $t[0].href || $t.data('target') || $t.parents('.modal') || [];
    //
    //   $(target)
    //     .find('input,textarea,select')
    //     .val('')
    //     .end()
    //     .find('input[type=checkbox], input[type=radio]')
    //     .prop('checked', '')
    //     .end();
    // });
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

  // Activation ou désactivation de la présence de l'entraîneur
  toggleTrainerIsPresent(element): void{
    element.trainerIsPresent = !element.trainerIsPresent;
  }

  // Affichage du message si une session d'entraînement est activée / désactivée
  updateActiveStatus(element) {
    element.activate = !element.activate;
  }

}
