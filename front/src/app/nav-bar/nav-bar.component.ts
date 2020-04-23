import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { NavAdminService} from '../nav-admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isAdmin = false;

  constructor(
    public nav: NavBarService,
    private navAdminService: NavAdminService
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line:triple-equals
    if (this.navAdminService.subsVar == undefined) {
      this.navAdminService.subsVar = this.navAdminService.
        invokeAdminFunction.subscribe(() => {
        this.showAdminFunction();
        console.log('show admin');
      });
    }
  }
  // Fonction pour masquer la barre de navigation
  hideNavBar() {
    console.log('hide navbar');
    this.hideAdminFunction();
    this.nav.hide();
  }
  // Fonction pour afficher le menu Admin dans la nav-bar
  showAdminFunction(): void {
    this.isAdmin = true;
  }
  // Fonction pour masquer le menu Admin dans la nav-bar
  hideAdminFunction(): void {
    this.isAdmin = false;
  }

}
