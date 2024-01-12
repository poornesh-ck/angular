import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  Price:FormControl
  qty:FormControl
  pdt:FormGroup
  @Output() comp=new EventEmitter<boolean>()
  @Input() vue:any
  constructor(public pserv:ProductServiceService){
    this.qty=new FormControl('',[Validators.required,Validators.pattern('^[0-9]+')])
    this.Price=new FormControl('',[Validators.required,Validators.pattern("^[0-9]+")])
    this.pdt=new FormGroup({Price:this.Price,qty:this.qty})
  }
  eplist(){
    this.comp.emit(false)
    this.vue.price=this.Price.value
    this.vue.pqty=this.qty.value
    this.pserv.editproducts(this.vue).subscribe()
    console.log(this.vue)

    // this.pserv.editproducts()

    // this.pserv.UpdateProduct(this.Price.value,this.qty.value,this.vue)
    // Swal.fire(
      
    //   'Product is EDITED!',
    //   'success'
    // )


  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.pdt.value);
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
