import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalsupportedmodeComponent } from './terminalsupportedmode.component';

describe('TerminalsupportedmodeComponent', () => {
  let component: TerminalsupportedmodeComponent;
  let fixture: ComponentFixture<TerminalsupportedmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalsupportedmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalsupportedmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
