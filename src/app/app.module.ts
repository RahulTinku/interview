import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { EmployeeComponent } from './employee/employee.component';
import { RoutingModule } from './routing.module';
import { Custom } from './test';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations : [
    AppComponent,
    Custom,
    EmployeeComponent
  ],
  imports : [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers : [],
  bootstrap : [AppComponent],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule{}