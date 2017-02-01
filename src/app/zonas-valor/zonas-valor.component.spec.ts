/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZonasValorComponent } from './zonas-valor.component';

describe('ZonasValorComponent', () => {
  let component: ZonasValorComponent;
  let fixture: ComponentFixture<ZonasValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonasValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
