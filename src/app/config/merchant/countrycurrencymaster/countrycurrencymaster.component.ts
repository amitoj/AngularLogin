import {Component, Input, OnInit } from '@angular/core';
import {TabService} from '../../tabs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'country-currency-master',
  templateUrl: './countrycurrencymaster.component.html',
  styleUrls: ['./countrycurrencymaster.component.css']
})
export class CountrycurrencymasterComponent implements OnInit {
  @Input() merchantBind: FormGroup;
  @Input() merchantControls;
  @Input() tabs: TabService;
  constructor() { }

  ngOnInit() {
  }

}
