import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco5cl1Component } from './bloco5cl1.component';

describe('Bloco5cl1Component', () => {
  let component: Bloco5cl1Component;
  let fixture: ComponentFixture<Bloco5cl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco5cl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco5cl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
