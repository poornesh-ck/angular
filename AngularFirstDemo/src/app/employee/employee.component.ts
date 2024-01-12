import { Component, Input } from '@angular/core';
import { Emplpoyee } from '../Modules/Employee';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emp:Emplpoyee
  constructor(){
    this.emp=new Emplpoyee(101,'Poornessh','HR',50000)
  }
  @Input() Emp:any
  today=new Date()

  s={data:'serevr',fuction:'running'}

}
