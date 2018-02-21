import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalriskmoduleComponent } from './terminalriskmodule.component';

describe('TerminalriskmoduleComponent', () => {
  let component: TerminalriskmoduleComponent;
  let fixture: ComponentFixture<TerminalriskmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalriskmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalriskmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
