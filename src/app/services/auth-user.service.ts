import { Injectable, Attribute } from '@angular/core';
import { User } from '../model/user.model';
import { UserData } from '../model/user.data.model';
import { USER } from '../mock-data/user.mock.data';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthUserService {
  date;
  userDetails: UserData;
  loginState;
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  login(user: User): Promise<boolean> {
    if (user.username === USER.username && user.password === USER.password) {
      return Promise.resolve(true);
    }else {
      return Promise.resolve(false);
    }
  }
  /*login(user: User): Promise<boolean> {
    console.log('entered');
    this.http.get('http://localhost:8080/rest/user?username=ramakrishna.gaddam&password=Ram@1432', this.options)
      .map(
        (response) => response.json()
      )
      .subscribe(
        (data) => {
          const result = data;
          console.log(result);
          if (result.get('loginStatus')) {
            this.loginState = true;
          }else {
            this.loginState = false;
          }
        }
    );
    return Promise.resolve(this.loginState);
  }*/
  userData(user: User): Promise<any> {
    return this.http.get('http://localhost:8080/rest/user?username=ramakrishna.gaddam&password=Ram@1432', this.options)
      .toPromise().then(response => response.json()).then(response => this.userDetails = response);
  }
  getDate() {
    return Promise.resolve(new Date());
  }
  isLogged(): Promise<boolean> {
    if (typeof (Storage) !== 'undefined') {
      if (sessionStorage.getItem('User')) {
        return Promise.resolve(true);
      }
    }
    return Promise.resolve(false);
  }

}
