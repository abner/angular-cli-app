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

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCoreModule } from '@angular2-material/core';

const MATERIAL_COMPONENTS_MODULES = [
  MdButtonModule,
  MdCardModule,
  MdCoreModule
];

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
    ...MATERIAL_COMPONENTS_MODULES
    // BootstrapModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
