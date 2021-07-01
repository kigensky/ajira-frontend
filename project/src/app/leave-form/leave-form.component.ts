import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';
import { LeaveService } from '../services/leave.service';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {
  form: FormGroup;
  public leaveData: any = {
    employee_name: '',
    department: '',
    month: '',
    year: '',
    Start_Date: '',
    End_Date: '',
    Reason: '',
  }
  Employees;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private leaveService: LeaveService,
    private EmployeeService: EmployeeServiceService
  ) { }
  ngOnInit(): void {
    if(!this.leaveService.getToken()) {
      this.router.navigate(["/login"])
    }
    this.getEmployees()
  }
  getEmployees() {
    let url= `${this.EmployeeService.getBaseURL()}api/employee/`
    this.EmployeeService.load(url).then((data:any) => {
      console.log("data", data)
      if(data.data) {
        this.Employees = data.data;
        // alert("Employee Created successfully")
      } else {
        alert("Login to view the employees")
        // alert("Login to view the employees")
        this.router.navigate(["/login"])
      }
     
    })
  }
  submit() { 
    console.log("this.leaveData", this.leaveData)
    let url= `${this.leaveService.getBaseURL()}api/leave/`
    this.leaveService.loadPost(url, this.leaveData).then((data:any) => {
      console.log("data", data)
      if(data.data) {
        alert("Leave Days Added successfully")
        this.router.navigate(["/leave-details-page"])
      } else {
        alert("Something went wronng when creating the user")
      }
    })
  }
}
