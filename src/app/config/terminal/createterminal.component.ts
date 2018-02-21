/**
 * Created by Rama Krishna on 5/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import {TerminalsurchargeComponent} from './terminalsurcharge/terminalsurcharge.component';
import {TerminalmasterComponent} from './terminalmaster/terminalmaster.component';
import {TerminalriskmoduleComponent} from './terminalriskmodule/terminalriskmodule.component';
import {TerminalsupportedmodeComponent} from './terminalsupportedmode/terminalsupportedmode.component';
import {AuthUserService} from '../../services/auth-user.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './add.terminal.html'
})

export class CreateTerminalComponent implements OnInit{
  constructor(private __authService: AuthUserService, private __routerProvide: Router ) { }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (!result) {
        this.__routerProvide.navigate(['/login']);
      }
    });
  }
}
export const terminalComponents = [ TerminalmasterComponent, TerminalriskmoduleComponent, TerminalsupportedmodeComponent,
  TerminalsurchargeComponent ]
