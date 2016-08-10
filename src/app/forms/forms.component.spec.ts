/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FormsComponent } from './forms.component';

import {TestBed, getTestBed, ComponentFixture} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModule } from '../app.module';

// testBed.configureTestingModule(AppModule);


describe('Component: Forms', () => {

  let testBed: TestBed;

  beforeEach(() => {

    testBed = getTestBed();
    testBed.configureTestingModule({
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      declarations: [FormsComponent]
    });
  });

  it('should create an instance', () => {
    let component = new FormsComponent();
    expect(component).toBeTruthy();
  });

  it('creates component using TestBed', () => {
    let fixture: ComponentFixture<FormsComponent> = testBed.createComponent(FormsComponent);
    fixture.componentInstance.campoNome = 'Abner';
    fixture.detectChanges();
    let input: HTMLInputElement = fixture.debugElement.query(By.css('input[name="campoNome"]')).nativeElement;
    expect(input.attributes.getNamedItem('ng-reflect-model').value).toEqual('Abner');
  });
});
