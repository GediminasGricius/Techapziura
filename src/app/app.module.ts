import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import {FormsModule} from "@angular/forms";
import { CarYearDirective } from './directives/car-year.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    CarYearDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
