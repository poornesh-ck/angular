import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../Modules/Product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productList:any
  pl:Products
  sub=false
  hasError:boolean=false;  
  categorylist:any
  Categories=["Mobiles","Laptops","Earphones","Tablets"]
  constructor(public pserv:ProductServiceService) { 
    this.pl=new Products("","","",0,0,"")
    console.log(this.pl);
    
   
    //this.categorylist=pserv.getcat().subscribe((pdt)=>{this.categorylist=pdt})
    //console.log(this.categorylist)
  }

  



  validate(data:string)

  {

    if(data == 'Open this select menu')

      this.hasError=true

      else

      this.hasError=false

  }

  dataSubmited()

  {

    console.log(this.pl);

 

    //this.pserv.addEmployees(this.pl);
    this.pserv.addEmployees(this.pl).subscribe()

  }
  onClick(){
    // Swal.fire(
    //   'Good job!',
    //   'You clicked the button!',
    //   'success'
    // )

    // Swal.fire(
    //   'Good job!',
    //   'Product added',
    //   'success'
    // )
    this.sub=true
    console.log(this.sub)
  }

 


}
