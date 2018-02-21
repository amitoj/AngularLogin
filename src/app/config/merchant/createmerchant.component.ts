/**
 * Created by Rama Krishna on 5/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CountrycurrencymasterComponent} from './countrycurrencymaster/countrycurrencymaster.component';
import {MerchantbankaccountComponent} from './merchantbankaccount/merchantbankaccount.component';
import {MerchantcategorycodemasterComponent} from './merchantcategorycodemaster/merchantcategorycodemaster.component';
import {MerchantmasterComponent} from './merchantmaster/merchantmaster.component';
import {MerchantpaymodeComponent} from './merchantpaymode/merchantpaymode.component';
import { TabService } from '../tabs';

import {Merchant} from './merchant';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthUserService} from '../../services/auth-user.service';


@Component({
  templateUrl: './add.merchant.html',
  providers: [TabService]
})

export class CreateMerchantComponent implements OnInit {
  merchant: Merchant = new Merchant();
  merchantData = new FormGroup({
    systemId: new FormControl(),
    merchantId: new FormControl(),
    accountType: new FormControl(),
    accountName: new FormControl(),
    accountNumber: new FormControl,
    bankName: new FormControl(),
    branchName: new FormControl(),
    branchCode: new FormControl(),
    IFSCCode: new FormControl(),
    customerID: new FormControl(),
    UPIAddress: new FormControl(),
    MCC: new FormControl(),
    description: new FormControl(),
    status: new FormControl(),
    countyCode: new FormControl(),
    countryCurrency: new FormControl(),
    bussinessDesciption: new FormControl(),
    merchantType: new FormControl(),
    settlementCurrency: new FormControl(),
    participantID: new FormControl(),
    assignCommissionID: new FormControl(),
    cardsAllowedFlag: new FormControl(),
    surchargeAmount: new FormControl(),
    surchargeFlag: new FormControl(),
    DCCFlag: new FormControl(),
    paymentHoldReleaseFlag: new FormControl(),
    portalAccess: new FormControl(),
    reportFlag: new FormControl(),
    payment: new FormControl()
  });
  tabService = new TabService();
  constructor(private __authService: AuthUserService, private __routerProvide: Router ) { }
  ngOnInit() {
    this.__authService.isLogged().then((result: boolean) => {
      if (!result) {
        this.__routerProvide.navigate(['/login']);
      }
    });
  }
  onSubmit() {
    console.log(this.merchantData.value);
  }
}
export const merchantComponents = [ CountrycurrencymasterComponent, MerchantbankaccountComponent, MerchantcategorycodemasterComponent,
MerchantmasterComponent, MerchantpaymodeComponent ];
