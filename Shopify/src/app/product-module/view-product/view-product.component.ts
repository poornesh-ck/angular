import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Categories } from '../Modules/Category';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productList:any
  // Categories=["Mobiles","Laptops","Earphones","Tablets"]
  constructor(public pserv:ProductServiceService) { 
    this.Categories=Categories
    this.productList=pserv.getproducts().subscribe((pdt)=>{this.productList=pdt})
    
  }
  edit:boolean=false
  productid=""
  onedit(pid:any){
    this.productid=pid
    this.edit=true


  }
  changineditBoolean(value:boolean){
    this.edit=value


  }
 




  category:string='All';
  Categories:string[];
  delp(pid:any):void{
    console.log(pid)
    this.pserv.delproducts(pid).subscribe();
    this.productList=this.pserv.getproducts().subscribe((pdt)=>{this.productList=pdt})
    // this.pserv.getproducts().subscribe((pdt)=>{this.productList=pdt})
   

    // delete plist[1];   //[0, , 2, 3, 5, 6] 

    // plist.forEach((element, index) => console.log(index));   
   
    
    
  }


  


}
