import {Component, OnInit} from '@angular/core';

import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthenticationService} from '../service/authentication.service';
import {Player} from '../model/player';
import {DataService} from '../service/data.service';

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
  players: Player[];

  constructor(
    private breakpointObserver: BreakpointObserver, private loginService: AuthenticationService, private dataService: DataService
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
        // this.currentUser = this.currentUser.replace(/\"/g, '');
      }
    });
    this.dataService.getPlayerList().subscribe(players => {
      this.players = players;
    });
  }

  logOut() {
    this.loginService.logOut();
  }

  getPlayerByUsername(usernameLogin) {
    for (const player of this.players) {
      if (player.appUser.username === usernameLogin) {
        sessionStorage.setItem('CURRENT_PLAYER_FIRSTNAME', player.firstName);
        return player.firstName;
      }
    }
  }
}
