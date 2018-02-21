import {Component, Input, OnInit } from '@angular/core';
import {TabService} from '../../tabs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'merchant-paymode',
  templateUrl: './merchantpaymode.component.html',
  styleUrls: ['./merchantpaymode.component.css']
})
export class MerchantpaymodeComponent implements OnInit {
  @Input() merchantBind: FormGroup;
  @Input() merchantControls;
  @Input() tabs: TabService;
  constructor() { }

  ngOnInit() {
  }

}
