import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantcategorycodemasterComponent } from './merchantcategorycodemaster.component';

describe('MerchantcategorycodemasterComponent', () => {
  let component: MerchantcategorycodemasterComponent;
  let fixture: ComponentFixture<MerchantcategorycodemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantcategorycodemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantcategorycodemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
