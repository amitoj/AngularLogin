/**
 * Created by Rama Krishna on 5/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import {AuthUserService} from '../services/auth-user.service';
import {Router} from '@angular/router';
import {UserData} from '../model/user.data.model';
import {User} from '../model/user.model';

@Component({
  templateUrl: './about.html'
})

export class AboutComponent implements OnInit {
  userData: UserData;
  constructor(private __authService: AuthUserService, private __routerProvide: Router ) {
    const user: User = {
      username: 'ramakrishna.gaddam',
      password: 'Ram@1432'
    };
    this.__authService.userData(user).then((result: any) => {
      this.userData = result;
    });
  }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (!result) {
        this.__routerProvide.navigate(['/login']);
      }
    });
  }
}
