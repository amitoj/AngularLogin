import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalsurchargeComponent } from './terminalsurcharge.component';

describe('TerminalsurchargeComponent', () => {
  let component: TerminalsurchargeComponent;
  let fixture: ComponentFixture<TerminalsurchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalsurchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalsurchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
