import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ete3Component } from './ete3.component';

describe('Ete3Component', () => {
  let component: Ete3Component;
  let fixture: ComponentFixture<Ete3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ete3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ete3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
