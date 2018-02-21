import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalmasterComponent } from './terminalmaster.component';

describe('TerminalmasterComponent', () => {
  let component: TerminalmasterComponent;
  let fixture: ComponentFixture<TerminalmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
