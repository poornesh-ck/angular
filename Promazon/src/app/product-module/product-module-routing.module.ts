import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SearchProductsComponent } from './search-products/search-products.component';

const routes: Routes = [
  {
    path:'view',
    component:ViewProductComponent
  },
  {
    path:'create',
    component:CreateProductComponent
  },
  {
    path:'search',
    component:SearchProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
