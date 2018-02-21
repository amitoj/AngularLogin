/**
 * Created by Rama Krishna on 5/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthUserService} from '../services/auth-user.service';

@Component({
  templateUrl: './config.html',
  styleUrls: ['./config.css']
})

export class ConfigComponent implements OnInit {
  constructor( private __authService: AuthUserService, private __routerProvide: Router ) { }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (!result) {
        this.__routerProvide.navigate(['/login']);
      }
    });
  }
}
