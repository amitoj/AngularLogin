import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthUserService} from '../services/auth-user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private __authService: AuthUserService, private __routerProvide: Router ) { }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (result) {
        this.__routerProvide.navigate(['']);
      }
    });
  }

}
