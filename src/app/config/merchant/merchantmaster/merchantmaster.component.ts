import {Component, Input, OnInit } from '@angular/core';
import {TabService} from '../../tabs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'merchant-master',
  templateUrl: './merchantmaster.component.html',
  styleUrls: ['./merchantmaster.component.css']
})
export class MerchantmasterComponent implements OnInit {
  @Input() merchantBind: FormGroup;
  @Input() merchantControls;
  @Input() tabs: TabService;
  constructor() { }

  ngOnInit() {
  }

}
