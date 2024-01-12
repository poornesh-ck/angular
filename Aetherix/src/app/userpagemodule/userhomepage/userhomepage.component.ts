import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent {
  navmenu=''
  @Output() upage=new EventEmitter<any>()
  Redirectapp($event: string){
    this.navmenu=$event
    this.upage.emit('signout')
    console.log(this.upage)
    


  }
  @Output() forPlans=new EventEmitter<any>()
  fromuserHomePage(){
    this.forPlans.emit(true)

  }

}
