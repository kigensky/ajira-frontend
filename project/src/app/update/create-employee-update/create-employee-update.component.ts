import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-employee-update',
  templateUrl: './create-employee-update.component.html',
  styleUrls: ['./create-employee-update.component.css']
})
export class CreateEmployeeUpdateComponent implements OnInit {
  form: FormGroup;

  public employeeData: any = {
    employee_name: '',
    department:'',
    address: '',
    status: '',
    job_title: ''
  }




  constructor(
    
    
    private formBuilder: FormBuilder,
    private http: HttpClient,
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
    this.employeeService.loadPut(url, this.employeeData).then((data:any) => {
      // console.log("data", data)
      if(data.data) {
        alert("Employee Updated successfully")
        this.router.navigate(["/employee-details-page"])
      } else {
        alert("Something went worng when creating the user")
      }
     
    })
    
  }

}
