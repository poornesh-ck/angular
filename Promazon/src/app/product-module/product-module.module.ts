import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ProductDirective } from './product.directive';
import { ProductFilterPipe } from './product-filter.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PsearchPipe } from './psearch.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent,
    ViewProductComponent,
    CreateProductComponent,
    SearchProductsComponent,
    ProductDirective,
    ProductFilterPipe,
    EditProductComponent,
    PsearchPipe
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[ ProductComponent,
    ViewProductComponent]
})
export class ProductModuleModule { }
