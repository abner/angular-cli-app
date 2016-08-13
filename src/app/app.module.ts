import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './features/forms/forms.component';
import { FormReactiveComponentComponent } from './features/form-reactive-component/form-reactive-component.component';

import { NewComponent} from './features/forms/new.component';

import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    NewComponent,
    FormsComponent,
    FormReactiveComponentComponent,
    AppComponent
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
