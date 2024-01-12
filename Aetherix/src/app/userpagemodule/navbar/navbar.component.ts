import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() GotoLogin=new EventEmitter<any>()
  RedirectUserPage(){
    this.GotoLogin.emit('signout')
    console.log(this.GotoLogin)

  }

}
