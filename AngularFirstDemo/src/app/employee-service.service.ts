import { Injectable } from '@angular/core';
import { Emplpoyee } from './Modules/Employee';
import { emplist } from './Modules/Employeelist';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employeeList:Emplpoyee[]
  constructor() { 
    this.employeeList=emplist
    
  }
  addEmployee(emp:Emplpoyee){
    console.log(emp)
    this.employeeList.unshift(emp)
    console.log(this.employeeList)
  }


  getEmployees(){
    return this.employeeList
  }  

  
}
