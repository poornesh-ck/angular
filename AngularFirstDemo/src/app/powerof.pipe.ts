import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerof'
})
export class PowerofPipe implements PipeTransform {

  transform(value: any, power: any): any {
    if(value==''){
      return value
    }
    else{
      return value**power
    }
    
  }

}
