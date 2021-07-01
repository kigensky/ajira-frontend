
import { EmployeeSalaryDetailsComponent } from './employee-salary-details/employee-salary-details.component';
import { LeaveDetailsPageComponent } from './leave-details-page/leave-details-page.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { PostComponent } from './post/post.component';
import { EmployeeSalaryComponent} from './employee-salary/employee-salary.component'
import { EmployeeDetailsPageComponent } from './employee-details-page/employee-details-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: "", component: HomepageComponent },
  { path: "employee-form", component: EmployeeFormComponent },
  { path: "leave-form", component: LeaveFormComponent },
  { path: "post", component: PostComponent },
  { path: "employee-details-page", component: EmployeeDetailsPageComponent },
  { path: "employee-salary-details", component: EmployeeSalaryDetailsComponent },
  {path : "leave-details-page", component: LeaveDetailsPageComponent},
  { path: "employee-salary", component: EmployeeSalaryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
