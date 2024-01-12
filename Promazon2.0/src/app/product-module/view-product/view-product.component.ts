import { Component, Input } from '@angular/core';
import { Products } from 'src/app/Modules/Product';
import { plist } from 'src/app/Modules/Product_list';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  pl:Products[]
  category='All'
  pid=""
  Categories=["Mobiles","Laptops","Earphones","Tablets"]
  constructor(private pserv:ProductServiceService){
    this.pl=plist
  }
  productid=""
  onedit(pid:any){
    this.productid=pid
    this.edit=true


  }
  p=""
  delp(pid:any){
    console.log(pid)
    plist.indexOf(pid)
    this.pserv.delProducts(pid)

    // delete plist[1];   //[0, , 2, 3, 5, 6] 

    // plist.forEach((element, index) => console.log(index));   
   
    
    
  }
  edit:boolean=false
  changineditBoolean(value:boolean){
    this.edit=value


  }
 

}
