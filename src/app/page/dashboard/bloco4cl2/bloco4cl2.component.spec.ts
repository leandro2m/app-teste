import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloco4cl2Component } from './bloco4cl2.component';

describe('Bloco4cl2Component', () => {
  let component: Bloco4cl2Component;
  let fixture: ComponentFixture<Bloco4cl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloco4cl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloco4cl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
