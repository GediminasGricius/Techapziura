import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import {FormsModule} from "@angular/forms";
import { CarYearDirective } from './directives/car-year.directive';
import {HttpClientModule} from "@angular/common/http";
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import {RouterModule, Routes} from "@angular/router";
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';

const routes:Routes=[
  {
    path:'',
    component:RegistrationListComponent
  },
  {
    path:'new',
    component:RegistrationNewComponent
  },
  {
    path:'edit/:id',
    component:RegistrationEditComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    CarYearDirective,
    RegistrationListComponent,
    NavigationComponent,
    RegistrationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
