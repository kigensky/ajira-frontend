import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-details-page',
  templateUrl: './employee-details-page.component.html',
  styleUrls: ['./employee-details-page.component.css']
})
export class EmployeeDetailsPageComponent implements OnInit {
  public employeeData: any[] = []

  constructor(
    private router: Router,
    private employeeService: EmployeeServiceService
  ) { }

  ngOnInit(): void {
    if(!this.employeeService.getToken()) {
      this.router.navigate(["/login"])
    }
    this.fetchEmployeeData();
  }

  fetchEmployeeData() { 
    let url= `${this.employeeService.getBaseURL()}api/employee/`
    this.employeeService.load(url).then((data:any) => {
      // console.log("data", data)
      if(data.data) {
        this.employeeData = data.data;
        // alert("Employee Created successfully")
      } else {
        alert("Login to view the employees")
        this.router.navigate(["/login"])
      }
     
    })
    
  }
  UpdateThisEmployee(url:string) {
    this.employeeService.loadPut(url, body).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchEmployeeData();
      }
    })
  }
  deleteThisEmployee(url:string) {
    this.employeeService.loadDelete(url).then((data:any) => {
      // console.log("data", data)
      if(!data.error) {
        this.fetchEmployeeData();
      }
    })
  }

}
function body(url: string, body: any) {
  throw new Error('Function not implemented.');
}

