import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Player} from '../model/player';
import {JsonWebToken} from '../model/jwt';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userRoles: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUserRoles();
  }

  public get loggedIn(): boolean {
    return sessionStorage.getItem(environment.accessToken) !== null;
  }

  logIn(user: Player) {
    this.httpClient.post<JsonWebToken>(environment.apiUrl + 'users/sign-in', user).subscribe(
      token => {
        sessionStorage.setItem(environment.accessToken, token.token);

        this.getUserRoles();

        this.router.navigate(['']);
      },
      error => console.log('Error while login'));
  }

  logOut() {
    sessionStorage.removeItem(environment.accessToken);
    this.userRoles.next([]);
    this.router.navigate(['login']);
  }

  private getUserRoles() {
    if (sessionStorage.getItem(environment.accessToken)) {
      const decodedToken = jwt_decode(sessionStorage.getItem(environment.accessToken));
      const authorities: Array<any> = decodedToken.auth;
      this.userRoles.next(authorities.map(authority => authority.authority));
    }
  }
}
