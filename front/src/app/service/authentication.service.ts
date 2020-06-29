import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {JsonWebToken} from '../model/jwt';
import * as jwt_decode from 'jwt-decode';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userRoles: BehaviorSubject<string[]> = new BehaviorSubject([]);
  currentUser: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUserRoles();
  }

  public get loggedIn(): boolean {
    return sessionStorage.getItem(environment.accessToken) !== null;
  }

  logIn(user: User) {
    // console.log('Data: ' + JSON.stringify(user));
    this.httpClient.post<JsonWebToken>(environment.apiUrl + 'users/sign-in', user).subscribe(
      token => {
        sessionStorage.setItem(environment.accessToken, token.token);

        // store user details in session storage to keep user logged in between page refreshes
        this.currentUser = JSON.stringify(user.username);
        this.currentUser = this.currentUser.replace(/\"/g, '');
        sessionStorage.setItem('current_user', this.currentUser);

        this.getUserRoles();

        this.router.navigate(['/home']);
      },
      error => window.alert('Username or password is incorrect'));
  }

  logOut() {
    sessionStorage.removeItem(environment.accessToken);
    sessionStorage.removeItem('current_user');

    this.userRoles.next([]);
    this.router.navigate(['login']);
  }

  private getUserRoles() {
    // console.log('environnement : ' + sessionStorage.getItem(environment.accessToken));
    // console.log('decode environnement : ' + JSON.stringify(jwt_decode(sessionStorage.getItem(environment.accessToken))));
    if (sessionStorage.getItem(environment.accessToken)) {
      const decodedToken = jwt_decode(sessionStorage.getItem(environment.accessToken));
      const authorities: Array<any> = decodedToken.auth;
      this.userRoles.next(authorities.map(authority => authority.authority));
    }
  }

  public getToken(): string {
    return sessionStorage.getItem(environment.accessToken);
  }

  public getCurrentUser(): string {
    return sessionStorage.getItem('current_user');
  }
}
