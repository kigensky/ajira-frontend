import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { PostComponent } from './post/post.component';

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
