import { Component, ViewEncapsulation } from '@angular/core';


import { NewComponent } from './forms/new.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [NewComponent],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works now!';
}
