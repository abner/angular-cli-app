import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormReactiveComponentComponent } from './form-reactive-component/form-reactive-component.component';

import { NewComponent} from './forms/new.component';
import { AbnerComponent } from './abner/abner.component';
import { NavbarComponent } from './navbar/navbar.component';

//import { BootstrapModule } from './bootstrap.module';

@NgModule({
  declarations: [
    NewComponent,
    FormsComponent,
    FormReactiveComponentComponent,
    AbnerComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    // BootstrapModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
