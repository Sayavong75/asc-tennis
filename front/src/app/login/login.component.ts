import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { NavAdminService} from '../nav-admin.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(255)])
    ]
  });

  constructor(
    private fb: FormBuilder,
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
    this.displayNavBarAdmin();
  }

  onSubmit() {}

}
