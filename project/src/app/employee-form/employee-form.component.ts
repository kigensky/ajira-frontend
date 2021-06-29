import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;

  public employeeData: any = {
    employee_name: '',
    department:'',
    address: '',
    status: '',
    job_title: ''
  }




  constructor(
    private router: Router,
    private employeeService: EmployeeServiceService
  ) { }

  ngOnInit(): void {
    if(!this.employeeService.getToken()) {
      this.router.navigate(["/login"])
    }
  }
  submit() { 
    // console.log("this.employeeData", this.employeeData)
    let url= `${this.employeeService.getBaseURL()}api/employee/`
    this.employeeService.loadPost(url, this.employeeData).then((data:any) => {
      // console.log("data", data)
      if(data.data) {
        alert("Employee Created successfully")
      } else {
        alert("Something went worng when creating the user")
      }
     
    })
    
  }

}
