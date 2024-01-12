import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../Modules/Product';

@Pipe({
  name: 'productFilter',
  pure:false
})
export class ProductFilterPipe implements PipeTransform {

  transform(product: Products[], category: string): any {
    if(category=='All'){
      return product
    }
    else{
      return product.filter((product)=>product.pcat==category)
    }
  }

}
