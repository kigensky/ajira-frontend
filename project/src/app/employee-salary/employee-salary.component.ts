import { SalaryService } from './../services/salary.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
;


@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
  form: FormGroup;
  
  public salaryData: any = {
    salary_date:'',
    salary_amount:'',
    employee_name:'',
  }
  constructor(
  
    private formBuilder: FormBuilder,
    private http: HttpClient,
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
    } else {
      alert("Something went wrong while adding salary")
    }
  })
  
}

}


