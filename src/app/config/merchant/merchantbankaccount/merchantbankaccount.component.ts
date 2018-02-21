import {Component, Input, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'merchant-bankaccount',
  templateUrl: './merchantbankaccount.component.html',
  styleUrls: ['./merchantbankaccount.component.css']
})
export class MerchantbankaccountComponent implements OnInit {
  @Input() merchantBind: FormGroup;
  @Input() merchantControls;
  constructor() { }

  ngOnInit() {

  }

}
