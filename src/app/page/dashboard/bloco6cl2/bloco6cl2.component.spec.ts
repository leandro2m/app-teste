import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco6cl2Component } from './bloco6cl2.component';

describe('Bloco6cl2Component', () => {
  let component: Bloco6cl2Component;
  let fixture: ComponentFixture<Bloco6cl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco6cl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco6cl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
