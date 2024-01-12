import { Pipe, PipeTransform } from '@angular/core';
import { Emplpoyee } from './Modules/Employee';

@Pipe({
  name: 'deptFilter',
  pure:false
})
export class DeptFilterPipe implements PipeTransform {

  transform(employees: Emplpoyee[], dept:String): any {
    if(dept=='all'){
      return employees
    }
    else{
      return employees.filter((employees)=>employees.dept==dept)
    }
  }

}
