import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Products } from 'src/app/Modules/Product';
import { ProductServiceService } from '../product-service.service';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  Categories=["Mobiles","Laptops","Earphones","Tablets"]
  // list:Products[]
  pl:Products
  hasError:boolean=false;  
  sub=false
  constructor(private pserv:ProductServiceService){

    this.pl=new Products("","","","","","")
    // this.list=pserv.getProducts()
  }
  validate(data:string)

  {

    if(data === 'default')

      this.hasError=true

      else

      this.hasError=false

  }

  dataSubmited()

  {

    console.log(this.pl);

 

    this.pserv.addProducts(this.pl);

  }
  onClick(){
    // Swal.fire(
    //   'Good job!',
    //   'You clicked the button!',
    //   'success'
    // )
    this.sub=true
    console.log(this.sub)
  }


}
