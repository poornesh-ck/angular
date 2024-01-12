import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../Modules/Product';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
  searchText=""
  bol:boolean=false
  pl:any;
  constructor(public pserv:ProductServiceService) { 
    this.pl=new Products("","","",0,0,"")
    console.log(this.pl);
    
   
    //this.categorylist=pserv.getcat().subscribe((pdt)=>{this.categorylist=pdt})
    //console.log(this.categorylist)
  }
  // pl=plist
  onclick(){
    this.bol=true
    console.log(this.bol)
    console.log(this.searchText)
    this.pserv.searchproducts(this.searchText).subscribe((pdt)=>{this.pl=pdt});
    console.log(this.pl)
    // this.pl=this.pserv.getproducts().subscribe((pdt)=>{this.pl=pdt})

  }

}
