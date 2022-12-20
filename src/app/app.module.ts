import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationNewComponent } from './components/registration-new/registration-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarYearDirective } from './directives/car-year.directive';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import {RouterModule, Routes} from "@angular/router";
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationEditComponent } from './components/registration-edit/registration-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {AuthGuard} from "./guards/auth.guard";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes:Routes=[
  {
    path:'',
    component:RegistrationListComponent
  },
  {
    path:'new',
    component:RegistrationNewComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit/:id',
    component:RegistrationEditComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'addEmployee',
    component:AddEmployeeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationNewComponent,
    CarYearDirective,
    RegistrationListComponent,
    NavigationComponent,
    RegistrationEditComponent,
    AuthComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
