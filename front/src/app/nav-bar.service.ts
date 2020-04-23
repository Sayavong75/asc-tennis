import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  visible: boolean;

  // todo: regrouper fonctions relatives utilisateurs dans un user service
  constructor() { this.visible = false; }
  hide() { this.visible = false; }
  show() { this.visible = true; }
  toggle() { this.visible = !this.visible; }
}
