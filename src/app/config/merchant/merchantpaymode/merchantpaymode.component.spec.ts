import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantpaymodeComponent } from './merchantpaymode.component';

describe('MerchantpaymodeComponent', () => {
  let component: MerchantpaymodeComponent;
  let fixture: ComponentFixture<MerchantpaymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantpaymodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantpaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
