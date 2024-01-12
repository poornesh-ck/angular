import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { UserhomepageComponent } from '../userpagemodule/userhomepage/userhomepage.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
