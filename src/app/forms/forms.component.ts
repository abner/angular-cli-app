import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FormsComponent implements OnInit {
  campoNome: string;

  formDisabled: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  setDisabled() {
    this.formDisabled = true;
  }

}
