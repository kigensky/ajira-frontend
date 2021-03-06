import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';
import { EmployeeSalaryDetailsComponent } from './employee-salary-details/employee-salary-details.component';
import { LeaveDetailsPageComponent } from './leave-details-page/leave-details-page.component';
import { CreateEmployeeUpdateComponent } from './update/create-employee-update/create-employee-update.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    LeaveFormComponent,
    EmployeeSalaryComponent,
    PostComponent,
    HomepageComponent,
    SignupComponent,
    EmployeeFormComponent,
    EmployeeDetailsPageComponent,
    EmployeeSalaryDetailsComponent,
    LeaveDetailsPageComponent,
    CreateEmployeeUpdateComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}