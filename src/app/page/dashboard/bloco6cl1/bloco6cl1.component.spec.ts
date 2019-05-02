import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco6cl1Component } from './bloco6cl1.component';

describe('Bloco6cl1Component', () => {
  let component: Bloco6cl1Component;
  let fixture: ComponentFixture<Bloco6cl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco6cl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco6cl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
