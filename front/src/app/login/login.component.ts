import {Component, OnInit} from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import {User} from '../model/user';

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
    private loginService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = new User();
    user.username = this.loginForm.value.username;
    user.password = this.loginForm.value.password;
    this.loginService.logIn(user);
  }
}
