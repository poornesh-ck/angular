import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  show(): void {
    const hamburger = document.querySelector('.hamburger') as HTMLElement ;
    const navigation = document.querySelector('.navigation') as HTMLElement;

    if (hamburger && navigation) {
      hamburger.classList.toggle('open');
      navigation.classList.toggle('active');
    }
  }







}
