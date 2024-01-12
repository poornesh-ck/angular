import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProduct]'
})
export class ProductDirective implements OnInit{

  constructor(private e1:ElementRef,private render:Renderer2) { 


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('mouseover')
  mouseover(){
    this.render.setStyle(this.e1.nativeElement,'opacity','0.67')
  }
  @HostListener('mouseout')
  mouseout(){
    this.render.setStyle(this.e1.nativeElement,'opacity','1')

  }

}
