import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco2Component } from './bloco2.component';

describe('Bloco2Component', () => {
  let component: Bloco2Component;
  let fixture: ComponentFixture<Bloco2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
