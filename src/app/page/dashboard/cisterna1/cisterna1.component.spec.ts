import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cisterna1Component } from './cisterna1.component';

describe('Cisterna1Component', () => {
  let component: Cisterna1Component;
  let fixture: ComponentFixture<Cisterna1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cisterna1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cisterna1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
