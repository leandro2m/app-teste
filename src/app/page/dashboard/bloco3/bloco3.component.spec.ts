import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco3Component } from './bloco3.component';

describe('Bloco3Component', () => {
  let component: Bloco3Component;
  let fixture: ComponentFixture<Bloco3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
