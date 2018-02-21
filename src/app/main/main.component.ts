
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthUserService} from '../services/auth-user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  date;
  selectedValue = null;
  languages = [
    { code: 'en', label: 'English'},
    { code: 'hi', label: 'Hindi'},
  ];
  constructor(private __authService: AuthUserService, private __routerProvide: Router ) {
    this.date = new Date();
  }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (!result) {
        this.__routerProvide.navigate(['/login']);
      }
    });
  }
  logout() {
    sessionStorage.removeItem('User');
    this.__routerProvide.navigate(['/login']);
  }
}
