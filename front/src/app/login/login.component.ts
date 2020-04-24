import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { NavAdminService} from '../nav-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public nav: NavBarService,
    private navAdminService: NavAdminService
  ) { }

  displayNavBar() {
    console.log('display navbar');
    this.nav.show();
  }

  displayNavBarAdmin() {
    console.log('display navbarAdmin');
    this.nav.show();
    this.navAdminService.addAdminMenu();
  }

  hideNavBar() {
    console.log('hide navbar');
    this.nav.hidden();
  }

  ngOnInit(): void {
  }

}
