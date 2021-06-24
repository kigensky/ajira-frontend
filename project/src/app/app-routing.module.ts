import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeSalaryComponent } from './components/employee-salary/employee-salary.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
              { path: "", component: HomepageComponent },
              { path: "employee-form", component: EmployeeFormComponent },
              { path: "employee-salary", component: EmployeeSalaryComponent },
              { path: "leave-form", component: LeaveFormComponent },
              { path: "post", component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
