import { Component } from '@angular/core';
import { plist } from 'src/app/Modules/Product_list';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
  searchText=""
  bol:boolean=false
  pl=plist
  onclick(){
    this.bol=true
    console.log(this.bol)

  }

}
