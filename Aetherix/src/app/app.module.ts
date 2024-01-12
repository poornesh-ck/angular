import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserpagemoduleModule } from './userpagemodule/userpagemodule.module';
import { UserpagemoduleRoutingModule } from './userpagemodule/userpagemodule-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    BrowserAnimationsModule,UserpagemoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
