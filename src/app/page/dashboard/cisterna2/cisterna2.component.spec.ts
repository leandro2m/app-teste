import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cisterna2Component } from './cisterna2.component';

describe('Cisterna2Component', () => {
  let component: Cisterna2Component;
  let fixture: ComponentFixture<Cisterna2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisterna2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cisterna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
