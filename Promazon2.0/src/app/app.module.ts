import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModuleModule } from './product-module/product-module.module';
// import { ProductComponent } from './product/product.component';
// import { ViewComponentComponent } from './product/view-component/view-component.component';
// import { ProductComponent } from './product/product.component';

// import { ViewProductComponent } from './product/view-product/view-product.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // ViewComponentComponent,
    // ProductComponent,
    // ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ProductModuleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
