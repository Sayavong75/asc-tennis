import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AuthenticationService} from '../service/authentication.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  currentUser: string;

  constructor(private breakpointObserver: BreakpointObserver, private loginService: AuthenticationService) {
  }

  ngOnInit(): void {
    // Fonction pour masquer l'image Snoopy'
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      $('#photo_snoopy').click(function() {
        $(this).hide();
      });
    });
    this.currentUser = this.loginService.getCurrentUser();
    // tslint:disable-next-line:no-shadowed-variable
    // @ts-ignore
    const moment = require('moment');
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  }


}
