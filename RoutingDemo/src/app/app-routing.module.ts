import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';

const routes: Routes = [
  {
    path: 'view',
    component:EmployeeListComponent
  },
  {
    path: 'add',
    component:AddEmployeesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
