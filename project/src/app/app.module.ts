import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { EmployeeSalaryComponent } from './components/employee-salary/employee-salary.component';
import { PostComponent } from './components/post/post.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    NavbarComponent,
    LeaveFormComponent,
    EmployeeSalaryComponent,
    PostComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
