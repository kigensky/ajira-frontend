import { SalaryService } from './../services/salary.service.spec';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-employee-salary-form',
  templateUrl: './employee-salary-form.component.html',
  styleUrls: ['./employee-salary-form.component.css']
})
export class EmployeeSalaryFormComponent implements OnInit {
  
    form: FormGroup;
    public salaryData: any = {
      salary_date:'',
      salary_amount: '',
      employee_name: '',
    }
    constructor(
      private router: Router,
      private salaryService: SalaryService
    ) { }
    ngOnInit(): void {
      if(!this.salaryService.getToken()) {
        this.router.navigate(["/login"])
      }
    }
    
    submit() { 
      console.log("this.salaryData", this.salaryData)
      let url= `${this.salaryService.getBaseURL()}api/employee_salary/`
      this.salaryService.loadPost(url, this.salaryData).then((data:any) => {
        console.log("data", data)
        if(data.data) {
          alert("Salary added successfully")
          this.router.navigate(["//employee-salary-details"])
        } else {
          alert("Something went worng when addding salary")
        }
      })
    }
  } 

