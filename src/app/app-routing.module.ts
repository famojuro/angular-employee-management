import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

const appRoutes : Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
