import { Component } from '@angular/core';
import { emplist } from '../Modules/Employeelist';
import { Emplpoyee } from '../Modules/Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  list:Emplpoyee[]
  number=(10/3)
  departments=['IT','HR','MR']
  dept='all'
  emp:Emplpoyee
  hasError:boolean=false;  
  constructor(private eserv:EmployeeServiceService){

    this.emp=new Emplpoyee("","","","")
    this.list=eserv.getEmployees()
  }
  
  validate(data:string)

  {

    if(data === 'default')

      this.hasError=true

      else

      this.hasError=false

  }
  dataSubmited()

  {

    console.log(this.emp);

 

    this.eserv.addEmployee(this.emp);

  }

  addEmp(){
    this.list.push(new Emplpoyee(105,'FFF','HR',45000))
  }
  delEmp(){
    this.list.pop()
  }
 
  

}
