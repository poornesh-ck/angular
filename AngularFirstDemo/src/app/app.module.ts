import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{DemoComponent} from './democomponent/demo-component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeptDirectiveDirective } from './dept-directive.directive';
import { PowerofPipe } from './powerof.pipe';
import { DeptFilterPipe } from './dept-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,DemoComponent, EmployeeComponent, EmployeeListComponent, DeptDirectiveDirective, PowerofPipe, DeptFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
