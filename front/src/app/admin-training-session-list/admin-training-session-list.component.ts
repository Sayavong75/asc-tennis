import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var $: any;

export interface SessionData {
  id: number;
  daySession: string;
  timeSession: string;
  placeSession: string;
  urlGoogleMaps: string;
  groupName: string;
}

const ELEMENT_DATA: SessionData[] = [
  {
    id: 1,
    daySession: 'Lundi',
    timeSession: '20h30',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    urlGoogleMaps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1250209993004!2d2.160267815674944!3d48.87489317928904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f27fbfcf0a06f68!2sComit%C3%A9%20des%20Hauts%20de%20Seine%20de%20Tennis!5e0!3m2!1sfr!2sfr!4v1588084817667!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    groupName: 'Lundi Niv. 1'
  },
  {
    id: 2,
    daySession: 'Lundi',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    urlGoogleMaps: '',
    groupName: 'Lundi Niv. 4'
  },
  {
    id: 3,
    daySession: 'Mardi',
    timeSession: '20h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    urlGoogleMaps: '',
    groupName: 'Mardi Niv. 2'
  },
  {
    id: 4,
    daySession: 'Jeudi',
    timeSession: '21h00',
    placeSession: 'Comité des Hauts de Seine de Tennis',
    urlGoogleMaps: '',
    groupName: 'Jeudi Niv. 3',
  }
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-admin-training-sessions-list',
  templateUrl: './admin-training-session-list.component.html',
  styleUrls: ['./admin-training-session-list.component.css']
})
export class AdminTrainingSessionListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'daySession', 'timeSession', 'placeSession', 'groupName', 'action'];
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

}
