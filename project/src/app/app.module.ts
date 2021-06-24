import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';




import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    NavbarComponent,
    LeaveFormComponent,
    EmployeeSalaryComponent,
    PostComponent,
    HomepageComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
      
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
