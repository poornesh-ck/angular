import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent {

  myName:FormControl
  emp:FormGroup
  departments=['IT','HR','MR']
  dept='all'
  eid:FormControl
  constructor(){
    this.myName=new FormControl()
    this.eid=new FormControl('',[Validators.required,Validators.pattern("^[E].[0-9]+"),Validators.minLength(3)])
    this.emp=new FormGroup({eid:this.eid,ename:new FormControl(),sal:new FormControl(),dept:new FormControl()})
  }
  demo(){
    Object(this.emp)["eid"]
  }
 
}
