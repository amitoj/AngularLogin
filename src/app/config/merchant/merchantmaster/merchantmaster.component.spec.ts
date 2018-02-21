import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantmasterComponent } from './merchantmaster.component';

describe('MerchantmasterComponent', () => {
  let component: MerchantmasterComponent;
  let fixture: ComponentFixture<MerchantmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
