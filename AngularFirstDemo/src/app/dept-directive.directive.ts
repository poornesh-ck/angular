import { Directive, ElementRef, Renderer2,Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDeptDirective]'
})
export class DeptDirectiveDirective implements OnInit{

  constructor(private e1:ElementRef,private render:Renderer2) {
    //this.render.setStyle(this.e1.nativeElement,'background','cyan')
   }

  @HostBinding('class') setColor:any
  @Input() dept:any
  ngOnInit(): void {
    if(this.dept=="HR"){
      //this.render.setStyle(this.e1.nativeElement,'background',' #ff1a1a')
      this.setColor='hr'
  
    }
    else if(this.dept=="IT"){
      //this.render.setStyle(this.e1.nativeElement,'background','#33ff99')
      this.setColor='it'

    }
    else{
      this.render.setStyle(this.e1.nativeElement,'background','#1affff')
      
    }
    
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
