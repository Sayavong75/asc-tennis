import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-sessions-list',
  templateUrl: './training-sessions-list.component.html',
  styleUrls: ['./training-sessions-list.component.css']
})
export class TrainingSessionsListComponent implements OnInit {

  constructor() { }
  // Fonction pour modifier le bouton S'incrire/Se désinscrire : couleur et libellé'
    // Valeurs par défaut
    toggle = true;
    status = 'S\'incrire';

    registerRule() {
      this.toggle = !this.toggle;
      // Condition avec opérateur ternaire pour modifier le libellé du bouton (status)
      this.status = this.toggle ? 'S\'incrire' : 'Se désinscire';
    }
  ngOnInit(): void {
  }

}
