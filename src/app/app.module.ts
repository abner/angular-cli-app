import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormReactiveComponentComponent } from './form-reactive-component/form-reactive-component.component';

import { NewComponent} from './forms/new.component';
import { AbnerComponent } from './abner/abner.component';
@NgModule({
  declarations: [
    NewComponent,
    FormsComponent,
    FormReactiveComponentComponent,
    AbnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
