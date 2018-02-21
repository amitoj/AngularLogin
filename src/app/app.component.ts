import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { HideService } from './services/hide.service';
import { AuthUserService } from './services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AuthUserService, HideService ]
})
export class AppComponent {}
