import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public nav: NavBarService ) { }

  displayNavBar() {
    console.log('display navbar');
    this.nav.show();
    // this.nav.hide();
  }

  hideNavBar() {
    console.log('hide navbar');
    this.nav.hide();
  }

  ngOnInit(): void {
  }

}
