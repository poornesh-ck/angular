import { Component, EventEmitter, Input, Output ,OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'demo',
  
  templateUrl: './demo-component.html',
  styleUrls: ['./demo-component.css']
 
})
export class DemoComponent implements OnChanges,OnInit{
   @Input() Myname:any
   @Input() gotchange:any
   @Output() uname=new EventEmitter<any>();
   setName(iname:any){
    this.Myname=iname
    this.uname.emit(this.Myname)


   }
   ngOnInit(): void {
    console.log('init in child')
  }
   ngOnChanges():void{
    console.log("changing in demo")
  }

  


}
