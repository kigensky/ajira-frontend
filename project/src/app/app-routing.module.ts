import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: "", component: HomepageComponent },
  { path: "employee-form", component: EmployeeFormComponent },
  { path: "employee-salary", component: EmployeeSalaryComponent },
  { path: "leave-form", component: LeaveFormComponent },
  { path: "post", component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
