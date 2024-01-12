import { Injectable } from '@angular/core';
import { Products } from '../Modules/Product';
import { plist } from '../Modules/Product_list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  

  constructor(private http: HttpClient) {
    
   }
  addProducts(p:Products){
    console.log(p)
    plist.unshift(p)
    
  }

  delProducts(pid:any){
    const index = plist.indexOf(pid);

    console.log(index)
    if (index !== -1) {
      plist.splice(index, 1);
    }

    
    console.log(plist);
  

  }

  UpdateProduct(price:any,qty:any,Object:Products){
    Object.price=price
    Object.pqty=qty
    

  }


  // getProducts(){
  //   return this.productList
  // }  
}
