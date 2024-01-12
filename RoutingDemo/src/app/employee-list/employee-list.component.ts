import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList:any
  constructor(private eserv:EmployeeService){
    this.eserv.getEmployeeDetails(2).subscribe((emp)=>{this.employeeList=emp})

  }

}
