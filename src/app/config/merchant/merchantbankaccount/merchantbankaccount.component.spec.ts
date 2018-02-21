import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantbankaccountComponent } from './merchantbankaccount.component';

describe('MerchantbankaccountComponent', () => {
  let component: MerchantbankaccountComponent;
  let fixture: ComponentFixture<MerchantbankaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantbankaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantbankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
