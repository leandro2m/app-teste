import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ete1Component } from './ete1.component';

describe('Ete1Component', () => {
  let component: Ete1Component;
  let fixture: ComponentFixture<Ete1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ete1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
