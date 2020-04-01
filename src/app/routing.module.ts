// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class RoutingModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const routes : Routes = [
  { path : '', component: EmployeeComponent }
]

@NgModule({
  imports : [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations : [ EmployeeComponent ],

  exports : [ RoutingModule ]
})
export class RoutingModule {}