import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpagemoduleRoutingModule } from './userpagemodule-routing.module';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageModule } from '../login-page/login-page.module';
import { PlanspageComponent } from './planspage/planspage.component';
import { RechargeComponent } from './recharge/recharge.component';





@NgModule({
  declarations: [
    UserhomepageComponent,NavbarComponent, PlanspageComponent, RechargeComponent
  ],
  imports: [
    CommonModule,
    UserpagemoduleRoutingModule
  ],
  exports:[UserhomepageComponent,PlanspageComponent,RechargeComponent]
})
export class UserpagemoduleModule { }
