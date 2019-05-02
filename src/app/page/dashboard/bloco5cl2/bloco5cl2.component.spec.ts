import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco5cl2Component } from './bloco5cl2.component';

describe('Bloco5cl2Component', () => {
  let component: Bloco5cl2Component;
  let fixture: ComponentFixture<Bloco5cl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco5cl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco5cl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
