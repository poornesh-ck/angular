import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './Modules/Product';


@Pipe({
  name: 'productFilter',
  pure:false
})
export class ProductFilterPipe implements PipeTransform {

  transform(product: any, category: string): any {
    if(category=='All'){
      return product
    }
    else{
      return product.filter((product:any)=>product.pcat==category)
    }
  }

}
