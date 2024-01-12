import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../module/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[]=[]
  url:string='http://localhost:3000'
  constructor(private httpClient:HttpClient) {
   

   }
   getEmployees(){
    return this.httpClient.get(this.url)

  }
  getEmployeeDetails(eid:number){
    return this.httpClient.get(this.url+'/employee/'+eid)

  }
  
}
