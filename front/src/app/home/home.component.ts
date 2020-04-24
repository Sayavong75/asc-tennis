import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Fonction pour masquer l'image Snoopy'
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function(){
      $('#photo_snoopy').click(function(){
        $(this).hide();
      });
    });
  }

}
