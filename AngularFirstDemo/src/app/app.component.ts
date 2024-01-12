import { Component, ViewEncapsulation,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //template:`<h1 class="main">hii</h1> `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles:[`h1{color:red;text-align:center;padding:3%;background-color:black;border:10px solid yellow}`] 
  //without refereing 
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnChanges,OnInit{
  title = 'Welcome poorneshhh';
  myName='Poornesh'
  vair='main'
  msg='type'
  random=''
  uname='Jeeva daaaa!!!!'
  onchange:any
  choice=false
  fruits=["apple","mathulai","thrachai","munthiri"]
 
  emp1={eid:"101",name:"aaa",salary:"5000",dept:"It"}
  emp2={eid:"102",name:"bbb",salary:"4000",dept:"hr"}
  emp3={eid:"103",name:"ccc",salary:"6000",dept:"It"}
  // emp={first:this.emp1,second:this.emp2,third:this.emp3}

  emp11=[{eid:"101",name:"aaa",salary:"5000",dept:"It"},{eid:"102",name:"bbb",salary:"4000",dept:"hr"},{eid:"103",name:"ccc",salary:"6000",dept:"It"}]



  public getRandomColour(){
    let letter='0123456789ABCDEF'.split('');
    let colour='#'
    for(let i=0;i<6;i++){
      colour+=letter[Math.floor(Math.random()*16)]

    }
    this.random=colour
    //return colour;

  }
  // public setcolor()
  // {
  //   this.random=this.getRandomColour()
  // }
  usersname:any
  getname(iname:any){
    this.usersname=iname


  }
  ngOnInit(): void {
    console.log('init in parent')
  }
  ngOnChanges():void{
    console.log('changing in app');
  }
  display='show'
  fontcolor=''
  colochange(colochange:any){
   
    
    if(this.choice==true){
       this.choice=false
       this.fontcolor='red'
       this.display='show'

       

    }
    else{
      this.choice=true
       this.fontcolor='green'
       this.display='hide'
      
    }
    
    

  }
  number=(10/3)
  

}


