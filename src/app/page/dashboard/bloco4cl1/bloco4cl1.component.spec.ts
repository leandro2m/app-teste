import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco4cl1Component } from './bloco4cl1.component';

describe('Bloco4cl1Component', () => {
  let component: Bloco4cl1Component;
  let fixture: ComponentFixture<Bloco4cl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco4cl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco4cl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
