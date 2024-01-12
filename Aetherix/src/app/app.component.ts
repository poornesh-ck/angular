import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aetherix';
  userwork=false
  userworkk=false
  signout=false
  fromSignin($event:any){
    this.userwork=$event
    this.userworkk=true


  }
  
  backtosignin($event:any){
    if($event=='signout'){
      this.signout=true
      this.userworkk=false

    } 
    console.log(this.userwork)   
    console.log(this.title)

  }
  plans=false
  toPlans($event:any){
    this.plans=$event
    this.userworkk=false
    
    console.log(this.plans)

  }
}
