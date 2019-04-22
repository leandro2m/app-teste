import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ete2Component } from './ete2.component';

describe('Ete2Component', () => {
  let component: Ete2Component;
  let fixture: ComponentFixture<Ete2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ete2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
