import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-module/product/product.component';
import { ViewProductComponent } from './product-module/view-product/view-product.component';

const routes: Routes = [
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'view',
    component:ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
