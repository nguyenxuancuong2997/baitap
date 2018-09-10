/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnbumComponent } from './anbum.component';

describe('AnbumComponent', () => {
  let component: AnbumComponent;
  let fixture: ComponentFixture<AnbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
