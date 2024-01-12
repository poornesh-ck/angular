import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  uprice:any
  uqty:any
  Price:FormControl
  qty:FormControl
  pdt:FormGroup
  @Output() comp=new EventEmitter<boolean>()
  @Input() vue:any
  constructor(private pserv:ProductServiceService){
    this.qty=new FormControl('',[Validators.required,Validators.pattern('^[0-9]+')])
    this.Price=new FormControl('',[Validators.required,Validators.pattern("^[0-9]+")])
    this.pdt=new FormGroup({Price:this.Price,qty:this.qty})
    // this.comp.emit(true)
  }
  demo(){
    Object(this.pdt)["eid"]
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pdt.value);
  }
  eplist(){
    this.comp.emit(false)

    this.pserv.UpdateProduct(this.Price.value,this.qty.value,this.vue)
    Swal.fire(
      
      'Product is EDITED!',
      'success'
    )


  }
  oncancel(){
    this.comp.emit(false)
  }

  pricezero:boolean = false;

  qtyzero:boolean = false;

  pricecheck(price:any){

    if(price <= 0){

      this.pricezero = false;

    }

    else{

      this.pricezero = true;

    }

 

  }

  qtycheck(qty:any){

    if(qty <= 0){

      this.qtyzero = false;

    }

    else{

      this.qtyzero = true;

    }

 

  }


 
  

}
