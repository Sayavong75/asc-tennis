import {Component, OnInit} from '@angular/core';

import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthenticationService} from '../service/authentication.service';
import {User} from '../model/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  isReader: boolean;
  isAdmin: boolean;

  currentUser: string;

  constructor(
    private breakpointObserver: BreakpointObserver, private loginService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.loginService.userRoles.subscribe(userRoles => {
      this.isLoggedIn = false;

      this.isReader = userRoles.includes('ROLE_READER');
      this.isAdmin = userRoles.includes('ROLE_ADMIN');

      if (userRoles && userRoles.length > 0) {

        this.isLoggedIn = true;

        this.currentUser = this.loginService.getCurrentUser();
        this.currentUser = this.currentUser.replace(/\"/g, "");
      }
    });
  }

  logOut() {
    this.loginService.logOut();
  }
}
