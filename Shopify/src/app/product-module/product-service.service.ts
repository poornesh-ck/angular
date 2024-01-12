import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './Modules/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  url='http://localhost:8200'
  constructor(private http: HttpClient) {

   }

   getproducts(){
    return this.http.get(this.url+"/products")

   }

   searchproducts(pname:string){
    console.log(this.http.get(`${this.url+"/search"}/${pname}`))
    return this.http.get(`${this.url+"/search"}/${pname}`)
    
   }

   getcat(){
    return this.http.get(this.url+"/category")

   }


   addEmployees(prod:Products){
    console.log(prod);
    
    return this.http.post(this.url+"/add",prod)
   }

   delproducts(pid:string){
    return this.http.delete(`${this.url+"/products"}/${pid}`)
   }
   product:Products=new Products("","","",1,1,"")
   editproducts(prod:any){
    
    // this.product.price=price
    // this.product.pqty=qty 
    return this.http.put(this.url+'/edit',prod)
   }

}
