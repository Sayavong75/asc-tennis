import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( public nav: NavBarService ) { }

  hideNavBar() {
    console.log('hide navbar');
    this.nav.hide();
  }
  ngOnInit(): void {
  }

}
