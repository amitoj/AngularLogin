import {Component, Input, OnInit } from '@angular/core';
import {TabService} from '../../tabs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'merchant-category-code-master',
  templateUrl: './merchantcategorycodemaster.component.html',
  styleUrls: ['./merchantcategorycodemaster.component.css']
})
export class MerchantcategorycodemasterComponent implements OnInit {
  @Input() merchantBind: FormGroup;
  @Input() merchantControls;
  @Input() tabs: TabService;
  constructor() { }

  ngOnInit() {
  }

}
