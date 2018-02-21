import { Component, OnInit } from '@angular/core';
import {HideService} from '../services/hide.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthUserService } from '../services/auth-user.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword;
  error = null;
  i = 0;
  key = 129;
  encrypt = '';
  loginForm: FormGroup;
  constructor(private __authService: AuthUserService,
              private __hidePwd: HideService,
              private __routerProvide: Router,
              private __formBuilder: FormBuilder) { }

  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (result) {
        this.__routerProvide.navigate(['']);
      }
    });

    this.hidePassword = this.__hidePwd;
    this.loginForm = this.__formBuilder.group({
      username : ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]],
      password : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(15),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$^*])[A-Za-z0-9$!@#$^*]{8,15}') ]]
    });
  }
  onSubmit() {
    const user: User = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value
    };
    this.__authService.login(user).then((result: boolean) => {
      if (result) {
        if (typeof (Storage) !== 'undefined') {
          sessionStorage.setItem('User', user.username.toString());
          this.__authService.date = this.__authService.getDate();
        }
        this.__routerProvide.navigate(['']);
      }else {
        this.error = 'Login Failed. Try again';
      }
    });
  }
}
