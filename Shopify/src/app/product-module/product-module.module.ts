import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product-filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductsComponent } from './search-products/search-products.component';



@NgModule({
  declarations: [
    ProductComponent,
    ViewProductComponent,
    CreateProductComponent,ProductFilterPipe, EditProductComponent, SearchProductsComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,FormsModule,ReactiveFormsModule 
  ]
})
export class ProductModuleModule { }
