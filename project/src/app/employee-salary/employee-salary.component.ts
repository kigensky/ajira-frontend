import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';
import { SalaryService } from '../services/salary.service';

@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
  form: FormGroup;
  public employees: any[] = []
  
  public salaryData: any = {
    salary_date:'',
    salary_amount:'',
    employee_name:'',
  }
  constructor(
  
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private salaryService: SalaryService,
    private employeeService: EmployeeServiceService
  
  
  ) { }

  ngOnInit(): void {
    if(!this.salaryService.getToken()) {
      this.router.navigate(["/login"])
    
  }
  this.getEmployees();

}
getEmployees() {
  let url= `${this.employeeService.getBaseURL()}api/employee/`
  this.employeeService.load(url).then((data:any) => {
    console.log("data", data)
    if(data.data) {
      this.employees = data.data;
      // alert("Employee Created successfully")
    } else {
      alert("Login to view the employees")
      // alert("Login to view the employees")
      this.router.navigate(["/login"])
    }
   
  })
}
submit() { 
  console.log("this.employeeData", this.salaryData)
  let url= `${this.salaryService.getBaseURL()}api/employee_salary/`
  this.salaryService.loadPost(url, this.salaryData).then((data:any) => {
    console.log("data", data)
    if(data.data) {
      alert("Salary added successfully")
    } else {
      alert("Something went wrong while adding salary")
    }
   
  })
  
}

}

