import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycurrencymasterComponent } from './countrycurrencymaster.component';

describe('CountrycurrencymasterComponent', () => {
  let component: CountrycurrencymasterComponent;
  let fixture: ComponentFixture<CountrycurrencymasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycurrencymasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycurrencymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
